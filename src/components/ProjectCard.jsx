import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/projects/${project._id}`)}
      className="md:w-[49%] min-h-1/5 bg-zinc-700 hover:bg-zinc-600 p-2 rounded-lg text-center cursor-pointer flex justify-center items-center flex-col"
    >
      <h2 className="text-xl lg:text-2xl">{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
