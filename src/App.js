
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';
import DonatePage from './components/DonatePage';
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './components/Blogs';
import AuthenticityPage from './components/AuthenticityPage';
import Gallery from './components/Gallery';
import INECEngagement from './components/INECEngagement';
import wp from './Images/whatsapplogo.png'
import fb from './Images/fb.png'
import ins from './Images/ins.png'
import SupportUsComponent from './components/SupportUsComponent';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Menu/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/donate' element={<DonatePage/>}/>
        <Route path="/aboutus" element={<AboutPage/>}/>
        <Route path = '/blogs' element={<Blogs/>}/>
        <Route path='/authenticity' element={<AuthenticityPage/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/inecengagement' element={<INECEngagement/>}/>
      </Routes>
      {/* <a><img src={fb} alt="logo" className="WhatsAppIcon1" onClick={() => window.open("https://wa.me/", "_blank")} /></a>  */}
      {/* <a><img src={ins} alt="logo" className="WhatsAppIcon2" onClick={() => window.open("https://wa.me/", "_blank")} /></a>  */}
    
      <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/2347053359779", "_blank")} /></a> 
    <SupportUsComponent/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
