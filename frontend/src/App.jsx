import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import WhatsappURL from "./components/WhatsappURL";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Foooter from "./components/Footer";
import Blog from "./components/Blog";
import Blogs from "./pages/Blogs";
import {Toaster} from 'react-hot-toast'
import ShoppindItem from "./components/ShoppingItem";
// import { useSelector } from "react-redux";

// Styled 404 Page
const NotFound = () => (
  <div style={{backgroundColor: "#030112"}} className="flex items-center justify-center h-screen  text-white">
    <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
  </div>
);

function App() {

  // const admin = useSelector((state)=>state.isAdmin);
  // console.log(admin);
  
  return (
    <Router>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/item/:slug" element={<ShoppindItem />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop/>
      <WhatsappURL />
      <Foooter />
    </Router>
  );
}

export default App;