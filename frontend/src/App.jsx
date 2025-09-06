import React, { useState, useContext } from 'react'
import Login from "./Components/Auth/Login"
import EmployeeDeshboard from './Components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './Components/Deshboard/AdminDeshboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    console.log(email, password)

    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData && authData.employees) {
       
      const employee = authData.employees.find((e) => email === e.email && password === e.password)

      if (employee) {

        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
        
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
        <AdminDeshboard />
      ) : (
        <EmployeeDeshboard data={loggedInUserData} />
      )}
    </>
  )
}

export default App
