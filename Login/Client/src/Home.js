import React, { useState , useEffect} from "react";

export const Home=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const token=localStorage.getItem('token')
                const response=await fetch('http://localhost:8081/api/Home',{
                    method:'GET',
                    headers:{'Content-Type':'application/JSON','Authorization':`Bearer ${token}`},
                })
                if(! response.ok){
                    throw new Error("Error Fetching Data")
                }
                else{
                    const data=await response.json()
                    console.log("Data received from server:", data)
                    setUsers(data)
                }
            }
            catch(err){
                console.log("Error Fetching Data",err)
            }
        }
        fetchData()
    },[])
    return(
        <>
            <h1>Welcome</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
            {users.map((data,index)=><tr key={index} >
                <td>{data.ID}</td>
                <td>{data.Email}</td>
            </tr>)}
            </table>
        </>
    )
}