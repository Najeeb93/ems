import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utlis/localStorge'
import { AuthContext } from './context/AuthProvider'

function App() {
  
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // console.log('authData', authData.employees);
  
  useEffect(()=> {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    }
  }, [authData]);
  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
    } else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employee')
      
    }
    else{
      alert('Invalid Credentials')
    }
  }
 
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/>: ''}
   {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} 
   </>
  )
}

export default App
