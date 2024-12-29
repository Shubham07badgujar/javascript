import Item from "./Item";

const FoodItem = () => {
    let foodItem = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee'];

    return(
        <ul className="list-group">
          {foodItem.map((item) => (
            <Item key={item} foodItem = {item} ></Item>
        ))}          
        </ul>
    );
};

export default FoodItem;