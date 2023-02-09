import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: ["Projects"],
  });

  const handleChange = ({ target: { name, value } }) =>
    setProject({ ...project, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-span-1 flex flex-col gap-2 justify-center"
    >
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
        className="p-3 bg-zinc-700 text-white rounded-sm"
      />
      <textarea
        name="description"
        id=""
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        className="p-3 bg-zinc-700 text-white rounded-sm"
      />
      <button
        disabled={!project.name || !project.description || loading}
        className="py-4 disabled:bg-neutral-400 bg-slate-600 hover:bg-slate-700 rounded-md"
      >
        Save
      </button>
    </form>
  );
};

export default ProjectForm;
