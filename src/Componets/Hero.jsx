import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import img from "../assets/ppds1.jpg";
import img2 from "../assets/ppds2.jpg";
import img3 from "../assets/ppds3.jpg";
import img4 from "../assets/ppds4.jpg";

const Slider = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Formulate, Design and Execute Your Research",
      description:
        "Discover how we provide end-to-end research solutions—from tool design and field data collection to analysis and expert report writing—perfectly aligned with your research objectives, just as we’ve done for over 500 local and international organizations.",
      buttonText: "Learn More",
      imageUrl: img,
      path: "/contact", 
    },
    {
      id: 3,
      title: "Get World-Class Analytics Training",
      description:
        "Transform your skills with our globally recognized training programs. At Project Partner Data Solutions, we’ve helped over 1,000 clients and students master research, data management, and analytics. Whether you're a beginner or looking to refine your expertise, our simplified, step-by-step courses are designed to make you a pro. Ready to elevate your career?",
      buttonText: "Get Started Now",
      imageUrl: img4,
      path: "/services/training", 
    },
    {
      id: 2,
      title: "Kickstart Your Career with Our Internship Programme",
      description:
        "Gain hands-on experience in research, data management, and analytics. Work on real projects, receive expert mentorship, and make a meaningful impact.",
      buttonText: "Apply for Internship",
      imageUrl: img3,
      path: "services/consultation", 
    },
    {
      id: 4,
      title: "Join Our Community",
      description:
        "Connect with professionals in research, data management, and analytics to access exclusive resources and networking opportunities.",
      buttonText: "Join Our Community",
      imageUrl: img2,
      path: "/about", 
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full flex items-center text-left transition-transform duration-[1000ms] ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white">
            <h2 className="text-xl md:w-3/4 md:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl">
              {slide.description}
            </p>
            <button
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg shadow-md transition-all w-64 duration-300"
              onClick={() => navigate(slide.path)} 
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 flex space-x-3 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-green-500" : "bg-green-100"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
