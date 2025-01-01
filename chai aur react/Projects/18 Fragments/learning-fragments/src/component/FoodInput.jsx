import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
    // const handleOnChange = (event) =>{
    //     console.log(event.target.value)
    // }
  return (
    <input
      type="text"
      placeholder="Enter the Item Here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default FoodInput;
