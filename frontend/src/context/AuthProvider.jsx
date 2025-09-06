import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {setLocalStorage, getLocalStorage } from '../utils/localStrorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({ employees: [], admin: [] })

    useEffect(() => {
        
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
    }, [])

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
