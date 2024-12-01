
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-[12px]">
              Data Analysis Co. empowers businesses with cutting-edge data insights and advanced analytics to achieve their goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[10px] md:text-[12px]">
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-white transition duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className="hover:text-white transition duration-300"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:text-white transition duration-300"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-[10px] md:text-[12px]">
              <li>
                <NavLink
                  to="/support/help-center"
                  className="hover:text-white transition duration-300"
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/faq"
                  className="hover:text-white transition duration-300"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/community"
                  className="hover:text-white transition duration-300"
                >
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support/technical"
                  className="hover:text-white transition duration-300"
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
                className="p-2 bg-blue-700 rounded-full hover:bg-gray-600 transition duration-300"
                aria-label="Twitter"
              >
                {/* Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 001.88-2.37 8.56 8.56 0 01-2.71 1.03A4.28 4.28 0 0016.07 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.1.99a12.16 12.16 0 01-8.82-4.48c-.35.59-.55 1.27-.55 2A4.29 4.29 0 004.28 10a4.25 4.25 0 01-1.94-.53v.05c0 2.05 1.46 3.75 3.39 4.14-.36.1-.75.16-1.14.16-.28 0-.56-.03-.83-.08a4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.56a12.1 12.1 0 006.56 1.92c7.87 0 12.18-6.53 12.18-12.18v-.55A8.73 8.73 0 0024 5.09a8.72 8.72 0 01-2.54.7z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-blue-700 rounded-full hover:bg-gray-600 transition duration-300"
                aria-label="LinkedIn"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.2.79 24 1.77 24h20.45c.98 0 1.77-.79 1.77-1.77V1.72C24 .78 23.21 0 22.23 0zM7.19 20.45H3.55V9.02h3.64v11.43zM5.37 7.5a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm15.08 12.95h-3.63v-5.48c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.43-2.1 2.9v5.55h-3.63V9.02h3.48v1.56h.05c.48-.91 1.63-1.87 3.35-1.87 3.58 0 4.24 2.36 4.24 5.43v6.31z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="p-2 bg-blue-700 rounded-full hover:bg-gray-600 transition duration-300"
                aria-label="Facebook"
              >
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H7v4H4v3h3v7h3v-7h3.293l.707-3H9V9.5c0-.551.448-1 1-1h2V6H9c-1.105 0-2 .895-2 2v1z" />
                </svg>
              </a>
              <a
                href="https://whatsapp.com"
                className="p-2 bg-blue-700 rounded-full hover:bg-gray-600 transition duration-300"
                aria-label="WhatsApp"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2.002C6.486 2 2 6.486 2.002 12.04c.002 1.858.499 3.653 1.456 5.215l-1.45 4.341L6.2 20.51a9.935 9.935 0 005.836 1.427C17.515 21.937 22 17.456 22 12c0-5.555-4.485-10-9.96-9.998zM12.03 20.14a7.897 7.897 0 01-4.308-1.224l-.309-.189-3.333.942.921-3.285-.199-.315A7.873 7.873 0 014.002 12c-.002-4.37 3.61-7.998 8.033-8a8.043 8.043 0 018.03 8c.002 4.43-3.607 8.047-8.035 8.047z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center tet-[10px] md:text-[12px]">
          <p>&copy; {new Date().getFullYear()} Data Analysis Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
