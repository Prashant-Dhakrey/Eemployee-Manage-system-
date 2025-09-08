import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {setLocalStorage, getLocalStorage } from '../utils/localStrorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState({ employees: [], admin: [] })

    useEffect(() => {
        
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData(employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
