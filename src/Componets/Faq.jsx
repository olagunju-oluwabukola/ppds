import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What services do you provide in data analysis?",
      answer:
        "We offer services including predictive analytics, data visualization, business intelligence, big data solutions, and custom dashboards tailored to your business needs.",
    },
    {
      question: "How do you ensure the security of my data?",
      answer:
        "Data security is our top priority. We comply with data protection regulations such as GDPR and HIPAA and implement encryption, strict access controls, and secure storage protocols.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with industries like healthcare, finance, e-commerce, manufacturing, and retail, delivering insights tailored to each sector's unique challenges and goals.",
    },
    {
      question: "Can you handle unstructured data?",
      answer:
        "Yes, we specialize in processing unstructured data like text, images, and audio, using advanced tools to convert them into actionable insights.",
    },
    {
      question: "What tools do you use for data analysis?",
      answer:
        "We use industry-leading tools like Python, R, Tableau, Power BI, and cloud platforms such as AWS, Azure, and Google Cloud.",
    },
    {
      question: "Do you offer training or post-project support?",
      answer:
        "Yes, we provide comprehensive training, support, and maintenance after project completion to ensure you can maximize the value of your data solutions.",
    },
  ];

  return (
    <section className=" py-10 px-4 md:px-12">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mx-5 mb-6 text-green-800">
        Frequently Asked Questions
      </h2>
      <div className="md:px-28">
        <div className="space-y-6 p-5 shadow-lg rounded-lg">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-green-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-green-50 transition"
              >
                <span className="text-green-800 font-medium text-sm md:text-base">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <FiChevronUp className="text-green-600 h-5 w-5" />
                ) : (
                  <FiChevronDown className="text-green-600 h-5 w-5" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-sm md:text-base text-gray-700 bg-green-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
