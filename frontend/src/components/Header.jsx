import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import LoginSignup from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/UserState";
import { toggleAdmin } from '../Redux/AdminState'
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";

export default function Navbaar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const currentUser = useSelector((state) => state.user); // Get user authentication state
  const isAdmin = useSelector((state) => state.isAdmin); // Check if user is admin
  const dispatch = useDispatch(); // Get dispatch function for user actions

  const handleOnLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/logout", {
        method: "POST",
        credentials: "include", // Ensures cookies are cleared
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      if(isAdmin?.isAdmin === true) {
        dispatch(toggleAdmin()); // Clear admin status from Redux state
      }
      dispatch(logout()); // Clear user from Redux state
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

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
        <Link to="/" onClick={scrollToTop} className="text-lg text-white hvr">
          Home
        </Link>
        <Link
          to="/shop"
          onClick={scrollToTop}
          className="text-lg text-white hvr"
        >
          Shop
        </Link>
        <div
          className="relative hvr"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="text-lg text-white">Collections ⮟</button>
          {isOpen && (
            <div className="absolute top-full left-0 bg-gray-900 text-white shadow-md p-2 space-y-2">
              <Link
                to="/collections/mens"
                onClick={scrollToTop}
                className="block px-4 py-2 hover:bg-gray-700 hvr"
              >
                Men&apos;s Collection
              </Link>
              <hr />
              <Link
                to="/collections/womens"
                onClick={scrollToTop}
                className="block px-4 py-2 hover:bg-gray-700 hvr"
              >
                Women&apos;s Collection
              </Link>
              <hr />
              <Link
                to="/collections/kids"
                onClick={scrollToTop}
                className="block px-4 py-2 hover:bg-gray-700 hvr"
              >
                Kid&apos;s Collection
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/blogs"
          onClick={scrollToTop}
          className="text-lg text-white hvr"
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          onClick={scrollToTop}
          className="text-lg text-white hvr"
        >
          Contact Us
        </Link>
      </Navbar.Collapse>

      {/* Icons & Buttons */}
      <div className="flex gap-10 items-center">
        <Link to="/cart-items" onClick={scrollToTop} className="tooltip-container">
          <ShoppingCart size={28} className="text-white" />
          <span className="tooltip">Cart Items</span>
        </Link>
        {currentUser !== null && currentUser.user !== null ? (
          <Dropdown className="bg-gray-800"
          label={
            <img
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" // Replace with your image URL
              alt="User Avatar"
              className="w-10 h-10 rounded-full hover:scale-110" style={{marginLeft: "1rem"}}
            />
          }
          inline
        >
          <Dropdown.Header className="text-gray-200">
            <span className="block truncate text-sm font-medium">{currentUser?.user?.name}</span>
            <span className="block text-sm">{currentUser?.user?.email}</span>
          </Dropdown.Header>
          {
            isAdmin?.isAdmin === true && (
              <Dropdown.Item icon={HiCog} className="text-gray-200 hover:text-gray-800">Admin Panel</Dropdown.Item>
            )
          }
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout} onClick={handleOnLogout} className="text-gray-200 hover:text-gray-800">Sign out</Dropdown.Item>
        </Dropdown>
          // <button className="button" onClick={handleOnLogout}>
          //   <span>Log out</span>
          // </button>
        ) : (
          <button className="button" onClick={() => setLoginOpen(true)}>
            <span>Log In</span>
          </button>
        )}
        {loginOpen && (
          <LoginSignup loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
        )}
      </div>

      <Navbar.Toggle />
    </Navbar>
  );
}
