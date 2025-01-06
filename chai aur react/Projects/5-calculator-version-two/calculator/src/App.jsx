import styles from "./App.module.css";
import Button from "./Button";
import Display from "./Display";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Display></Display>

        <Button></Button>
      </div>
    </>
  );
}

export default App;
