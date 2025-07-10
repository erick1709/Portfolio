import ProjectCard from '../components/ProjectCard';
import proyecto1 from '../assets/proyecto1.jpg';

const Projects = () => {
  return (
    <section className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard title="App Móvil" description="Hecha con Flutter." image={proyecto1} />
      {/* Agrega más ProjectCard */}
    </section>
  );
};

export default Projects;
