function CurrentTime() {
    let time = new Date();
    return (
        <p>the current Date is :{time.toLocaleDateString()} and the current time is :{time.toLocaleTimeString()}</p>
    );
}
export default CurrentTime;