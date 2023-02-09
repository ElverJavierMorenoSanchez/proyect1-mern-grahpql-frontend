import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (error) return <p>Error</p>;
  if (loading)
    return (
      <div className="col-span-2 flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="col-span-2 mt-3 lg:pl-6 lg:m-0 flex flex-col md:flex-row gap-1 justify-between flex-wrap overflow-y-auto">
      {data.projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};
export default ProjectList;
