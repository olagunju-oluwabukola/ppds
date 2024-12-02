import { useState, useEffect } from "react";
import img from "../assets/MacBook Air - 18.svg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Formulate, Design and Execute Your Research",
      description:
        "Create an account, it's quick, simple, and free. Select services you want, get connected to our experts, and get your job done as fast as possible.",
      buttonText: "Tell Us What You Need",
      imageUrl: img,
    },
    {
      id: 2,
      title: "Drive Insight with Cutting-Edge Analytics",
      description:
        "Our platform connects you with top professionals across various fields to meet your unique needs.",
      buttonText: "Explore Services",
      imageUrl: img,
    },
    {
      id: 3,
      title: "Get World-Class Analytics Training",
      description:
        "We provide tailored solutions to help you accomplish your objectives efficiently.",
      buttonText: "Get Started Now",
      imageUrl: img,
    },
    {
      id: 4,
      title: "Join Our Community",
      description:
        "Become part of a growing network of experts and users working together for success.",
      buttonText: "Sign Up Today",
      imageUrl: img,
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
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
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
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg shadow-md transition-all w-64 duration-300">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 flex space-x-3 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 md:w-3 md:h-3 rounded-full  transition-all ${
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
