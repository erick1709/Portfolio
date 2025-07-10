import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReveal(true), 1000); // espera 1s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#4B0000] via-[#800000] to-white text-[#4d0101]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4 flex flex-wrap justify-center items-center gap-2 leading-tight"
      >
        <span>Hola, soy</span>

        {/* CONTENEDOR NOMBRE CON DOBLE CAPA */}
        <span className="relative inline-block text-5xl font-extrabold leading-tight">
          {/* Capa inferior (color rojo oscuro) */}
          <span className="text-[#4d0101]">Erick Guamán</span>

          {/* Capa superior (color blanco), con animación clip-path */}
          <span
            className={`absolute left-0 top-0 w-full h-full text-white overflow-hidden transition-all duration-[3s] ease-in-out ${
              reveal ? "clip-reveal" : "clip-hidden"
            }`}
            aria-hidden="true"
          >
            Erick Guamán
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg max-w-xl mb-6 text-white"
      >
        Desarrollador multiplataforma con experiencia en apps móviles, web y escritorio.
      </motion.p>

      <motion.a
        href="#about"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#a00000] hover:bg-[#800000] text-white px-6 py-3 rounded-full font-medium shadow-lg transition"
      >
        Sobre mí
      </motion.a>
    </section>
  );
};

export default Hero;
