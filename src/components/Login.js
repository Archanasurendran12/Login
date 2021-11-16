import React,{useState} from 'react'
import "./Login.css";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    return (
        <div className="login">
        <form className="login_form">
        <h1>Login Here</h1>
        <input  type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
        <input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <input  type="password" placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)}/><br/>
        <button type="submit" className="submit__btn">Submit</button>
        </form>
        </div>
    )
}

export default Login
