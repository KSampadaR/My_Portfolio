import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}