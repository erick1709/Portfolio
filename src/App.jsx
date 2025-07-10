import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch (section) {
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar onNavigate={setSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
