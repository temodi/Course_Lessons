
import ToDoListItem from "./ToDoListItem";

function ToDoList({ toDoList, clickHandlerByIndex }) {
  return (
    <div>
      {toDoList.map((item, index) => {
        return <ToDoListItem key={ `item_${index}` } index={ index } item={ item } clickHandlerByIndex={ clickHandlerByIndex } />
      })}
    </div>
  );
}

export default ToDoList;