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
        <h1 className="text-4xl md:text-5xl font-bold text-black"><span className='text-green-900'>About</span> Us</h1>
        <div className="mt-5 h-1 w-20 bg-green-900 mx-auto"></div>
      </div>
      
<p className='w-auto mb-10 md:text-center md:my-10 md:mx-10'>Welcome to Project Partner Data Solutions (PPDS), a trusted partner in data-driven 
  insights, research consultancy, and capacity building. At PPDS, we are passionate about transforming data into actionable knowledge, empowering individuals and organisations to achieve their goals through innovative solutions.</p>
      
      <div className="max-w-5xl mx-auto space-y-20 text-gray-700">
      <section className="flex flex-col md:flex-row items-center gap-6">
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-black mb-4">Who we are?</h2>
            <p className="leading-relaxed md:text-md text-sm">
            Founded with a vision to bridge the gap between data and decision-making, PPDS offers a comprehensive range of services 
            tailored to meet the unique needs of our clients. We pride ourselves on delivering excellence, fostering collaboration, and driving impact in every project we undertake.
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
           <span className='text-gray-800 font-bold'> Meeting global needs for credible and dependable decision-making.</span> <br />
Our mission is to provide tailored research services that meet the evolving needs of our clients, ensuring high-quality and actionable insights, while continuously training and developing future data professionals.

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
            <span className='text-gray-800 font-bold'>Reliable solution for today and the future.</span> <br />
Our Vision is to become the leading data analysis and research consultancy firm in Africa, known for delivering quality, timely, and impactful research solutions.

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
            <li>
  <span className='text-gray-800 font-bold'>Integrity:</span> Integrity is the cornerstone of our operations. We are committed to truthfulness and transparency.
</li>
<li>
  <span className='text-gray-800 font-bold'>Speed:</span> We prioritise delivering services and solutions on schedule, ensuring that our clients meet their deadlines without compromising on quality.
</li>
<li>
  <span className='text-gray-800 font-bold'>Excellence:</span> Excellence is non-negotiable at PPDS. We are dedicated to producing outcomes that exceed expectations.
</li>
<li>
  <span className='text-gray-800 font-bold'>Accuracy:</span> Precision is at the heart of what we do. While we deliver on time, we ensure every project is handled with minimal errors.
</li>
<li>
  <span className='text-gray-800 font-bold'>Synergy:</span> By fostering strong partnerships within our team and with our clients, we create an environment where great ideas thrive, and impactful solutions are realised.
</li>
<li>
  <span className='text-gray-800 font-bold'>Professionalism:</span> We value our clients’ trust and ensure their projects are handled with respect, competence, and diligence.
</li>

            </ul>
          </div>
        </section>

        
        <section className='md:flex'>
          <h2 className="text-2xl font-semibold  mb-4 md:w-1/2  my-auto ">Meet the Team</h2>
          <div className=" grid md:grid-cols-2 justify-between gap-6 md:w-1/2">
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

      <section className=" rounded-xl mt-5 md:mt-10 text-green-black  mx-5 py-10 md:py-16 md:mx-auto md:w-4/5">
      <div className="text-center max-w-2xl mx-auto">
        
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-4">Join Our Team!</h2>
        
        <p className="mb-6 text-[12px] md:text-[14px] md:px-5">
        At Project Partner Data Solutions, our people are our greatest asset. Together, we form a diverse 
        and dynamic team, dedicated to shaping the future of research and data analytics. By joining us, you’ll be part of a growing
         organisation that prioritises advancing your skills, nurturing your career, and creating impactful 
         opportunities. Ready to make an impact with PPDS? We invite you to take the first step toward a fulfilling career by registering your interest.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdq71Qi0ICWblCTiTV1bU3U_3Yn6U1qCOJeXeGTTfYfE4Rrqg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="bg-green-700 text-white py-6  font-bold px-6 rounded-lg text-sm transition justify-center flex items-center">
        Join Us
        </a>
       
      </div>
    </section>

    <section>
      <div className='text-black font-bold text-4xl text-center my-5 md:my-5'> Why join us?</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 py-2 md:py-5 md:mx-auto md:w-4/5">
  <div className=" p-4 border rounded-lg bg-green-100 border-green-300">
    <h3 className="font-bold text-green-700">Innovate and Impact</h3>
    <p className='text-sm mt-4'>passionate about revolutionising the world of research and data analytics? PPDS is the place to turn your ambitions into reality.</p>
  </div>
  <div className=" p-4 border rounded-lg bg-green-200 border-green-400">
    <h3 className="font-bold text-green-700">Collaborative Environment</h3>
    <p className='text-sm mt-4'> Work alongside a talented and supportive team where creativity thrives, and ideas flourish.</p>
  </div>
  <div className=" p-4 border rounded-lg bg-green-300 border-green-500">
    <h3 className="font-bold text-green-700">Continuous Growth</h3>
    <p className='text-sm mt-4'>We are committed to your professional development through training, mentorship, and challenging projects.</p>
  </div>
  <div className="p-4 border rounded-lg bg-green-400 border-green-600">
    <h3 className="font-bold text-green-700">Rewarding Opportunities</h3>
    <p className='text-sm mt-4'>At PPDS, your contributions will be recognised, celebrated, and rewarded, making you proud to be part of a team that delivers world-class solutions.</p>
  </div>
</div>

    </section>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdq71Qi0ICWblCTiTV1bU3U_3Yn6U1qCOJeXeGTTfYfE4Rrqg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="bg-green-700 text-white py-8 mb-13 mt-5 md:mt-10 font-bold px-6 rounded-lg text-sm transition justify-center flex items-center">
        Join Us Now
        </a>
    </div>
  );
};

export default AboutUs;
