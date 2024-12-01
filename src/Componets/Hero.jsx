import { useState, useEffect } from "react";
import img from '../assets/MacBook Air - 18.svg'
const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Formulate,Design and Execute your research",
      description:
        "Create an account, it's quick, simple, and free. Select services you want, get connected to our experts, and get your job done as fast as possible.",
      buttonText: "Tell us what you need",
      imageUrl: img
    },
    {
      id: 2,
      title: "Drive Insight with Cutting Edge Analytics",
      description:
        "Our platform connects you with top professionals across various fields to meet your unique needs.",
      buttonText: "Explore Services",
      imageUrl: img
    },
    {
      id: 3,
      title: "Get World Class Analytics Training",
      description:
        "We provide tailored solutions to help you accomplish your objectives efficiently.",
      buttonText: "Get Started Now",
      imageUrl: img
    },
    {
      id: 4,
      title: "Join Our Community",
      description:
        "Become part of a growing network of experts and users working together for success.",
      buttonText: "Sign Up Today",
      imageUrl: img
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
    <div className="relative w-full h-[45vh] md:h-[30vh] lg:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full flex items-center text-left transition-transform duration-[1500ms] ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col mt-8 md:mt-0 md:justify-center p-8 text-white">
            <h2 className="text-[20px] md:w-1/2 md:text-3xl lg:text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-[14px] md:text-[20px] mb-3 md:mb-6 max-w-2xl">{slide.description}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-lg w-58 md:w-60">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      
      <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
