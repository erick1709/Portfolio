import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-900 px-6 py-16 flex flex-col items-center"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full"
      >
        {/* Foto y presentación */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            src="/me.jpg"
            alt="Erick Guamán"
            className="w-40 h-40 object-cover rounded-full shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-2">Sobre mí</h2>
            <p className="text-lg">
              Soy Erick Guamán, un desarrollador proactivo, organizado y comprometido con la creación de soluciones eficientes.
              Me destaco en el trabajo en equipo, la comunicación técnica y la mejora continua.
              Tengo pasión por seguir aprendiendo y aportar valor en cada proyecto.
            </p>
          </motion.div>
        </div>

        {/* Bloques animados por separado */}
        {[
          {
            title: "📚 Vida académica",
            content: (
              <ul className="list-disc list-inside">
                <li>Grado Superior en <strong>Desarrollo de Aplicaciones Multiplataforma</strong> – IES El Grao (2023–2025)</li>
                <li>Grado Superior en <strong>Animación 3D, Juegos y Entornos Interactivos</strong> – IES Camp de Morvedre (2021–2023)</li>
              </ul>
            ),
          },
          {
            title: "💻 Experiencia en el sector tecnológico",
            content: (
              <ul className="list-disc list-inside">
                <li><strong>Desarrollador Frontend</strong> – Ibim (mar 2025 – may 2025)<br />
                  Diseño de interfaces web, integración con APIs REST, control de errores.
                </li>
                <li><strong>Diseñador y Programador de Videojuegos</strong> – Fluture (mar 2023 – jun 2023)<br />
                  Diseño de mecánicas, desarrollo de código y pruebas de integración.
                </li>
              </ul>
            ),
          },
          {
            title: "🧱 Experiencia fuera del sector",
            content: (
              <ul className="list-disc list-inside">
                <li>Camarero – Pomodoro, Foster’s Hollywood</li>
                <li>Cocinero – McDonald’s</li>
              </ul>
            ),
          },
          {
            title: "🛠️ Conocimientos técnicos",
            content: (
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Java", "Python", "JavaScript", "TypeScript", "Kotlin",
                  "HTML", "CSS", "React", "Angular", "Bootstrap", "Tailwind",
                  "Node.js", "Express", "Spring Boot", "API RESTful",
                  "MySQL", "PostgreSQL", "MongoDB",
                  "Unity", "Blender", "Photoshop", "After Effects", "Illustrator", "Premiere"
                ].map((tech) => (
                  <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            ),
          },
          {
            title: "🌐 Idiomas",
            content: (
              <ul className="list-disc list-inside">
                <li>Español – Nativo</li>
                <li>Inglés – Nivel intermedio</li>
                <li>Valenciano – Nivel avanzado</li>
              </ul>
            ),
          }
        ].map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 + index * 0.2 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-semibold text-[#800000] mb-2">{section.title}</h3>
            {section.content}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
