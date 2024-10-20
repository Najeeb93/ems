import React, { useState } from "react";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (e)=>  {
        e.preventDefault()
        console.log('Hello guyss, Form Submitted');
        
    }
    return (
        <div className="flex h-screen w-screen   items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className="flex flex-col items-center justify-center">
                <input required className=" text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                <input required className=" text-white outline-none mt-3 bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-gray-400 " type="password" placeholder="Enter password" />
                <button className=" text-white mt-5 outline-none border-none border-2 bg-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-white">Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login;