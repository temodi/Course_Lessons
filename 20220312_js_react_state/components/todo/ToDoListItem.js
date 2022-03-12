

function ToDoListItem({ index, item, clickHandlerByIndex }) {
  return (
    <div>
      <div>{ item.toDo }</div><div><button onClick={ clickHandlerByIndex(index) } name={ `item_${index}`} >{ item.isDone ? 'Kész':'Nincs kész' }</button></div>
    </div>
  )
}

export default ToDoListItem;