import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({ duration: 800, once: true })
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
