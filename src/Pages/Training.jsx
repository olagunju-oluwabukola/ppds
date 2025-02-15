const programs = [
  { title: "Quantitative Data Analysis with SPSS", description: "Dive into the fundamentals of quantitative data analysis using SPSS. Learn how to manage datasets, perform statistical tests, and interpret results to make data-driven decisions.", duration: "6 Days" },
  { title: "Quantitative Data Analysis with Stata", description: "Master the use of Stata for statistical analysis, including data cleaning, regression analysis, and advanced econometric modelling.", duration: "6 Days" },
  { title: "Excel Methods for Data Analysis", description: "Transform your Excel skills into a powerful analytical tool. Learn how to manipulate data, use advanced formulas, create pivot tables, and generate dynamic visualisations.", duration: "6 Days" },
  { title: "GIS Methods", description: "Gain expertise in Geographic Information Systems (GIS) for spatial data analysis, mapping, and geospatial visualisation using leading GIS tools.", duration: "6 Days" },
  { title: "Qualitative Data Analysis with ATLAS.ti", description: "Learn how to use ATLAS.ti for coding, thematic analysis, and reporting on qualitative research.", duration: "6 Days" },
  { title: "Qualitative Data Analysis with NVivo", description: "Enhance your qualitative research skills with NVivo. This training covers data import, coding, and advanced visualisation techniques.", duration: "6 Days" },
  { title: "Quantitative Data Analysis with GraphPad", description: "Explore the capabilities of GraphPad for statistical analysis and data visualisation, tailored to meet scientific and research needs.", duration: "6 Days" },
  { title: "Quantitative Data Analysis with Python", description: "Learn to use Python for data cleaning, analysis, and visualisation. This course includes hands-on projects to solidify your skills.", duration: "6 Days" },
  { title: "Quantitative Data Analysis with R", description: "Unlock the power of R for statistical computing and data analysis. Topics include data manipulation, regression models, and data visualisation.", duration: "6 Days" },
  { title: "Principles of Monitoring and Evaluation", description: "Develop a strong foundation in Monitoring and Evaluation (M&E). This course covers designing frameworks, data collection, and evaluation methodologies.", duration: "6 Days" }
];

const TrainingPrograms = () => {
  return (

    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-12">
     <div className="text-center pt-6 md:pt-12 md:pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black"><span className='text-green-900'>Training</span> Solutions</h1>
        <div className="mt-5 h-1 w-20 bg-green-900 mx-auto mb-5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">{program.title}</h2>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <p className="text-sm font-medium text-gray-700">Duration: {program.duration}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfsR_-EMqyaK7fLU5MMnW3ulIROJ0L1GPn2GaZTAlJl8bnNSw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register Now</a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;
