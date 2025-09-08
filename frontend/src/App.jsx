import React, { useState, useContext, useEffect } from 'react'
import Login from "./Components/Auth/Login"
import EmployeeDeshboard from './Components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './Components/Deshboard/AdminDeshboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      // console.log("User loggedIn hai ")

      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      // console.log(userData)
    }
  },[])

  const handleLogin = (email, password) => {
    console.log(email, password)

    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {

      const employee = userData.find((e) => email === e.email && password === e.password)

      if (employee) {

        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))

      } else {
        alert("Invalid credentials")
      }
    } else {
      alert("Invalid credentials")
    }
  }

  return (
  <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDeshboard  changeUser = {setUser}/>
      ) : user === 'employee' ? (
        <EmployeeDeshboard changeUser = {setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
