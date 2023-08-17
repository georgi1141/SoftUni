export const Todo = (props)=>{

    return ( 
            
        <tr className={`todo ${props.todo.isCompleted ? "is-completed" : "" }`.trim()}>
        <td>{props.todo.text}</td>
        <td>{props.todo.isCompleted ? "Completed" : "Incompleted"}</td>
        <td className="todo-action">
          <button onClick={()=>props.toggleHandler(props.todo._id)} className="btn todo-btn">Change status</button>
        </td>
      </tr>

    )
}