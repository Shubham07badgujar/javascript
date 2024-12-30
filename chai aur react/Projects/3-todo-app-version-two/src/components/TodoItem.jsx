function TodoItem({todoName, todoDate}) {
  // let todoName = 'Buy Milk';
  // let todoDate = '4/10/2024'
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-dark">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
