import './TodoApp.css'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import LogOutComponent from './LogoutComonent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthentcatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated) {
        return (
            children
        )
    }
    return  <Navigate to="/"/>
    

}

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                <Route path='/' element={<LoginComponent/>}> </Route>

                    <Route path='/login' element={<LoginComponent/>}></Route>

                    <Route path='/welcome/:username' element={
                        <AuthentcatedRoute>
                                    <WelcomeComponent/>
                        </AuthentcatedRoute>
                    
                    }> </Route>

                    <Route path='/todos' element={
                        <AuthentcatedRoute>
                                <ListTodoComponent/>
                        </AuthentcatedRoute>
                    
                    }> </Route>

                    <Route path='/todo/:id' element={
                        <AuthentcatedRoute>
                                <TodoComponent/>
                        </AuthentcatedRoute>
                    
                    }> </Route>

                    <Route path='/logout' element={<LogOutComponent/>}> </Route>

                    <Route path='*' element={<ErrorComponent/>}> </Route>
                </Routes>
                {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}