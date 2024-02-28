import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { reteriveHelloWorldBean, reteriveHelloWorldBeanPathVariable } from './api/HelloWorldApiService'

export default function WelcomeComponent() {

    const [message,setMessage] = useState(null)

    function callHelloWorldRestApiBean() {
        console.log('called')
        //axios
        //reteriveHelloWorldBean()
        reteriveHelloWorldBeanPathVariable('in28minutes')
        .then(
            (response)=> SuccessfullResponse(response)
        )
        .catch(
            (error)=>errorResponse(error)
        )
        .finally(
            ()=> console.log('cleanup')
        )

    }
    
    function SuccessfullResponse(response) {
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)

    }
    function errorResponse(error) {
        console.log(error)

    }

    const {username} = useParams()

    return (
    <div>
        <h1>Welcome to Todo-list {username}</h1>
        <div className="welcome">
            Manage your todos. <Link to="/todos">Go Here</Link>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApiBean}>Hello world rest api Bean</button>
        </div>
        <div className='text-info'>{message}</div>
    </div>
       
    )
}