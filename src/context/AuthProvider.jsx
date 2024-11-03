import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage } from "../utlis/localStorge";

export const AuthContext = createContext()
const  AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])
    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;