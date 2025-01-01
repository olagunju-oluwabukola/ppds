

// const services = [
//   {
//     title: 'Research Consultancy',
//     description:
//       'Leverage expert insights and analysis to guide your projects, ensuring data-driven decision-making and actionable outcomes.',
//     bgColor: 'bg-green-100',
//     icon: '🔍',
//   },
//   {
//     title: 'Field Data Collection',
//     description:
//       'Accurately collect and process field data with our advanced tools and experienced professionals, tailored to your research needs.',
//     bgColor: 'bg-green-200',
//     icon: '🌐',
//   },
//   {
//     title: 'Training',
//     description:
//       'Empower individuals and teams with customized training programs focused on data analysis, research methods, and technical tools.',
//     bgColor: 'bg-green-300',
//     icon: '📚',
//   },
//   {
//     title: 'Internship Programmes',
//     description:
//       'Equip the next generation of analysts and researchers through hands-on internship experiences in data science and analytics.',
//     bgColor: 'bg-green-300',
//     icon: '🎓',
//   },
//   {
//     title: 'Impact Assessment',
//     description:
//       'Evaluate the effectiveness and impact of projects using evidence-based methodologies and detailed reporting.',
//     bgColor: 'bg-green-200',
//     icon: '📊',
//   },
//   {
//     title: 'Data Quality Audits',
//     description:
//       'Ensure the integrity and accuracy of your datasets with comprehensive data quality checks and validation processes.',
//     bgColor: 'bg-green-100',
//     icon: '✅',
//   },
// ];

// export default function Services() {
//   return (
//     <div className=" min-h-screen py-10">
//       <div className="py-8 px-4 md:px-12">
//       <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-green-800">Our Services</h2>
//       </div>
//       <div className="container mx-auto px-4">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg shadow-lg ${service.bgColor} text-green-900`}
//             >
//               <div className="text-3xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaBookReader,
  FaLanguage,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const trainings = [
  {
    title: "Technical Skills Development",
    description: "Master tools and technologies for your career advancement.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Leadership Training",
    description: "Develop essential leadership and management skills.",
    icon: <FaBrain />,
  },
  {
    title: "Team Building Workshops",
    description: "Enhance collaboration and communication within your team.",
    icon: <FaUsers />,
  },
  {
    title: "Professional Certifications",
    description: "Achieve globally recognized certifications in your field.",
    icon: <FaBookReader />,
  },
  {
    title: "Language Proficiency Training",
    description: "Improve your communication skills in multiple languages.",
    icon: <FaLanguage />,
  },
  {
    title: "Project Management",
    description: "Learn effective strategies to manage projects successfully.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Problem-Solving Skills",
    description: "Strengthen your analytical and critical thinking abilities.",
    icon: <FaTools />,
  },
  {
    title: "Train-the-Trainer Programs",
    description: "Equip trainers with the skills to deliver impactful sessions.",
    icon: <FaChalkboardTeacher />,
  },
];

const ServicesCard = () => {
  return (
    <div className="py-8 px-4 md:px-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md p-4 flex flex-col lg:items-start items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-green-700 text-white flex items-center justify-center rounded-full mb-3 
                w-10 h-10 text-2xl sm:w-12 sm:h-12 sm:text-3xl lg:w-12 lg:h-12 lg:text-4xl">
              {training.icon}
            </div>
            <h3 className="font-semibold text-lg text-center lg:text-left">
              {training.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-[12px] text-center lg:text-left">
              {training.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;

