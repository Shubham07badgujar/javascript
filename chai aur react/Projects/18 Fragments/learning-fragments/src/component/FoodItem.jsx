const FoodItem = () => {
    let myArray = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee'];

    return(
        <ul className="list-group">
         {myArray.map((item) => <li key={item} class="list-group-item">{item}</li>)}
          
        </ul>
    );
};

export default FoodItem;