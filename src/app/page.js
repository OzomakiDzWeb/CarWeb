import Header from "./component/Header"
import Hero from "./component/Hero"
import Cars from "./component/Cars"
import About from "./component/About"
import Why from "./component/Why"
import Testimonial from "./component/Testimonial"
import Cta from "./component/Cta"
import Footer from "./component/Footer"
import BackToTopBtn from "./component/BackToTopBtn"



export default function Home() {
  return (
  <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'>
    <Header/>
    <Hero/>
    <Cars/>
    <About/>
    <Why/>
    <Testimonial/>
     <Cta/>
    <Footer/>
    <BackToTopBtn/>
  </main>
  )
}
