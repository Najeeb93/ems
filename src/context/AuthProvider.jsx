import React from "react";

export const AuthContext = CreateContext();
function AuthProvider({children}) {
    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;