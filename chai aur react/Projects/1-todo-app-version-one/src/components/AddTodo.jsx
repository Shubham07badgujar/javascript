function AddTodo() {
    return(
        <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter the todo list "></input>
            </div>
            <div class="col-4">
              <input type="date"></input>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">App</button>
            </div>
          </div>
    );
}