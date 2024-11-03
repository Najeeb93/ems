import React, { useState } from "react";

export const AuthContext = CreateContext();
function AuthProvider({children}) {
    const [userData, setUserData] = useState([]);
    return (
        <div>
            <AuthContext.Provider value={username}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;