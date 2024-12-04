const WhyChooseUs = () => {
    const logos = [
      { src: "https://via.placeholder.com/150x50?text=Ceridian", alt: "Ceridian" },
      { src: "https://via.placeholder.com/150x50?text=SAP", alt: "SAP" },
      { src: "https://via.placeholder.com/150x50?text=ServiceNow", alt: "ServiceNow" },
      { src: "https://via.placeholder.com/150x50?text=CN", alt: "CN" },
      { src: "https://via.placeholder.com/150x50?text=Kronos", alt: "Kronos" },
      { src: "https://via.placeholder.com/150x50?text=UKG", alt: "UKG" },
      { src: "https://via.placeholder.com/150x50?text=Tim+Hortons", alt: "Tim Hortons" },
      { src: "https://via.placeholder.com/150x50?text=Skip+The+Dishes", alt: "Skip the Dishes" },
     
    ];
  
    return (
      <section className="py-16 px-6 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="md:text-left lg:w-3/5">
          <h2 className=" text-2xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-4 " >Why choose us?</h2>
          <p className="text-[13px] md:text-[14px]  mb-8">
          We offer a wide range of solutions and services to help you address your challenges and needs, get insights with our consultants, 
          or uncover opportunities with our trainings, our team has over 15 combined years of industry experience transforming businesses and
            implementing solutions with some of these companies.
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
  