import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <header>
          <Jumbotron>
            <h1>Welcome to 20TechJobs</h1>
            <p>
              A web app that searches for the latest 20 jobs related to a
              certain keyword fetched from different sources/APIs powered by{" "}
              <a href="https://github.com/amirhesham65/tech-jobs-api">
                TechJobs API
              </a>
            </p>
            <Button variant="primary">Learn more</Button>
          </Jumbotron>
        </header>
      </Container>
    </div>
  );
}

export default App;
