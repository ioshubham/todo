import { useEffect, useState } from "react";
import { deleteTodoApi, reteriveAllTodoFOrUsername } from "./api/TodoAp";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodoComponent() {

   // const today = new Date();
    const authContext = useAuth();
    const navigate = useNavigate();
    

    const username = authContext.username

    //const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())
  

    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState([]);

    useEffect(
        ()=> RefreshTodo(),[]
    )

    function RefreshTodo() {
    reteriveAllTodoFOrUsername(username)
    .then(
        response => {
        console.log(response.data)
        setTodos(response.data)
        } 
        )
    .catch(error=>console.log(error))
    }

    function deleteTodo(id) {
        console.log("delete todo called"+id)
        deleteTodoApi(username,id)
        .then(
            
            ()=> {
                //1. Display message
                setMessage(`Delete of todo with id ${id} successfull`)

                //2. Update todos
                RefreshTodo()
            }
            
        )
        .catch(error=>console.log(error))
    }
    function updateTodo(id) {
        //console.log("i was pressed"+id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate('/todo/-1')
    }
    
   // const todo = [
       // {id:1,description: 'Learn AWS',done:false , targetDate:targetDate},
       // {id:2,description: 'Learn devops',done:false , targetDate:targetDate},
       // {id:3,description: 'Learn azure',done:false , targetDate:targetDate}
    
 //  ]

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    
                        {
                            todos.map(
                                todo=> (
                            <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button 
                                    className="btn btn-warning" 
                                    onClick={()=>deleteTodo(todo.id)}
                                    >Delete
                                    </button></td>
                                    <td><button 
                                    className="btn btn-success" 
                                    onClick={()=>updateTodo(todo.id)}
                                    >Update
                                    </button></td>
                            </tr>
                                )
                            )
                        }
                            

                    </tbody>
                </table>
                <div className="btn btn-success" onClick={addNewTodo}> Add new Todo </div>
            </div>
        </div>
    )
}