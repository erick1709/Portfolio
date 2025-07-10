import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${show ? "bg-black/80 backdrop-blur-md shadow-md" : "opacity-0 -translate-y-full"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">Erick Guamán Cedeño</h1>
        <ul className="flex gap-6">
          <li><a href="#projects" className="hover:text-purple-400">Proyectos</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
