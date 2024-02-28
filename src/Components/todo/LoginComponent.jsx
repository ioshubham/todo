import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {  useAuth } from './security/AuthContext'

export default function LoginComponent() {

    const [username,setUsername]=useState('in28minutes')
    const [password,setPassword]=useState('123456789')
    const [showSuccessMsg,setSuccessMsg]=useState(false)
    const [showErrorMsg,setErrorMsg]=useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handelUsernameChange(event) {
        setUsername(event.target.value)
        
    }
    function handelPasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handelSubmit() {
       if(await authContext.login(username,password)) {
        navigate(`/welcome/${username}`)
        
       }
       else {
        setErrorMsg(true)
       }
    }


    return (
        <div className="login">
            <h1>Time to Login</h1>
            {showSuccessMsg && <div className='successMessage'>Authenticated Successfully</div> }
            {showErrorMsg && <div className='errorMessage'>Authenticated Failed. Check your Credentials</div>}
            <div className="LoginForm">

                <div>
                    <label>User Name</label>
                    <input type="text" name="username"  value={username} onChange={handelUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handelPasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handelSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}