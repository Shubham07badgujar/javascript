function Random() {
    let randomNumber = Math.random() * 100;
    return <h2 style={{'backgroundColor': '#776691'}}> Random Number in maths are {Math.round(randomNumber)}</h2>
}

export default Random;