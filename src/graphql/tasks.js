import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation CreateTask($title: String, $projectId: ID) {
    createTask(title: $title, projectID: $projectId) {
      _id
      title
      project {
        _id
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: ID!) {
    deleteTask(taskID: $taskId) {
      _id
      title
    }
  }
`;
