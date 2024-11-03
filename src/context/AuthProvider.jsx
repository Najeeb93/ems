import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utlis/localStorge";

export const AuthContext = CreateContext();
function AuthProvider({children}) {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const {employee, admin} = getLocalStorage()
        
    })
    return (
        <div>
            <AuthContext.Provider value={username}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;