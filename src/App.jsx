import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Background } from "./components/Background";


function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>

      <Background src="/background.JPG"/>
      
      
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
