import Expertise from '../components/home_page/Expertise.jsx';
import Header from '../components/home_page/Header.jsx';
import Hero from '../components/home_page/Hero.jsx';
import Testimonial from '../components/home_page/Testimonial.jsx';
import Nav from '../components/Nav.jsx';
import Service from '../components/home_page/Service.jsx';  
import Process from '../components/home_page/Process.jsx';
import Blog from '../components/home_page/Blog.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';


export default function Home() {
  return(
    <div >
      <Nav/>
      <Header/>
      <Hero/>
      <Expertise/>
      <Service/>
      <Process/>
      <Testimonial/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}