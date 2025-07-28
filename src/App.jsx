import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <div id="top"></div> {/* Ancla para volver arriba */}
      <Navbar />

      {/* Todas las secciones montadas */}
      <section id="about">
        <Home />
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
