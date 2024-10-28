import React, { Children } from "react";

function AuthContext({Children}) {
    return (
        <div>
            {Children}
        </div>
    )
}

export default AuthContext;