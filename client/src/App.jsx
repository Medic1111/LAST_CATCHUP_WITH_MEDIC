import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

// FUNCTION THAT RETURNS JSX

function App() {
  const [mockDataArr, setMockDataArr] = useState([]);

  return (
    <>
      <Header />
      <Form setMockDataArr={setMockDataArr} />
      <TaskList setMockDataArr={setMockDataArr} mockDataArr={mockDataArr} />
    </>
  );
}

export default App;
