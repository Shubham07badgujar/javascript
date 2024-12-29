import Item from "./Item";

const FoodItem = () => {
    let foodItems = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee'];

    return(
        <ul className="list-group">
        {foodItems.map((item) => {
            <Item></Item>
        })}          
        </ul>
    );
};

export default FoodItem;