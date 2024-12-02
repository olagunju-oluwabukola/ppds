import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="bg-green-800 rounded-xl text-white mb-5 md:mb-10 mx-5 py-10 md:py-16 md:mx-auto md:w-4/5">
      <div className="text-center max-w-2xl mx-auto">
        
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-4">We are waiting for you!</h2>
        
        <p className="mb-6 text-[12px] md:text-[14px] md:px-5">
          We are always excited to meet new clients. Please reach out, and a
          team member will be available to answer all your questions.
        </p>
        
        <NavLink
          to="/contact"
          className="bg-white text-green-700 py-2 font-bold px-6 rounded-lg text-sm transition"
        >
          Contact Us
        </NavLink>
      </div>
    </section>
  );
};

export default ContactSection;
