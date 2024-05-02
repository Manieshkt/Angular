const express=require('express')
const app=express()
const PORT=8081
const conn=require('./db')
const cors=require('cors')

const dbRouter=require('./database')

app.use(cors())
app.use(express.json())
app.use('/api',dbRouter)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})