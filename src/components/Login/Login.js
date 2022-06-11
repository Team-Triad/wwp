import React from 'react'
import './Login.css'
const Login = (props) => {
    const {email, setEmail, password, setPassword, handleSignup, emailError, passwordError } = props;
  return (
    <section className='login'>
        <div className='loginContainer'>
            <h1 id='title'>Sign Up</h1>
            <label>Email Id</label>
            <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className='errorMsg'>{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className='errorMsg'>{passwordError}</p>
            <div className='btnContainer'>
            <button onClick={handleSignup}>Sign up</button>
            </div>
        </div>
    </section>
  )
}

export default Login;