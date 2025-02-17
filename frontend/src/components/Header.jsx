/* eslint-disable no-unused-vars */
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import LoginSignup from "./Login";

export default function Navbaar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar className="fixed top-0 left-0 w-full px-8 py-4 bg-gray-900 z-50 shadow-md">
      {/* Brand */}
      <Navbar.Brand as="div">
        <Link
          to="/"
          onClick={scrollToTop}
          className="ml-6 self-center whitespace-nowrap text-xl font-semibold text-white"
        >
          Gul Faraz Khan
        </Link>
      </Navbar.Brand>

      {/* Navigation Links */}
      <Navbar.Collapse>
        <Link to="/" onClick={scrollToTop} className="text-lg text-white hvr">Home</Link>
        <Link to="/shop" onClick={scrollToTop} className="text-lg text-white hvr">Shop</Link>
        <div 
          className="relative hvr"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="text-lg text-white">Collections ⮟</button>
          {isOpen && (
            <div className="absolute top-full left-0 bg-gray-900 text-white shadow-md p-2 space-y-2">
              <Link to="/collections/mens" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-700 hvr">Men&apos;s Collection</Link>
              <hr />
              <Link to="/collections/womens" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-700 hvr">Women&apos;s Collection</Link>
              <hr />
              <Link to="/collections/kids" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-700 hvr">Kid&apos;s Collection</Link>
            </div>
          )}
        </div>
        <Link to="/blogs" onClick={scrollToTop} className="text-lg text-white hvr">Blogs</Link>
        <Link to="/contact" onClick={scrollToTop} className="text-lg text-white hvr">Contact Us</Link>
      </Navbar.Collapse>

      {/* Icons & Buttons */}
      <div className="flex gap-10 items-center">
        <Link to="/cart" onClick={scrollToTop} className="tooltip-container">
          <ShoppingCart size={28} className="text-white" />
          <span className="tooltip">Cart Items</span>
        </Link>
        <button className="button" onClick={() => setLoginOpen(true)}>
          <span>Log In</span>
        </button>
        {
          loginOpen &&
          <LoginSignup loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
        }
      </div>

      <Navbar.Toggle />
    </Navbar>
  );
}
