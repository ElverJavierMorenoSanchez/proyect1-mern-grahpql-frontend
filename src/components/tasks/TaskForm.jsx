import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const TaskForm = () => {
  const params = useParams();
  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: ["Project"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    await createTask({
      variables: { title: e.target.title.value, projectId: params.id },
    });

    e.target.reset();
    e.target.title.focus();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-2/3 max-w-[600px] mt-8 px-2 flex"
      >
        <input
          type="text"
          name="title"
          placeholder="Add a task"
          className="w-full p-3 bg-zinc-700 rounded-l-lg"
        />
        <button className="px-7 bg-green-700 rounded-r-lg hover:bg-green-800 font-semibold">
          Add
        </button>
      </form>
      {loading && <Loader />}
    </>
  );
};

export default TaskForm;
