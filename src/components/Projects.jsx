import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Página Web para SOEP",
    description:
      "Aplicación web Fullstack sobre un estudio de tatuajes realizado con React, conectada a una API REST con gestión de usuarios, productos y pedidos.",
    tech: ["React", "JWT", "API REST", "Node.js", "Fullstack"],
    image: "soep-project.png",
    link: "https://tu-proyecto-react.vercel.app",
    github: "https://github.com/erick1709/Soep",
  },
  {
    title: "Proyecto Angular 'RCKARNES'",
    description:
      "Proyecto web de Angular sobre un restaurante especializado en carnes en el que se puede navegar para ver el menú, conocer la ubicación y reservar de forma ficticia. Trabajo exclusivamente de frontend.",
    tech: ["Angular", "TypeScript", "Bootstrap", "js"],
    image: "rckarnes.png",
    link: "https://tu-proyecto-angular.vercel.app",
    github: "https://github.com/erick1709/Rckarnes",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-white via-[#800000] to-[#4B0000] text-white px-6 py-16 flex flex-col items-center"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#4d0101]">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="overflow-hidden bg-[#f2f2ef]">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-72 object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/90 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-white/20 text-white px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
