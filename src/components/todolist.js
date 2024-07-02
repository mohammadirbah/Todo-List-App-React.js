import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  InputGroup,
  ProgressBar,
  Card,
} from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [editTaskDeadline, setEditTaskDeadline] = useState("");
  const [priority, setPriority] = useState(null);
  const [editTaskPriority, setEditTaskPriority] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: inputValue,
          description: taskDescription,
          timestamp: Date.now(),
          status: "To-Do",
          deadline: deadline,
          priority: priority,
        },
      ]);
      setInputValue("");
      setTaskDescription("");
      setDeadline(null);
      setPriority("");
    }
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTaskId(id);
    setEditTaskValue(taskToEdit.text);
    setEditTaskDescription(taskToEdit.description);
    setEditTaskDeadline(taskToEdit.deadline);
    setEditTaskPriority(taskToEdit.priority);
  };

  const saveTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId
          ? {
              ...task,
              text: editTaskValue,
              description: editTaskDescription,
              deadline: editTaskDeadline,
              priority: editTaskPriority,
            }
          : task
      )
    );
    setEditTaskId(null);
    setEditTaskValue("");
    setEditTaskDescription("");
    setEditTaskDeadline("");
    setPriority(null);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const updatedTasks = tasks.map((task) =>
        task.id === result.draggableId
          ? { ...task, status: destination.droppableId }
          : task
      );
      setTasks(updatedTasks);
    }
  };

  const calculateCompletionPercentage = () => {
    const completedTasks = tasks.filter(
      (task) => task.status === "Done"
    ).length;
    return tasks.length === 0 ? 0 : (completedTasks / tasks.length) * 100;
  };

  const localizer = momentLocalizer(moment);

  return (
    <Container
      className="container col-xxl-8 px-5 py-5 rounded-3"
      id="your-list"
      style={{ fontFamily: "poppins" }}
    >
      <Row className="justify-content-md-center mb-4">
        <Col md="8">
          <h1
            className="text-center my-5 mb-2"
            style={{ color: "#ebe7f9", fontFamily: "poppins" }}
          >
            Your List
          </h1>
          <Form className="mb-3" style={{ color: "#ebe7f9" }}>
            <Form.Group style={{ marginTop: "5px" }}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter task title..."
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "5px" }}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description..."
                style={{ height: "100px" }}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "5px" }}>
              <Form.Label>Deadline</Form.Label>
              <InputGroup>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  placeholderText="MM/DD/YYYY"
                  className="form-control"
                  dateFormat="MMMM d, yyyy"
                />
                <InputGroup.Text>
                  <FaCalendarAlt />
                </InputGroup.Text>
              </InputGroup>
              <Form.Group style={{ marginTop: "10px" }}>
                <Form.Label>Priority</Form.Label>
                <div>
                  <Button
                    variant="outline-light"
                    className="rounded-pill me-2"
                    style={{
                      backgroundColor: priority === "low" ? "#ffc0cb" : "",
                      borderColor: priority === "low" ? "#ffc0cb" : "#ccc",
                      color: priority === "low" ? "black" : "",
                    }}
                    onClick={() => setPriority("low")}
                  >
                    Low
                  </Button>
                  <Button
                    variant="outline-light"
                    className="rounded-pill me-2"
                    style={{
                      backgroundColor: priority === "medium" ? "#add8e6" : "",
                      borderColor: priority === "medium" ? "#add8e6" : "#ccc",
                      color: priority === "medium" ? "black" : "",
                    }}
                    onClick={() => setPriority("medium")}
                  >
                    Medium
                  </Button>
                  <Button
                    variant="outline-light"
                    className="rounded-pill"
                    style={{
                      backgroundColor: priority === "high" ? "#ff6347" : "",
                      borderColor: priority === "high" ? "#ff6347" : "#ccc",
                      color: priority === "high" ? "black" : "",
                    }}
                    onClick={() => setPriority("high")}
                  >
                    High
                  </Button>
                </div>
              </Form.Group>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={addTask} className="mt-3">
                Add Task
              </Button>
            </div>
          </Form>
          <h1
            className="text-center my-5 mb-2"
            style={{ color: "#ebe7f9", fontFamily: "poppins" }}
          >
            Your Progress
          </h1>
          <ProgressBar
            variant="success"
            now={calculateCompletionPercentage()}
            label={`${calculateCompletionPercentage().toFixed(0)}%`}
            className="mb-3 mt-5"
          />
        </Col>
      </Row>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          {["To-Do", "In Progress", "Done"].map((status) => (
            <Col md="4" className="mb-4" key={status}>
              <Container
                style={{
                  backgroundColor:
                    status === "To-Do"
                      ? "#a0ced9"
                      : status === "In Progress"
                      ? "#ffee93"
                      : status === "Done"
                      ? "#adf7b6"
                      : "",
                }}
              >
                <Row>
                  <Card className="mb-4">
                    <Card.Header className="text-center">
                      <h3>{status}</h3>
                    </Card.Header>
                    <Droppable droppableId={status}>
                      {(provided) => (
                        <ListGroup
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {tasks
                            .filter((task) => task.status === status)
                            .map((task, index) => (
                              <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                              >
                                {(provided) => (
                                  <ListGroup.Item
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="mb-3"
                                    style={{
                                      ...provided.draggableProps.style,
                                      backgroundColor:
                                      task.status === "To-Do"
                                          ? "rgba(128, 205, 225, 0.5)"
                                          :
                                        task.status === "In Progress"
                                          ? "rgba(255, 255, 0, 0.5)"
                                          : task.status === "Done"
                                          ? "rgba(0, 128, 0, 0.5)"
                                          : task.status === "rgba(0,255,0,0)",
                                    }}
                                  >
                                    {editTaskId === task.id ? (
                                      <div>
                                        <InputGroup className="mb-3">
                                          <Form.Control
                                            type="text"
                                            value={editTaskValue}
                                            onChange={(e) =>
                                              setEditTaskValue(e.target.value)
                                            }
                                          />
                                        </InputGroup>
                                        <Form.Group className="mb-3">
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                            as="textarea"
                                            value={editTaskDescription}
                                            onChange={(e) =>
                                              setEditTaskDescription(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                          <Form.Label>Deadline</Form.Label>
                                          <Form.Control
                                            type="date"
                                            value={editTaskDeadline}
                                            onChange={(e) =>
                                              setEditTaskDeadline(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                          <Form.Label>Priority</Form.Label>
                                          <div>
                                            <Button
                                              variant="outline-light"
                                              className="rounded-pill me-2 text-black"
                                              style={{
                                                backgroundColor:
                                                  editTaskPriority === "low"
                                                    ? "#ffc0cb"
                                                    : "",
                                                borderColor:
                                                  editTaskPriority === "low"
                                                    ? "#ffc0cb"
                                                    : "#ccc",
                                                color:
                                                  editTaskPriority === "low"
                                                    ? "#000000"
                                                    : "",
                                              }}
                                              onClick={() =>
                                                setEditTaskPriority("low")
                                              }
                                            >
                                              Low
                                            </Button>
                                            <Button
                                              variant="outline-light"
                                              className="rounded-pill me-2 text-black"
                                              style={{
                                                backgroundColor:
                                                  editTaskPriority === "medium"
                                                    ? "#add8e6"
                                                    : "",
                                                borderColor:
                                                  editTaskPriority === "medium"
                                                    ? "#add8e6"
                                                    : "#ccc",
                                                color:
                                                  editTaskPriority === "medium"
                                                    ? "#000000"
                                                    : "",
                                              }}
                                              onClick={() =>
                                                setEditTaskPriority("medium")
                                              }
                                            >
                                              Medium
                                            </Button>
                                            <Button
                                              variant="outline-light"
                                              className="rounded-pill text-black"
                                              style={{
                                                backgroundColor:
                                                  editTaskPriority === "high"
                                                    ? "#ff6347"
                                                    : "",
                                                borderColor:
                                                  editTaskPriority === "high"
                                                    ? "#ff6347"
                                                    : "#ccc",
                                                color:
                                                  editTaskPriority === "high"
                                                    ? "#000000"
                                                    : "",
                                              }}
                                              onClick={() =>
                                                setEditTaskPriority("high")
                                              }
                                            >
                                              High
                                            </Button>
                                          </div>
                                        </Form.Group>
                                        <div className="d-flex justify-content-center">
                                          <Button
                                            variant="success"
                                            style={{ marginRight: "5px" }}
                                            onClick={saveTask}
                                          >
                                            Save
                                          </Button>
                                          <Button
                                            variant="secondary"
                                            onClick={() => setEditTaskId(null)}
                                          >
                                            Cancel
                                          </Button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                          <h4
                                            style={{
                                              textDecoration:
                                                task.status === "Done"
                                                  ? "line-through"
                                                  : "none",
                                            }}
                                          >
                                            {task.text}
                                          </h4>
                                          <div>
                                            <h6>{task.description}</h6>
                                            <span>
                                              {new Date(
                                                task.timestamp
                                              ).toLocaleString()}
                                            </span>
                                            <br />
                                            <hr />
                                            {task.deadline && (
                                              <span>
                                                Deadline:{" "}
                                                {new Date(
                                                  task.deadline
                                                ).toLocaleDateString()}
                                              </span>
                                            )}
                                            <br />
                                            {task.priority && (
                                              <span>
                                                Priority:{" "}
                                                <span
                                                  className="rounded-pill px-2"
                                                  style={{
                                                    backgroundColor:
                                                      task.priority === "low"
                                                        ? "#ffc0cb"
                                                        : task.priority ===
                                                          "medium"
                                                        ? "#add8e6"
                                                        : task.priority ===
                                                          "high"
                                                        ? "#ff6347"
                                                        : "",
                                                    color: "black",
                                                  }}
                                                >
                                                  {task.priority
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    task.priority.slice(1)}
                                                </span>
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        <div className="position-absolute top-0 end-0">
                                          <MdModeEditOutline
                                            className="large-icon"
                                            onClick={() => editTask(task.id)}
                                            style={{
                                              cursor: "pointer",
                                              marginRight: "10px",
                                            }}
                                          />
                                          <MdDelete
                                            className="large-icon"
                                            onClick={() => deleteTask(task.id)}
                                            style={{ cursor: "pointer" }}
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </ListGroup.Item>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </ListGroup>
                      )}
                    </Droppable>
                  </Card>
                </Row>
              </Container>
            </Col>
          ))}
          <Container id="calendar">
  <Row>
    <Col md="12">
      <h1 className="text-center my-4" style={{ color: "#ebe7f9" }}>
        Your Calendar
      </h1>
      <Card className="mb-4" style={{ padding: '35px' }}>
        <Calendar
          localizer={localizer}
          events={tasks.map((task) => ({
            id: task.id,
            title: task.text,
            start: new Date(task.timestamp),
            end: moment(task.timestamp).add(1, "hour").toDate(),
          }))}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Card>
    </Col>
  </Row>
</Container>

        </Row>
      </DragDropContext>
    </Container>
  );
};

export default TodoList;
