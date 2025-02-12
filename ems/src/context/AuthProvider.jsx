import React, { useEffect, createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserData]=useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employeeData}=getLocalStorage()
        setUserData(employeeData)
        
    }, [])
    
    

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
