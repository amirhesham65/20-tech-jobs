import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Container, Card, Row, Col } from "react-bootstrap";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState([]);

  const handleDataFetched = (fetchedData) => setData(fetchedData);

  useEffect(() => console.log(data), [data]);

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
        <SearchBar onDataFetched={handleDataFetched} />
        <br />
        <div className="results">
          <Card>
            <Card.Header as="h5">Results</Card.Header>
            <Card.Body>
              {data.map((job) => (
                <Card key={job.id} style={{ margin: "20px 0" }}>
                  <Card.Body>
                    <Container fluid>
                      <Row>
                        <Col sm={8}>
                          <Card.Title>
                            {
                              <div
                                dangerouslySetInnerHTML={{ __html: job.title }}
                              />
                            }
                          </Card.Title>
                          <Card.Subtitle>
                            {
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: job.company,
                                }}
                              />
                            }
                          </Card.Subtitle>
                          <Card.Text>
                            <span
                              dangerouslySetInnerHTML={{ __html: job.location }}
                            />
                          </Card.Text>
                          <Button variant="primary">Apply</Button>
                        </Col>
                        <Col sm={4} style={{padding:"30px 10px"}}>
                          <Card.Img  style={{maxWidth: "200px"}} src={job.company_logo} />
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {new Date(job.created_at).toUTCString()}
                  </Card.Footer>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;
