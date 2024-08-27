import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
//import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
      <Social />
    </div>
  );
}

export default App;