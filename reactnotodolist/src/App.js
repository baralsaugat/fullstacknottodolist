import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Container, Col, Row, Alert, Spinner } from "react-bootstrap";
import { Addform } from "./Components/forms/Addform";
import { Tasklists } from "./Components/tasklist/Tasklist";
import { Nottodolist } from "./Components/tasklist/Nottodolist";

import "./App.css";

import { fetchTaskLists, deleteTasks } from "./Components/tasklist/taskAction";

const App = () => {
  const dispatch = useDispatch();
  // GLobal state
  const { isPending, status, message, totalHrs, itemToDelete } = useSelector(
    (state) => state.task
  );

  const [ssaf, setResponse] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    dispatch(fetchTaskLists());
  }, []);

  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <div className="text-center mt-5">
              <div className="forHelp">
                <h6 className="dataHover">
                  <span className="tooltiptext">
                    {" "}
                    <p>
                      {" "}
                      This tool will to calculate your time spent on unwanted
                      tasks and help to save your time.
                      <br />
                      Add your weekly tasks with total hours spent.
                      <br />
                    </p>
                  </span>
                  <i class="far fa-question-circle"></i>
                </h6>
              </div>

              <h1>Not To Do List</h1>
            </div>
          </Col>
        </Row>
        <hr />
        {/* form */}
        <div>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}

          {isPending && <Spinner animation="border"></Spinner>}
        </div>
        <Addform />
        <hr />
        <Row>
          <Col>
            <Tasklists />
          </Col>
          <Col>
            <Nottodolist />
          </Col>
        </Row>
        <Row>
          <Alert variant="primary">
            <Alert.Heading>
              Your Total Allocated Time = {totalHrs}/ 168 hours
            </Alert.Heading>
          </Alert>
        </Row>

        <Button
          className="dataHover"
          onClick={() => dispatch(deleteTasks(itemToDelete))}
        >
          Delete
        </Button>
      </Container>
    </div>
  );
};

export default App;
