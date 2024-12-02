import Hero from '../Componets/Hero'
import ServicesCard from '../Componets/ServicesCard'
import TestimonialCarousel from '../Componets/Testimonial'
import FAQ from '../Componets/Faq'
import ContactSection from '../Componets/HomeContact'
import WhyChooseUs from '../Componets/WhyChooseUs'
const Home = () => {
  return (
    <div>
        <Hero/>
        <WhyChooseUs/>
        <ServicesCard/>
        <TestimonialCarousel/>
        <FAQ/>
        <ContactSection/>
        
    </div>
  )
}

export default Home