import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/PPDS_LOGO_TRIM-removebg-preview.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src={img} className="w-10 h-10" alt="Logo" />
          <span className="text-green-100">PPDS</span>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/home"
              className="text-green-50 hover:text-brown-400 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-green-100 hover:text-brown-400 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-green-100 hover:text-brown-400 transition duration-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-green-100 hover:text-brown-400 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none text-green-100"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4 bg-green-800 rounded-md">
          <li>
            <NavLink
              to="/home"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
