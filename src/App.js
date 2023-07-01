import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="h-screen bg-white">
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}