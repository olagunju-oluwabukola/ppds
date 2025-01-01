import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import img from "../assets/PPDS LOGO TRIM.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md text-green-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink>
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src={img} className="md:w-12 md:h-12 w-10 h-10" alt="Logo" />
          
        </div>
        </NavLink>
       

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 font-bold text-green-900">
          <li>
            <NavLink
              to="/"
              className="text-green-950 hover:text-brown-400 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-green-950 hover:text-brown-400 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-green-950 hover:text-brown-400 flex items-center space-x-1 transition duration-300 focus:outline-none"
            >
              <span>Services</span>
              {isServicesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isServicesDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-green-950 rounded-md shadow-md">
                <li>
                  <NavLink
                    to="/services/training"
                    className="block px-4 py-2 text-white hover:text-brown-400 transition duration-300"
                  >
                    Training
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/consultation"
                    className="block px-4 py-2 text-white hover:text-brown-400 transition duration-300"
                  >
                    Consulting
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-green-950 hover:text-brown-400 transition duration-300"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-green-950 hover:text-brown-400 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none text-green-950"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4 bg-green-950 rounded-md">
          <li>
            <NavLink
              to="/"
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
              to="/services/training"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Training
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/consulting"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consulting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-white hover:text-brown-400 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
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
