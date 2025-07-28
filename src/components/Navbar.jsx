import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo como botón que lleva arriba */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="RCK"
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Enlaces del navbar */}
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#D1BABA] transition"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#D1BABA] transition"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#D1BABA] transition"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
