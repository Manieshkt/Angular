import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = ({ logmail, logpass, setLogmail, setLogpass }) => {
    const [users,setUsers]=useState([])
    const [status,setStatus]=useState('')

    const navigate=useNavigate()
    const handleCreate=()=>{
        navigate('/Signup')
    }

    const handleLogin=async()=>{
        const userData={
            email:logmail,
            password:logpass
        }
        try{
            const response=await fetch('http://localhost:8081/api/login',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const token = await response.json();
            localStorage.setItem('token', token);
            console.log(token)

            navigate('/Home');
        }
        catch(err){
            console.error('Login error:', err);
            setStatus('Invalid email or password');
        }
    }

    return (
        <>
            <div>
                <label>Email : </label>
                <input type="email" placeholder="Enter your mail id" onChange={e => setLogmail(e.target.value)} />
            </div>
            <div>
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" onChange={e => setLogpass(e.target.value)} />
            </div>
            <div>
                <button onClick={handleCreate} >Create Account</button>
                <button onClick={handleLogin} >Log In</button>
            </div>
            <p><b>{status}</b></p>
        </>
    )
}