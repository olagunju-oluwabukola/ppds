import {
    FaFlask,
    FaPlane,
    FaMapMarkedAlt,
    FaDatabase,
    FaChartLine,
    FaHandshake,
    FaChartPie,
    FaPencilRuler,
  } from "react-icons/fa";
  
  const features = [
    {
      title: "Research Formulation",
      description: "Develop and structure your research ideas effectively.",
      icon: <FaFlask />,
    },
    {
      title: "Pilot Study",
      description: "Conduct preliminary testing to refine your approach.",
      icon: <FaPlane />,
    },
    {
      title: "Field Data Collection",
      description: "Gather accurate data directly from the field.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Data Management",
      description: "Organize and secure your research data efficiently.",
      icon: <FaDatabase />,
    },
    {
      title: "Quantitative Research",
      description: "Leverage statistical methods for your research.",
      icon: <FaChartLine />,
    },
    {
      title: "Research Consultancy",
      description: "Get expert advice to guide your research process.",
      icon: <FaHandshake />,
    },
    {
      title: "Data Analysis + Interpretation",
      description: "Make sense of your data and draw actionable insights.",
      icon: <FaChartPie />,
    },
    {
      title: "Instrument Design + Testing",
      description: "Create and test tools tailored for your research needs.",
      icon: <FaPencilRuler />,
    },
  ];
  
  const ServicesCard = () => {
    return (
      <div className="py-8 px-4 md:px-12">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md p-4 flex flex-col lg:items-start items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-green-700 text-white flex items-center justify-center rounded-full mb-3 
                  w-10 h-10 text-2xl sm:w-12 sm:h-12 sm:text-3xl lg:w-12 lg:h-12 lg:text-4xl">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-center lg:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-[12px] text-center lg:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesCard;
  