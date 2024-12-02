import { NavLink } from "react-router-dom";
import { FiTwitter, FiLinkedin, FiFacebook, FiMessageCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-[10px] md:text-[12px]">
            We are a top-tier consulting, training and research company with a passion to deliver world class services and maintain long-lasting relationships with our clients.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[10px] md:text-[12px]">
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-[10px] md:text-[12px]">
              <li>
                <NavLink
                  to="/support/help-center"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/faq"
                  className="hover:text-brown-400 transition duration-300"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/community"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/technical"
                  className="hover:text-brown-400 transition duration-300"
                >
                  Technical Support
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="p-2 bg-green-700 rounded-full hover:bg-brown-500 transition duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5 text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-green-700 rounded-full hover:bg-brown-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5 text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 bg-green-700 rounded-full hover:bg-brown-500 transition duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5 text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://whatsapp.com"
                className="p-2 bg-green-700 rounded-full hover:bg-brown-500 transition duration-300"
                aria-label="WhatsApp"
              >
                <FiMessageCircle className="h-5 w-5 text-gray-200 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-8 border-t border-white pt-4 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Data Analysis Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
