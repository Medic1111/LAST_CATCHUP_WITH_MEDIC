import Task from "../Task/Task";
import styles from "./TaskList.module.css";

const TaskList = ({ mockDataArr, setMockDataArr }) => {
  return (
    <ul className={styles.ul}>
      {mockDataArr.map((str, index) => {
        return (
          <Task
            setMockDataArr={setMockDataArr}
            str={str}
            key={`TASK_${index}`}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
