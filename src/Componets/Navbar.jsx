import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from '../assets/PPDS_LOGO_TRIM-removebg-preview.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={img} className="w-10" />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-blue-500">
            <NavLink to="/home" ClassName="text-blue-500">Home</NavLink>
          </li>
          <li className="text-blue-500">
            <NavLink to="/about" ClassName="text-blue-500">About</NavLink>
          </li>
          <li className="text-blue-500">
            <NavLink to="/services" ClassName="text-blue-500">Services</NavLink>
          </li>
          <li className="text-blue-500">
            <NavLink to="/contact" ClassName="text-blue-500">Contact</NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4">
          <li className="hover:text-blue-400">
            <NavLink to="/home" ClassName="text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink to="/about" ClassName="text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink to="/services" ClassName="text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink to="/contact" ClassName="text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;