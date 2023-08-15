import styles from "./styles.module.css";

const Task = ({ str, setMockDataArr }) => {
  const handleDel = () => {
    setMockDataArr((prev) => {
      return prev.filter((el) => el !== str);
    });
  };

  return (
    <li onClick={handleDel} className={styles.li}>
      {str}
    </li>
  );
};

export default Task;
