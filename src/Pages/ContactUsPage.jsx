import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center pt-6 md:pt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black"><span className='text-green-900'>Contact</span> Us</h1>
        <div className="mt-5 h-1 w-20 bg-green-900 mx-auto"></div>
      </div>

   
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Have a Question?</h2>
            <p className="mb-4">Fill out the form below, and we’ll get back to you promptly.</p>
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Write your message" required></textarea>
              </div>
              <a href="mailto:info@ppdsanalytics.com" className="w-full block bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700">
                Send Message
              </a>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">We’d love to hear from you! Whether you have a question about our services, need support, or want to collaborate, we are ready to assist you.</p>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4 flex items-center space-x-3">
                <FaEnvelope className="text-green-700" />
                <p className="text-gray-600">info@ppdsanalytics.com</p>
              </div>
              <div className="mb-4 flex items-center space-x-3">
                <FaPhone className="text-green-700" />
                <p className="text-gray-600">+2348169518890</p>
              </div>
              <div className="mb-4 flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-700" />
                <p className="text-gray-600">Suite 3, Block 5, Zone D Extension, Central Market, OAU, Ile-Ife, Osun State, Nigeria.</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/ProjectPartnerNigeria" className="text-green-700 hover:text-green-900">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://twitter.com/PPDSAnalytics" className="text-green-700 hover:text-green-900">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://linkedin.com/company/ProjectPartnerDataSolutions" className="text-green-700 hover:text-green-900">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://instagram.com/PPDSAnalytics" className="text-green-700 hover:text-green-900">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7903752052093!2d4.520692574233041!3d7.503374492507225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830248f39e68b%3A0xf3eec9479a7d5159!2sSuite%203%2C%20Block%205%2C%20Zone%20D%20Extension%2C%20Central%20Market%2C%20OAU%2C%20Ile-Ife%2C%20Osun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
