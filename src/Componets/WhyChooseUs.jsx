import img1 from '../assets/photo_10_2024-12-06_08-55-34.jpg'
import img2 from '../assets/photo_12_2024-12-06_08-55-34.jpg'
import img3 from '../assets/photo_11_2024-12-06_08-55-34.jpg'
import img4 from '../assets/photo_8_2024-12-06_08-55-34.jpg'
import img5 from '../assets/photo_6_2024-12-06_08-55-34.jpg'
import img6 from '../assets/photo_5_2024-12-06_08-55-34.jpg'
import img7 from '../assets/photo_2_2024-12-06_08-55-34.jpg'
import img8 from '../assets/photo_1_2024-12-06_08-55-34.jpg'
const WhyChooseUs = () => {
    const logos = [
      { src: img1, alt: "Ceridian" },
      { src: img2, alt: "SAP" },
      { src: img3, alt: "ServiceNow" },
      { src: img4, alt: "CN" },
      { src: img8, alt: "Kronos" },
      { src: img6, alt: "UKG" },
      { src: img7, alt: "Tim Hortons" },
      { src: img5, alt: "Skip the Dishes" },
     
    ];
  
    return (
      <section className="py-16 px-6 md:px-6">
        <div className="max-w-6xl mx-4 md:mx-8">
          <div className="md:text-left ">
          <h2 className=" text-2xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-4" >Why choose us?</h2>
          <p className="text-[13px] md:text-lg  mb-8 ">
          At Project Partner Data Solutions, we transform complex data into actionable insights by delivering end-to-end research solutions that have empowered over 600 clients across local and international platforms through our cutting-edge research methodologies and comprehensive services. With more than a decade of expertise, we've successfully completed over 800 projects, trained 1,000+ students, and remain committed to driving research excellence by building our clients' competencies and achieving their most critical research objectives.
          </p>
          </div>
          
  
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="mx-auto h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  