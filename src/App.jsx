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
const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext)
  
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
}, [])

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    }
    else{
      alert('Invalid Credentials')
    }
  }
 
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/>: ''}
   {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?  <EmployeeDashboard data={loggedInUserData}/> : null)} 
   </>
  )
}

export default App
