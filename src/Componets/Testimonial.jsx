import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    feedback:
      "The team at DataInsight transformed our data into actionable insights. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, AdWorld",
    feedback:
      "Their analysis helped us understand our audience like never before. A game-changer for our campaigns!",
  },
  {
    name: "Alice Johnson",
    position: "Operations Manager, SupplyPro",
    feedback:
      "Thanks to their detailed reports, we streamlined our operations and saved costs significantly.",
  },
  {
    name: "Michael Brown",
    position: "CFO, FinServe",
    feedback:
      "Their financial data analysis gave us the clarity we needed to make informed decisions.",
  },
  {
    name: "Emily Davis",
    position: "Product Manager, InnovateLabs",
    feedback:
      "The predictive analytics they provided helped us launch our product at the perfect time.",
  },
  {
    name: "David Wilson",
    position: "HR Head, PeopleFirst",
    feedback:
      "Their workforce analytics improved employee engagement and retention. Fantastic work!",
  },
  {
    name: "Sophia Martinez",
    position: "Sales Manager, GrowBiz",
    feedback:
      "With their sales data analysis, we identified key markets and boosted revenue by 30%.",
  },
  {
    name: "James Anderson",
    position: "IT Director, CyberSecure",
    feedback:
      "Their data visualization tools made complex information easy to understand. Excellent service!",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4 md:px-12 overflow-hidden">
      
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-green-800 ">
        What Our Clients Say
      </h2>
     
      <Slider {...settings} className="gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md flex flex-col justify-between items-center p-6  text-center"
            style={{
              width: "280px", 
              height: "280px", 
              margin: "0 60px", 
            }}
          >
            
            <p className="text-gray-600 italic mb-4 text-[12px] md:text-[14px]">
              {testimonial.feedback}
            </p>
            
            <h3 className="font-semibold text-lg text-green-700">
              {testimonial.name}
            </h3>
           
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
