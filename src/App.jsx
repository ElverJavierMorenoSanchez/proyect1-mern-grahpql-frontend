import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

const client = new ApolloClient({
  uri: "https://graphql-backend-mern.onrender.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
