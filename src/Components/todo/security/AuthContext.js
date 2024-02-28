import { createContext, useContext, useState } from "react";

//  create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)   // this is how hook is created
// put some state in context

export default function AuthProvider({children}) {

//share the created context with other component
    const [number,setNumber] =  useState(false);
    const [isAuthenticated,setAuthenticated] =  useState(false);
    const [username,setUsername] = useState(null);

   // setInterval( ()=>setNumber(number+1), 10000)
   
//    function login(username, password) {
//     if(username==='in28minutes' && password==='123456789') {
//         setAuthenticated(true)
//         setUsername(username)
//         return true
//        }
//        else {
//         setAuthenticated(false)
//         setUsername(null)
//         return false
     
//        }
//    }

   async function login(username, password) {

    const baToken = 'Basic ' + window.btoa(username+":"+password) // window.btoa will do base 64 encoding

    try 
    {
        const response = await executeBasicAuthenticationService(baToken)
        if(response.status==200) {
        setAuthenticated(true)
        setUsername(username)
        return true
       }
       else {
        setAuthenticated(false)
        setUsername(null)
        return false
     
       }
    }
    catch(error) {
        setAuthenticated(false)
        setUsername(null)
        return false 
    }
   }

   function logout() {
    setAuthenticated(false)
   }

    const valueToBeShared = {number,isAuthenticated,setAuthenticated,login,logout,username}
    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>

    )
}

