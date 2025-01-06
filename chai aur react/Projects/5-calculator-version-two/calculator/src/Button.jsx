import styles from "./Button.module.css";

function Button() {
  const buttonContainer = [
    "Num Lock",
    " / ",
    " * ",
    " - ",
    " 7 ",
    "8",
    "9",
    " + ",
    "4",
    "5",
    " 6",
    " ! ",
    "1",
    "2",
    "3",
    
    " . ",
    "  = ",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonContainer.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
}

export default Button;
