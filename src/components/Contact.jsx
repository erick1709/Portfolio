import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background: 'linear-gradient(to bottom, #4B0000, white)',
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contacto
      </motion.h2>

      <motion.p
        className="text-lg text-white mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        ¿Te gusta lo que ves? ¿Encajo en tu proyecto? ¡Estoy listo para colaborar!
      </motion.p>

      <motion.div
        className="flex flex-col items-center text-white mb-12 gap-4 text-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-3">
          <FaEnvelope />
          <a href="mailto:rckguaman@gmail.com" className="hover:underline">
            rckguaman@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone />
          <span>664 08 73 62</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt />
          <span>Valencia, España</span>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-8 text-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="mailto:rckguaman@gmail.com"
          whileHover={{ scale: 1.2, textShadow: '0 0 10px white' }}
          className="text-white"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://github.com/erick1709"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, textShadow: '0 0 10px white' }}
          className="text-white"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/erick-guam%C3%A1n-609228371/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, textShadow: '0 0 10px white' }}
          className="text-white"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
