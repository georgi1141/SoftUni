import {useState,useEffect} from "react"
import { Todo } from "./Todo"
import {Loader} from "./Loader"


export default function TodoList(){

    const [todos,setTodos] = useState([])
  const [isLoading,setLoading] = useState(true)


    useEffect(()=>{
      fetch('http://localhost:3030/jsonstore/todos')
      .then(res=>res.json())
      .then(result=>{
        setTodos(Object.values(result))
        setLoading(false)
      })
    },[])

   
    const toggleHandler = (id)=>{
      setTodos(todos=>todos.map(todo=> todo._id === id ? ({...todo,isCompleted: !todo.isCompleted}): todo))

    }

    return (
        <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>

        <div className="table-wrapper">
        
          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead> 
            <tbody>
              {isLoading ? <Loader/> : todos.map(todo=>{
                return <Todo key={todo._id} todo={todo} toggleHandler={toggleHandler}/>
              })}
             


            </tbody>
          </table>
        </div>
      </section>
    ) 
}