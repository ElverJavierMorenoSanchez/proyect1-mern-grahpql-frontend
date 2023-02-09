import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PROJECT, GET_PROJECT } from "../graphql/projects";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import Loader from "../components/Loader";
const ProjectDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  });

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: ["Projects"],
  });

  const handleDelete = async () => {
    await deleteProject({
      variables: {
        projectId: data.project._id,
      },
    });

    navigate("/");
  };

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error) return <p>Error</p>;

  return (
    <div className="flex justify-center items-center flex-col py-10">
      <div className="min-w-[300px] p-6 bg-zinc-700 text-center rounded-xl">
        <h1 className="text-xl sm:text-2xl">{data.project.name}</h1>
        <p>{data.project.description}</p>
        <button
          onClick={handleDelete}
          className="mt-3 px-6 py-3 bg-rose-600 rounded-lg hover:bg-rose-800 hover:text-white text-zinc-8['00 font-semibold"
        >
          Delete
        </button>
      </div>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  );
};
export default ProjectDetails;
