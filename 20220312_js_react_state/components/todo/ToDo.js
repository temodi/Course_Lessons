
import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDo() {
  // { toDo: 'Teened', isDone: false }
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState('');

  const changeHandler = (event) => {
    setToDo(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setToDoList(prev => {
      // prev -> akt. toDoList
      const newToDoList = [...prev];
      newToDoList.push({
        toDo: toDo,
        isDone: false,
      });
      return newToDoList;
    });
  }

 /*  const clickHandler = (event) => {
    console.log('target.name', event.target.name)
    const [_, index] = event.target.name.split('_')
    console.log('index', index)
  }
 */
  const clickHandlerByIndex = (index) => (event) => {
    console.log('target.name', event.target.name)
    console.log('index:', index);

    setToDoList(prev => {
      const newToDoList = [...prev];
      newToDoList[index] = {...newToDoList[index], isDone: !newToDoList[index].isDone};
      return newToDoList;
    })
  }

  // console.log('toDoList', toDoList)
  return (
    <div>
      <h2>toDo</h2>
      <ToDoList toDoList={ toDoList } clickHandlerByIndex={ clickHandlerByIndex } />
      <ToDoForm submitHandler={ submitHandler } changeHandler={ changeHandler } />
    </div>
  )

}


export default ToDo;