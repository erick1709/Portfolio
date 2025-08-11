import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <div id="top"></div>
      <Navbar />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;
