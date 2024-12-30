function TodoItem2() {

    let todoName = 'Go to College';
    let todoDate = '4/12/2024'
    return (
        <div class="row kg-row">
            <div class="col-6">
              {todoName}
            </div>
            <div class="col-4">
              {todoDate}
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-dark">Delete</button>
            </div>
          </div>
    );
}
export default TodoItem2;