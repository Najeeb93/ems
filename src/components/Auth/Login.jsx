import React from "react";


function Login() {
    return (
        <div className="flex h-screen w-screen   items-center justify-center">
            <div className="border-2 border-red-600">
            <form className="flex flex-col items-center justify-center">
                <input className="border-2 border-red-600 rounded-full" type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter password" />
                <button>Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login;