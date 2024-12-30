import Item from "./Item";

const FoodItem = ({item}) => {
    // let foodItem = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee'];

    return(
        <ul className="list-group food-heading">
          {item.map((item) => (
            <Item key={item} foodItem = {item} ></Item>
        ))}          
        </ul>
    );
};

export default FoodItem;