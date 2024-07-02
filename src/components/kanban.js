// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   InputGroup,
//   Card,
// } from "react-bootstrap";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const initialTasks = [
//   { id: "1", text: "Task 1", status: "To Do" },
//   { id: "2", text: "Task 2", status: "In Progress" },
//   { id: "3", text: "Task 3", status: "Done" },
// ];

// const KanbanBoard = () => {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [inputValue, setInputValue] = useState("");

//   const addTask = () => {
//     if (inputValue.trim()) {
//       setTasks([
//         ...tasks,
//         { id: `${Date.now()}`, text: inputValue, status: "To Do" },
//       ]);
//       setInputValue("");
//     }
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     const newTasks = Array.from(tasks);
//     const [movedTask] = newTasks.splice(source.index, 1);
//     movedTask.status = destination.droppableId;
//     newTasks.splice(destination.index, 0, movedTask);

//     setTasks(newTasks);
//   };

//   const renderTasks = (status) =>
//     tasks
//       .filter((task) => task.status === status)
//       .map((task, index) => (
//         <Draggable key={task.id} draggableId={task.id} index={index}>
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//             >
//               <Card className="mb-2">
//                 <Card.Body>{task.text}</Card.Body>
//               </Card>
//             </div>
//           )}
//         </Draggable>
//       ));

//   return (
//     <Container
//       className="container col-xxl-8 px-5 py-5 rounded-3"
//       id="kanban-board"
//     >
//       <Row className="justify-content-md-center">
//         <Col md="8">
//           <h1 className="text-center my-4" style={{ color: '#ebe7f9' }}>Tasks Management</h1>
//           <InputGroup>
//             <Form.Control
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Add task..."
//             />
//             <Button variant="primary" onClick={addTask}>
//               Add
//             </Button>
//           </InputGroup>
//         </Col>
//       </Row>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Row className="mt-4">
//           {["To Do", "In Progress", "Done"].map((status) => (
//             <Col key={status} md="4">
//               <Card>
//                 <Card.Header>{status}</Card.Header>
//                 <Droppable droppableId={status}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                       className="p-2"
//                     >
//                       {renderTasks(status)}
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Droppable>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </DragDropContext>
//     </Container>
//   );
// };

// export default KanbanBoard;

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   InputGroup,
//   Card,
// } from "react-bootstrap";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const initialTasks = [
//   { id: "1", text: "Task 1", status: "To Do" },
//   { id: "2", text: "Task 2", status: "In Progress" },
//   { id: "3", text: "Task 3", status: "Done" },
// ];

// const KanbanBoard = () => {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [inputValue, setInputValue] = useState("");

//   const addTask = () => {
//     if (inputValue.trim()) {
//       setTasks([
//         ...tasks,
//         { id: `${Date.now()}`, text: inputValue, status: "To Do" },
//       ]);
//       setInputValue("");
//     }
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     const newTasks = Array.from(tasks);
//     const [movedTask] = newTasks.splice(source.index, 1);
//     movedTask.status = destination.droppableId;
//     newTasks.splice(destination.index, 0, movedTask);

//     setTasks(newTasks);
//   };

//   const renderTasks = (status) =>
//     tasks
//       .filter((task) => task.status === status)
//       .map((task, index) => (
//         <Draggable key={task.id} draggableId={task.id} index={index}>
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//             >
//               <Card className="mb-2">
//                 <Card.Body>{task.text}</Card.Body>
//               </Card>
//             </div>
//           )}
//         </Draggable>
//       ));

//   return (
//     <Container
//       className="container col-xxl-8 px-5 py-5 rounded-3"
//       id="kanban-board"
//     >
//       <Row className="justify-content-md-center">
//         <Col md="8">
//           <h1 className="text-center my-4" style={{ color: '#ebe7f9' }}>Tasks Management</h1>
//           <InputGroup>
//             <Form.Control
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Add task..."
//             />
//             <Button variant="primary" onClick={addTask}>
//               Add
//             </Button>
//           </InputGroup>
//         </Col>
//       </Row>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Row className="mt-4">
//           {["To Do", "In Progress", "Done"].map((status) => (
//             <Col key={status} md="4">
//               <Card>
//                 <Card.Header>{status}</Card.Header>
//                 <Droppable droppableId={status}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                       className="p-2"
//                     >
//                       {renderTasks(status)}
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Droppable>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </DragDropContext>
//     </Container>
//   );
// };

// export default KanbanBoard;

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   InputGroup,
//   Card,
// } from "react-bootstrap";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const KanbanBoard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [descriptionValue, setDescriptionValue] = useState("");

//   const addTask = () => {
//     if (inputValue.trim() && descriptionValue.trim()) {
//       setTasks([
//         ...tasks,
//         { id: `${Date.now()}`, text: inputValue, description: descriptionValue, status: "To Do" },
//       ]);
//       setInputValue("");
//       setDescriptionValue("");
//     }
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     const newTasks = Array.from(tasks);
//     const [movedTask] = newTasks.splice(source.index, 1);
//     movedTask.status = destination.droppableId;
//     newTasks.splice(destination.index, 0, movedTask);
    
//     setTasks(newTasks);
//   };

//   const renderTasks = (status) =>
//     tasks
//       .filter((task) => task.status === status)
//       .map((task, index) => (
//         <Draggable key={task.id} draggableId={task.id} index={index}>
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//             >
//               <Card className="mb-2">
//                 <Card.Body>
//                   <Card.Title>{task.text}</Card.Title>
//                   <Card.Text>{task.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           )}
//         </Draggable>
//       ));

//   return (
//     <Container className="container col-xxl-8 px-5 py-5" id="kanban-board">
//       <Row className="justify-content-md-center">
//         <Col md="8">
//           <h1 className="text-center my-4" style={{ color: "#ebe7f9" }}>
//             Tasks Management
//           </h1>
//           <InputGroup className="mb-3 rounded-3">
//             <Form.Control
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Add task title..."
//             />
//           </InputGroup>
//           <InputGroup className="mb-3">
//             <Form.Control
//               className="rounded-3"
//               as="textarea"
//               rows={3}
//               value={descriptionValue}
//               onChange={(e) => setDescriptionValue(e.target.value)}
//               placeholder="Add task description..."
//             />
//           </InputGroup>
//           <div className="d-flex justify-content-center">
//             <Button variant="primary" onClick={addTask}>
//               Add
//             </Button>
//           </div>
//         </Col>
//       </Row>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Row className="mt-4">
//           {["To Do", "In Progress", "Done"].map((status) => (
//             <Col key={status} md="4">
//               <Card>
//                 <Card.Header>{status}</Card.Header>
//                 <Droppable droppableId={status}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                       className="p-2"
//                     >
//                       {renderTasks(status)}
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Droppable>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </DragDropContext>
//     </Container>
//   );
// };

// export default KanbanBoard;
