

const services = [
  {
    title: 'Research Consultancy',
    description:
      'Leverage expert insights and analysis to guide your projects, ensuring data-driven decision-making and actionable outcomes.',
    bgColor: 'bg-green-100',
    icon: '🔍',
  },
  {
    title: 'Field Data Collection',
    description:
      'Accurately collect and process field data with our advanced tools and experienced professionals, tailored to your research needs.',
    bgColor: 'bg-green-200',
    icon: '🌐',
  },
  {
    title: 'Training',
    description:
      'Empower individuals and teams with customized training programs focused on data analysis, research methods, and technical tools.',
    bgColor: 'bg-green-300',
    icon: '📚',
  },
  {
    title: 'Internship Programmes',
    description:
      'Equip the next generation of analysts and researchers through hands-on internship experiences in data science and analytics.',
    bgColor: 'bg-green-300',
    icon: '🎓',
  },
  {
    title: 'Impact Assessment',
    description:
      'Evaluate the effectiveness and impact of projects using evidence-based methodologies and detailed reporting.',
    bgColor: 'bg-green-200',
    icon: '📊',
  },
  {
    title: 'Data Quality Audits',
    description:
      'Ensure the integrity and accuracy of your datasets with comprehensive data quality checks and validation processes.',
    bgColor: 'bg-green-100',
    icon: '✅',
  },
];

export default function Services() {
  return (
    <div className=" min-h-screen py-10">
      <div className="py-8 px-4 md:px-12">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-green-800">Our Services</h2>
      </div>
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${service.bgColor} text-green-900`}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
