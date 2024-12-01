import Hero from '../Componets/Hero'
import ServicesCard from '../Componets/ServicesCard'
import TestimonialCarousel from '../Componets/Testimonial'
import FAQ from '../Componets/Faq'
const Home = () => {
  return (
    <div>
        <Hero/>
        <ServicesCard/>
        <TestimonialCarousel/>
        <FAQ/>
    </div>
  )
}

export default Home