const express = require('express')
const mysql=require('mysql')

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Login'
})

conn.connect((err)=>{
    if(err){
        console.log("Error Connecting databse",err)
    }
    else{
        console.log("Database Connected Successfully !")
    }
})

module.exports=conn