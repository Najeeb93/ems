import React from "react";

function AuthContext({children}) {
    return (
        <div>
       <h1>{children}</h1>
        </div>
    )
}

export default AuthContext;