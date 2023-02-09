import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="w-full p-6 flex flex-wrap gap-1 justify-evenly">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
