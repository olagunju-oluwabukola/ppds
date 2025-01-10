import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Dr. Akanni",
    position: "",
    feedback: "I enjoyed today's class. My motivation is rekindled.",
  },
  {
    name: "Mr. Levi",
    position: "",
    feedback:
      "I love your teaching technique sir and your patience with us. God bless you sir.",
  },
  {
    name: "Markson",
    position: "",
    feedback:
      "This training is not something that one would miss. It is very timely and impactful.",
  },
  {
    name: "Mercy Corps Staff",
    position: "",
    feedback:
      "The training was participatory, and I learnt coding in another way as well as the use of MAXQDA. The software will help me to organize my work well as well as presentation.",
  },
  {
    name: "Mercy Corps Staff",
    position: "",
    feedback:
      "The training has been very helpful for my understanding of qualitative data analysis. The use of practical examples is of vital help to me.",
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
