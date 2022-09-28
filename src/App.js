import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
