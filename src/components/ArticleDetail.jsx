import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ArticleDetailContainer = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
  padding: 3rem 2rem;
  padding-top: 100px;
  margin: 0 auto;
  background: linear-gradient(to right, #f0fdf4, #dcfce7);
  color: #1e3a1d;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 80px;
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #4b5563;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #15803d;
  }

  svg {
    font-size: 1.3rem;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
`;

const ArticleTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #166534;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ArticleMeta = styled.div`
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ArticleContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
    color: #334155;
  }

  b, strong {
    color: #14532d;
  }
`;

const ArticleDetail = () => {
  // Force light mode
  const themeMode = 'light';

  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchArticle = async () => {
      setLoading(true);
      Swal.fire({
        title: 'Loading Article...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const docRef = doc(db, 'blogs', articleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
          Swal.close();
        } else {
          Swal.fire('Not Found', 'The requested article does not exist.', 'error');
          setArticle(null);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        Swal.fire('Error', 'Failed to load article. Please try again later.', 'error');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return (
      <ArticleDetailContainer>
        <p style={{ textAlign: 'center', color: '#64748b' }}>Loading...</p>
      </ArticleDetailContainer>
    );
  }

  if (!article) {
    return (
      <ArticleDetailContainer>
        <BackButton onClick={() => navigate('/blogs')}>
          <FaAngleLeft /> Back to Articles
        </BackButton>
        <ArticleTitle>Article Not Found</ArticleTitle>
        <ArticleContent>
          <p>The article you are looking for does not exist or has been moved.</p>
        </ArticleContent>
      </ArticleDetailContainer>
    );
  }

  const wordCount = article.mainArticle?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <ArticleDetailContainer>
      <BackButton onClick={() => navigate('/blogs')}>
        <FaAngleLeft /> Back to Articles
      </BackButton>

      {article.imageUrl && (
        <ArticleImage src={article.imageUrl} alt={article.title || 'Blog Post'} />
      )}

      <ArticleTitle>{article.title || 'Untitled Article'}</ArticleTitle>
      <ArticleMeta>
        <span>{readingTime} min read</span>
      </ArticleMeta>

      <ArticleContent dangerouslySetInnerHTML={{ __html: article.mainArticle || '<p>No content available.</p>' }} />

      <BackButton onClick={() => navigate('/blogs')} style={{ marginTop: '3rem' }}>
        <FaAngleLeft /> Back to Articles
      </BackButton>
    </ArticleDetailContainer>
  );
};

export default ArticleDetail;
