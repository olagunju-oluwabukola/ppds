
import {NavLink} from 'react-router-dom';
const ConsultancyServices = () => {
  return (
    <div className=" mx-6 md:mx-10">
          <div className='text-center pt-6 md:pt-12 md:pb-10'>
          <h1 className="text-2xl md:text-5xl mb-4 font-bold text-black"><span className='text-green-900'>Consultancy</span> Services</h1>
          <div className="mt-5 h-1 w-20 bg-green-900 mx-auto mb-6"></div>
          </div>
      <p className="text-center mb-6 text-sm md:text-lg text-gray-600">
        At <span className="font-semibold ">Project Partner Data Solutions (PPDS)</span>, we empower businesses, organisations, and individuals with data-driven insights to drive informed decision-making and sustainable growth. Our consultancy services are designed to address unique challenges, delivering high-quality solutions that make an impact.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Our Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-5">
        <div className="bg-gray-200 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-black mb-2">Quantitative Research Consultancy</h3>
          <ul className="list-disc list-inside text-black">
            <li>Design and execution of surveys, experiments, and statistical analyses.</li>
            <li>Application of advanced statistical tools to uncover actionable insights.</li>
            <li>Clear, data-driven reports with practical recommendations.</li>
          </ul>
        </div>
        
        <div className="bg-gray-300 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-black mb-2">Qualitative Research Consultancy</h3>
          <ul className="list-disc list-inside text-black">
            <li>Conducting in-depth interviews, focus group discussions, and ethnographic studies.</li>
            <li>Thematic and content analysis to extract deep insights.</li>
            <li>Rich, narrative reports highlighting key findings and strategic recommendations.</li>
          </ul>
        </div>

        <div className="bg-gray-300 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-black mb-2">Field Data Collection Services</h3>
          <ul className="list-disc list-inside text-black">
            <li>End-to-end data collection solutions for both quantitative and qualitative studies.</li>
            <li>Deployment of trained field teams with strict quality control measures.</li>
            <li>Use of digital tools and software for enhanced efficiency and accuracy.</li>
          </ul>
        </div>

        <div className="bg-gray-200 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-black mb-2">Software Procurement & ATLAS.ti Certification</h3>
          <ul className="list-disc list-inside text-black">
            <li>We are a Certified ATLAS.ti Reseller, providing the latest versions of the software.</li>
            <li>Procurement services for industry-standard research and data analysis tools.</li>
            <li>Comprehensive software support and training for clients.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-600 mt-8 mb-4">Why Choose PPDS?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex items-start">
          <span className="text-green-600 mr-2">✔</span>
          <p className="text-black"><span className="font-semibold">Expertise:</span> Our team brings years of experience and industry-leading methodologies.</p>
        </div>
        <div className="flex items-start">
          <span className="text-green-600 mr-2">✔</span>
          <p className="text-black"><span className="font-semibold">Customised Solutions:</span> We tailor our services to align with your unique goals and challenges.</p>
        </div>
        <div className="flex items-start">
          <span className="text-green-600 mr-2">✔</span>
          <p className="text-black"><span className="font-semibold">Innovative Approach:</span> We leverage cutting-edge tools and techniques for high-quality results.</p>
        </div>
        <div className="flex items-start">
          <span className="text-green-600 mr-2">✔</span>
          <p className="text-black"><span className="font-semibold">Client-Centric Focus:</span> Your success is our priority—we work closely with you at every step.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-600 mb-4">Let’s Work Together</h2>
      <p className="text-black mb-6">
        Partner with PPDS to unlock the full potential of your data. Whether you need market insights, process improvement, or evidence-based decision-making, we’re here to help.
      </p>
      <NavLink to='/contact'
        className="inline-block bg-green-900 text-white px-6 py-4 mb-7 rounded-lg hover:bg-green-700 transition-colors"
      >
      Contact us today
      </NavLink>
    </div>
  );
};

export default ConsultancyServices;
