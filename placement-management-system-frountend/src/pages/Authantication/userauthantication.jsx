import { useState } from "react"
function authRegister(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <form>
            <input
            type="text"
            placeholder="FullName"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

        </form>
    )
}