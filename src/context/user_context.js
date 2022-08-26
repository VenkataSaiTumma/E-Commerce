import React, {  useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { 
    loginWithRedirect,
    logout,
    user,
       } = useAuth0()

    useEffect(()=>{
      
    }, [user])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, user}}>{children}</UserContext.Provider>
  )
}
 
export { UserContext, UserProvider }