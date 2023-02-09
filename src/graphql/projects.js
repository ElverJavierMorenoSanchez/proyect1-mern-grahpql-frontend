import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      _id
      name
      description
    }
  }
`;

export const GET_PROJECT = gql`
  query Project($id: ID!) {
    project(_id: $id) {
      _id
      createdAt
      description
      name
      tasks {
        _id
        title
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($name: String, $description: String) {
    createProject(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($projectId: ID!) {
    deleteProject(projectID: $projectId) {
      _id
      name
      description
    }
  }
`;
