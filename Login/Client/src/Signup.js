import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = ({ regmail, regpass, setRegmail, setRegpass }) => {
    const [users, setUsers] = useState([])
    const [status,setStatus]=useState('')

    const navigate=useNavigate()

    const handleCreate = async() => {
        if(!regmail || !regpass){
            console.log("Email and Password are required")
        }
        const values = {
            email: regmail,
            password: regpass
        }
        setUsers(prev => [...prev, values])
        setRegmail('')
        setRegpass('')

            try {
                const response = await fetch('http://localhost:8081/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/JSON' },
                    body: JSON.stringify(values)
                })
                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()
                console.log(data)
            }
            catch (err) {
                console.log('Error fetching Data', err)
            }       
        setStatus('Account Created Successfully') 
    }

    const handleLogin=()=>{
        navigate('/')
    }

        return (
            <>
                <div>
                    <label>Email : </label>
                    <input type="email" placeholder="Enter your mail id" value={regmail} onChange={e => setRegmail(e.target.value)} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" value={regpass} onChange={e => setRegpass(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleCreate} >Create Account</button>
                    <button onClick={handleLogin} >Log In</button>
                </div>
                <p><b>{status}</b></p>
            </>
        )
    }