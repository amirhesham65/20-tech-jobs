import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Container>
        <AppNavbar />
        <br />
        <header>
          <Jumbotron>
            <h1>Welcome to 20TechJobs</h1>
            <p>
              A web app that searches for the latest 20 jobs related to a
              certain keyword fetched from different sources and APIs powered by{" "}
              <a href="https://github.com/amirhesham65/tech-jobs-api">
                TechJobs API
              </a>
              .
            </p>
            <Button variant="primary">See Available</Button>
          </Jumbotron>
        </header>
        <br />
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
