import img1 from '../assets/photo_4_2024-12-06_08-55-34.jpg'
import img2 from '../assets/photo_3_2024-12-06_08-55-34.jpg'
import img3 from '../assets/photo_9_2024-12-06_08-55-34.jpg'
import img4 from '../assets/photo_4_2024-12-06_08-55-34.jpg'
import img5 from '../assets/photo_3_2024-12-06_08-55-34.jpg'
import img6 from '../assets/photo_9_2024-12-06_08-55-34.jpg'
import img7 from '../assets/photo_9_2024-12-06_08-55-34.jpg'
const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-black">About Us</h1>
        <div className="mt-5 h-1 w-20 bg-green-900 mx-auto"></div>
      </div>
      

      
      <div className="max-w-5xl mx-auto space-y-20 text-gray-700">
      <section className="flex flex-col md:flex-row items-center gap-6">
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-black mb-4">Who we are</h2>
            <p className="leading-relaxed md:text-sm text-sm">
            We are a top-tier consulting, training and research company with a
 passion to deliver world class services 
and maintain long-lasting relationships with our clients.
            </p>
          </div>

          <img
            src={img1}
            alt="Our Mission"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
          />
        </section>
        <section className="flex flex-col md:flex-row items-center gap-6">
          <img
            src= {img2}
            alt="Our Mission"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
            <p className="leading-relaxed md:text-sm text-sm">
              At our core, we strive to deliver innovative solutions that drive meaningful change. 
              Our mission is to empower individuals and organizations through exceptional service, 
              cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src={img3}
            alt="Our Vision"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="leading-relaxed text-sm">
              We envision a future where our solutions inspire growth, foster creativity, 
              and create a lasting impact in the communities we serve. By embracing innovation and 
              collaboration, we aim to lead the way in our industry.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={img4}
            alt="Our Values"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
          />
          <div className="flex-1 text-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Integrity: Upholding honesty and transparency in all we do.</li>
              <li>Innovation: Continuously seeking new and better ways to serve.</li>
              <li>Excellence: Striving to exceed expectations in every endeavor.</li>
              <li>Collaboration: Building strong relationships through teamwork.</li>
            </ul>
          </div>
        </section>

        
        <section className='flex'>
          <h2 className="md:text-5xl font-semibold  mb-4 md:w-1/2  my-auto ">Meet the Team</h2>
          <div className=" grid grid-cols-2 justify-between gap-6 w-1/2">
            <img
              src={img4}
              alt="Team Member 1"
              className=" h-auto rounded-lg shadow-md"
            />
            <img
              src={img5}
              alt="Team Member 2"
              className="h-auto rounded-lg shadow-md"
            />
            <img
              src={img6}
              alt="Team Member 3"
              className=" h-auto rounded-lg shadow-md"
            />
            <img
              src={img7}
              alt="Team Member 4"
              className=" h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
