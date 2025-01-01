

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2">We'd love to hear from you! Feel free to reach out.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">support@example.com</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  123 Main Street, Cityville, ST 12345, USA
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373531531907!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cd8c23524e3b!2sVictoria!5e0!3m2!1sen!2sau!4v1637028570248!5m2!1sen!2sau"
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
