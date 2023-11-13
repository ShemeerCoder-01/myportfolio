'use Client'
import Header from '../Components/common/Header'
import Footer from '../Components/common/Footer'
import AboutMe from '../Components/AboutMe';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Project from '../Components/Projects';
import Contact from '../Components/Contact';
import BacktoTop from '../Components/common/BackToTop';

export default function Home() {
  
  return (
   <div>
     <Header/>
     <AboutMe/>
     <Education/>
     <Skills/>
     <Project/>
     <Contact/>
     <BacktoTop/>
     <Footer/>
   </div>
  )
}
