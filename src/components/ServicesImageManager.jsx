


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression'; // Import the image compression library

// --- Light Theme Colors (Consistent with Admin Dashboard) ---
const adminThemeColors = {
    mainBackground: '#F5F7FA',
    cardBackground: '#FFFFFF',
    cardBorder: '#E0E6ED',
    mainText: '#333333',
    secondaryText: '#666666',
    accent: '#4A90E2',
    accentHover: '#3A7DCF',
    danger: '#E74C3C',
    dangerHover: '#C0392B',
    headerColor: '#2c3e50',
    buttonText: '#FFFFFF',
    inputBackground: '#F8FAFC',
    inputBorder: '#CBD5E1',
    inputTextColor: '#333333',
};

// --- Styled Components ---

const PageContainer = styled.div`
    background-color: ${adminThemeColors.mainBackground};
    min-height: 100vh;
    padding: 3rem 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${adminThemeColors.mainText};

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const HeaderContainer = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Title = styled.h2`
    color: ${adminThemeColors.headerColor};
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 2.8rem;
    }
`;

const Subtitle = styled.p`
    color: ${adminThemeColors.secondaryText};
    font-size: 1rem;
`;

const UploadSection = styled.div`
    background-color: ${adminThemeColors.cardBackground};
    border: 1px solid ${adminThemeColors.cardBorder};
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    max-width: 600px;
    margin: 0 auto 3rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Label = styled.label`
    display: block;
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: ${adminThemeColors.mainText};
    font-size: 1.05rem;
`;

const ImagePreview = styled.img`
    max-width: 100%;
    max-height: 200px;
    margin-top: 1rem;
    border-radius: 8px;
    object-fit: contain;
    border: 1px solid ${adminThemeColors.cardBorder};
    display: block;
`;

const FileInput = styled.input`
    width: 100%;
    padding: 0.8rem;
    background-color: ${adminThemeColors.inputBackground};
    color: ${adminThemeColors.inputTextColor};
    border: 1px solid ${adminThemeColors.inputBorder};
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;

    &:focus {
        border-color: ${adminThemeColors.accent};
        outline: none;
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    }

    &::file-selector-button {
        font-weight: 600;
        color: ${adminThemeColors.mainText};
        background-color: #e0e0e0;
        border: none;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #c2c2c2;
        }
    }
`;

const UploadButton = styled.button`
    background-color: ${adminThemeColors.accent};
    color: ${adminThemeColors.buttonText};
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: ${adminThemeColors.secondaryText};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${adminThemeColors.accentHover};
    }
`;

const ImageGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
`;

const ImageCard = styled.div`
    background-color: ${adminThemeColors.cardBackground};
    border: 1px solid ${adminThemeColors.cardBorder};
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
`;

const DisplayImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
    background-color: #f0f0f0;
`;

const ImageInfo = styled.p`
    font-size: 0.9rem;
    color: ${adminThemeColors.secondaryText};
    margin-bottom: 1rem;
    word-break: break-all;
    text-align: center;
`;

const DeleteButton = styled.button`
    background-color: ${adminThemeColors.danger};
    color: ${adminThemeColors.buttonText};
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${adminThemeColors.dangerHover};
    }
`;

