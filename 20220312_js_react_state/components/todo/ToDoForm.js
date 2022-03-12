

function ToDoForm({ submitHandler, changeHandler}) {
  return (
    <form onSubmit={ submitHandler }>
      <input type="text" name="todo" onChange={ changeHandler } />
      <button type="submit" name="save">Hozzaad</button>
    </form>
  );
}

export default ToDoForm;