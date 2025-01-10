import {
  FaChartLine,
  FaBookOpen,
  FaUserCheck,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaToolbox,
} from "react-icons/fa";

const trainings = [
  {
    title: "Quantitative Research Consultancy",
    description:
      "Design and execution of surveys, experiments, and statistical analysis, using advanced statistical tools and software to uncover actionable insights.",
    icon: <FaChartLine />, 
  },
  {
    title: "Qualitative Research Consultancy",
    description:
      "Conducting in-depth interviews, focus group discussions, and ethnographic studies, using thematic and context analysis to provide a nuanced understanding of complex issues.",
    icon: <FaBookOpen />, 
  },
  {
    title: "Field Data Collection Services",
    description:
      "Comprehensive data collection solutions for both quantitative and qualitative studies with hands-on training in data collection, analysis, and visualization.",
    icon: <FaUserCheck />, 
  },
  {
    title: "Training in Research Methods and Analysis",
    description:
      "Tailored workshops on quantitative and qualitative research methodologies with capacity-building for individuals and teams to harness data for impact.",
    icon: <FaChalkboardTeacher />, 
  },
  {
    title: "Internship Programmes",
    description:
      "Training in advanced data analysis techniques and practical applications and collaboration on real-world research and consultancy projects.",
    icon: <FaHandsHelping />, 
  },
  {
    title: "Software Procurement",
    description:
      "We are a Certified ATLAS.ti Reseller, providing the latest versions and offering support for users of this powerful qualitative data analysis software, ensuring that our clients have access to the best tools for their needs.",
    icon: <FaToolbox />, 
  },
];

const ServicesCard = () => {
  return (
    <div className="py-8 px-4 md:px-12">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-green-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className="bg-green-700 text-white flex items-center justify-center rounded-full mb-3 
                w-12 h-12 text-2xl sm:w-12 sm:h-12 sm:text-3xl lg:w-12 lg:h-12 lg:text-4xl p-2"
            >
              {training.icon}
            </div>
            <h3 className="font-semibold text-lg text-center mb-3">
              {training.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-[12px] text-center">
              {training.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