const NoImagesMessage = styled.p`
    text-align: center;
    grid-column: 1 / -1;
    color: ${adminThemeColors.secondaryText};
    font-size: 1.1rem;
    padding: 2rem;
    background-color: ${adminThemeColors.cardBackground};
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

// --- Constants for Image Validation and Compression ---
const MAX_IMAGE_SIZE_KB = 100;
const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
const MAX_IMAGE_DIMENSION_PX = 1200; // Max width or height for resizing


const ServicesImageManager = () => {
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Function to fetch all image URLs from Firestore
    const fetchImages = async () => {
        setLoading(true);
        Swal.fire({
            title: 'Loading Images...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        try {
            // NOTE: Changed collection name to 'uploaded_images' as per your original component
            const q = query(collection(db, 'uploaded_images'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const fetchedImages = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate() : doc.data().createdAt,
            }));
            setImages(fetchedImages);
            Swal.close();
        } catch (error) {
            console.error('Error fetching images:', error);
            Swal.fire('Error', 'Failed to fetch images.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(); // Fetch images on component mount
    }, []);

    // MODIFIED handleFileChange function for validation and compression
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        // If no file is selected (e.g., user opens and closes file picker)
        if (!file) {
            setSelectedFile(null); // Clear any previous preview
            e.target.value = ''; // Clear file input
            return;
        }

        // Clear previous selection immediately for a fresh start and UI responsiveness
        setSelectedFile(null);

        // --- 1. File Type Validation ---
        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
            Swal.fire('Error', 'Invalid file type!', 'error', 'Please select a perfect picture image (PNG, JPG, JPEG, GIF).');
            e.target.value = ''; // Clear file input
            return;
        }

        try {
            // --- 2. Initial Size Check (Optional but good for very large files) ---
            // If the file is extremely large, it might be too much to compress effectively
            // to 100KB, and compression might take too long or result in poor quality.
            if (file.size > 5 * 1024 * 1024) { // e.g., 5MB limit
                Swal.fire('Error', 'Image too large!', 'error', `The selected image is larger than 5MB. Please choose a smaller file.`);
                e.target.value = '';
                return;
            }

            // --- 3. Compress and Resize the Image ---
            const options = {
                maxSizeMB: MAX_IMAGE_SIZE_KB / 1024, // Target size in MB (e.g., 100KB = 0.09765625 MB)
                maxWidthOrHeight: MAX_IMAGE_DIMENSION_PX, // Max dimensions in pixels
                useWebWorker: true, // Use web workers for better performance if available
                fileType: file.type // Try to preserve original file type (e.g., GIF stays GIF), or force 'image/jpeg'
            };

            console.log(`Attempting to compress "${file.name}" (Original size: ${(file.size / 1024).toFixed(2)} KB)...`);
            const compressedFile = await imageCompression(file, options);
            console.log(`Compressed image size: ${(compressedFile.size / 1024).toFixed(2)} KB`);

            // --- 4. Final Size Check After Compression ---
            if (compressedFile.size > MAX_IMAGE_SIZE_KB * 1024) {
                Swal.fire('Error', 'Image still too large!', 'error', `Even after optimization, the image is ${(compressedFile.size / 1024).toFixed(2)}KB, which exceeds the ${MAX_IMAGE_SIZE_KB}KB limit. Please choose a different, smaller, or less detailed image.`);
                e.target.value = ''; // Clear file input
                return;
            }

            // If all checks and compression are successful
            setSelectedFile(compressedFile);

        } catch (error) {
            console.error("Image processing error:", error);
            // Provide a general error if compression fails for unexpected reasons
            Swal.fire('Error', 'Image processing failed!', 'error', error.message || 'There was an issue processing your image. Please try again.');
            e.target.value = ''; // Clear file input
            setSelectedFile(null); // Ensure no file is selected
        }
    };

    // Function to upload image to Cloudinary and save URL to Firestore
    const handleUpload = async () => {
        if (!selectedFile) {
            Swal.fire('Warning', 'No image selected!', 'warning', 'Please select an image file first to upload.');
            return;
        }

        setUploading(true);
        Swal.fire({
            title: 'Uploading Image...',
            text: 'This might take a moment...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        try {
            // 1. Upload to Cloudinary
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', 'matthew car wash and cleaning website'); // Replace with your upload preset
            formData.append('cloud_name', 'dzshme0rg'); // Replace with your cloud name

            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dzshme0rg/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                // If Cloudinary returns an error
                throw new Error(data.error?.message || 'Cloudinary upload failed');
            }

            const imageUrl = data.secure_url;

            // 2. Save URL to Firestore
            // NOTE: Changed collection name to 'uploaded_images' as per your original component
            await addDoc(collection(db, 'uploaded_images'), {
                url: imageUrl,
                fileName: selectedFile.name, // Storing original file name
                sizeKB: (selectedFile.size / 1024).toFixed(2), // Storing actual size after compression
                createdAt: serverTimestamp(),
            });

            Swal.fire('Success!', 'Image uploaded and URL saved!', 'success');
            setSelectedFile(null); // Clear selected file after successful upload
            fetchImages(); // Refresh the list of images

        } catch (error) {
            console.error('Upload error:', error);
            Swal.fire('Error', 'Image upload failed!', 'error', `Failed to upload image: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    // Function to delete only the URL from Firestore (image remains on Cloudinary)
    const handleDelete = async (imageId) => {
        Swal.fire({
            title: `Confirm Deletion`,
            text: `Are you sure you want to delete this image from your services gallery?.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: adminThemeColors.danger,
            cancelButtonColor: adminThemeColors.secondaryText,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleting Image...',
                    allowOutsideClick: false,
                    didOpen: () => Swal.showLoading(),
                });
                try {
                    // NOTE: Changed collection name to 'uploaded_images' as per your original component
                    await deleteDoc(doc(db, 'uploaded_images', imageId));
                    Swal.fire('Deleted!', 'Image URL deleted from database.', 'success');
                    fetchImages(); // Refresh the list
                } catch (error) {
                    console.error('Error deleting URL:', error);
                    Swal.fire('Error', 'Failed to delete image URL!', 'error', 'There was an issue deleting the image URL from the database.');
                }
            }
        });
    };

    return (
        <PageContainer>
            <HeaderContainer>
                <Title>Services Image Asset Manager</Title>
                <Subtitle>Upload images for your services and manage their URLs.</Subtitle>
            </HeaderContainer>

            <UploadSection>
                <Label htmlFor="imageUploadInput">Select Image to Upload</Label>
                <FileInput
                    id="imageUploadInput"
                    type="file"
                    // Updated accept attribute to hint browser for allowed types
                    accept="image/png, image/jpeg, image/gif"
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <ImagePreview src={URL.createObjectURL(selectedFile)} alt="Selected File Preview" />
                )}
                <UploadButton onClick={handleUpload} disabled={!selectedFile || uploading}>
                    {uploading ? 'Uploading...' : 'Upload Image'}
                </UploadButton>
            </UploadSection>

            <HeaderContainer style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                <Title style={{ fontSize: '1.8rem' }}>Uploaded Service Images</Title>
            </HeaderContainer>

            {loading ? (
                <NoImagesMessage>Loading images...</NoImagesMessage>
            ) : images.length > 0 ? (
                <ImageGrid>
                    {images.map((img) => (
                        <ImageCard key={img.id}>
                            <DisplayImage src={img.url} alt="Uploaded Service Asset" />
                            <ImageInfo><strong>URL:</strong> {img.url}</ImageInfo>
                            <ImageInfo><strong>Uploaded:</strong> {img.createdAt ? new Date(img.createdAt).toLocaleString() : 'N/A'}</ImageInfo>
                            <DeleteButton onClick={() => handleDelete(img.id)}>Delete</DeleteButton>
                        </ImageCard>
                    ))}
                </ImageGrid>
            ) : (
                <NoImagesMessage>No service images found in the database. Upload one above!</NoImagesMessage>
            )}
        </PageContainer>
    );
};

export default ServicesImageManager;