import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  return (
    <div className="h-screen md:py-8 flex items-center justify-center">
      <div className="w-full md:w-3/4 p-6 md:bg-zinc-800 h-full lg:grid grid-cols-3  shadow-xl shadow-zinc-900">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
};
export default Projects;
