
import { useState } from "react"
import "../styles/SignIn.css"
import axios from "axios"




export const SignIn=()=>{
    const [username,setUsername]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    
    const handleSubmit=async(event:React.FormEvent)=>{
        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:4000/signin',{
                username,
                password
            });
            console.log(response);
            if (response.status === 200) {
                window.location.href = "http://localhost:3000/homepage"; // Redirect on success
              }
            } catch(error) {if(axios.isAxiosError(error)){

              if (error.response && error.response.status === 401) {
                // Handle the case where the authentication fails
                window.location.href = "http://localhost:3000/signup";
              } else {
                console.error("Error:", error.response?.data); // Handle other errors
              }
            }}
          };
        


    

    return <div>
        
        <form className="SignIn" onSubmit={handleSubmit}>
        <h2>Sign In Form</h2>
            <input 
                type="text" 
                placeholder='Username' 
                className="InputFields" 
                value={username} 
                name="UserName"
                autoComplete="on"
                onChange={(event)=>{setUsername(event.target.value)}}>    
             </input>
            <input 
                type="password" 
                placeholder="Password" 
                className="InputFields" 
                value={password}
                name="PassWord"
                autoComplete="off"
                onChange={(event)=>{setPassword(event.target.value)}}>
            </input>
        <button type="submit" className="InputFields" >Sign In</button>
        </form>
        
    </div>

}