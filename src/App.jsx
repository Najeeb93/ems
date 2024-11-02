import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utlis/localStorge'

function App() {
  
  const [user, setUser] = useState(null);
  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
    } else if(email == 'user@me.com' && password == '123'){
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
