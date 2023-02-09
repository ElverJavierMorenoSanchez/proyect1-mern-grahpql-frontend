import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_TASK } from "../../graphql/tasks";

const TaskCard = ({ task }) => {
  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
    refetchQueries: ["Project"],
  });

  const handleDelete = async (e) => {
    await deleteTask({ variables: { taskId: task._id } });
  };

  return (
    <div className="w-full md:w-[49%] lg:w-[24%] bg-zinc-600 mt-2 px-6  py-3 flex lg:flex-col justify-between items-center">
      <h2 className="w-full font-semibold text-xl text-start">{task.title}</h2>
      <button
        onClick={handleDelete}
        className="w-1/3 lg:mt-3 py-3 bg-teal-700 rounded-lg hover:bg-teal-500 hover:text-zinc-800 text-zinc-8['00 font-semibold ml-auto"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
