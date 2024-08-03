
import { useState } from "react"
import "../styles/SignIn.css"
import axios from "axios"




export const SignUp=()=>{
    const [username,setUsername]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    
    const handleSubmit=async()=>{
        const signUp=await axios.post('http://localhost:4000/signup',{
            userName:username,
            passWord:password
        })


    }

    return <div>
        
        <form className="SignUp" onSubmit={handleSubmit}>
        <h2>Sign Up Form</h2>
            <input 
                type="text" 
                placeholder='Username' 
                className="InputFields" 
                value={username} 
                onChange={(event)=>{setUsername(event.target.value)}}>    
             </input>
            <input 
                type="text" 
                placeholder="Password" 
                className="InputFields" 
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}}>
            </input>
        <button type="submit" className="InputFields" >Sign Up</button>
        </form>
        
    </div>

}