
import{useState} from "react"


export const Counter = (props)=>{

    const [initialCount,setCount] = useState(props.initialCount)

    function btnHandler (){
        setCount(oldCount=>oldCount+1)
    }





return (
    <div>
        <h3>Counter</h3>
        <button onClick={btnHandler} >Click to increment {initialCount}</button>
    </div>
)


}