import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ setMockDataArr }) => {
  let [userInput, setUserInput] = useState("");

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMockDataArr((prev) => {
      //prev = [el1, el2, el3]
      //spread: el1,el2,el3
      return [userInput, ...prev]; //spread operator
    });
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onInputChange}
        name="userInput"
        value={userInput}
        type="text"
      />
      <input value={"add task"} type="submit" />
    </form>
  );
};

export default Form;
