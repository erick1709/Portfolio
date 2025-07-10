const ProjectCard = ({ title, description, image }) => (
  <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="text-xl font-bold mt-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default ProjectCard;
