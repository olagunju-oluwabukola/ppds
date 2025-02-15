const InternshipProgram = () => {
    return (
      <div className="max-w-7xl mx-2 md:mx-auto px-4 py-8">
        <header className="text-center">
          <div className='text-center pt-6 md:pt-12 md:pb-10'>
          <h1 className="text-2xl md:text-5xl mb-4 font-bold text-black"><span className='text-green-900'>Internship</span> Programme</h1>
          <div className="mt-5 h-1 w-20 bg-green-900 mx-auto mb-6"></div>
          </div>
       
     
          <p className="text-sm md:text-lg text-gray-600">
            The recent outburst of data in the 21st century is transforming businesses and how they operate. Companies rely on data-led insight to make crucial business decisions.
          </p>
        </header>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Objectives of the Internship</h2>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Quantitative and qualitative research methods</li>
            <li>Developing competencies in statistical and qualitative analytical tools</li>
            <li>Exposure to the field of analytics and related career options</li>
            <li>Opportunities to work with Government and Non-Government Organizations</li>
          </ul>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Duration of Internship</h2>
          <p className="mt-4 text-gray-700">
            The internship programme is held in two 3-month cycles, with recruitment taking place in January and July each year. The actual internship cycles are:
          </p>
          <ul className="mt-4 list-inside text-gray-700">
            <li>Cycle 1: March to May</li>
            <li>Cycle 2: August to October</li>
          </ul>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Schedule of Activities</h2>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Weekly training sessions</li>
            <li>Participation in all activities of the organization</li>
            <li>Completion of online courses in data quality, research ethics, etc.</li>
            <li>Hands-on activities in day-to-day operations</li>
          </ul>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Payment</h2>
          <p className="mt-4 text-gray-700">
            There are no costs for applicants to join the programme. However, interns are not currently provided with any form of remuneration during the internship.
          </p>
        </section>
  
        <div className="text-center mt-8">
          <button
            onClick={() => alert("Redirecting to registration form...")}
            className="px-6 py-3 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
          >
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsR_-EMqyaK7fLU5MMnW3ulIROJ0L1GPn2GaZTAlJl8bnNSw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Click to Register</a>
            
          </button>
        </div>
      </div>
    );
  };
  
  export default InternshipProgram;
  