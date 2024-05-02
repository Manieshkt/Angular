const nodemailer=require('nodemailer')
const path=require('path')
const fs=require('fs')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'manieshkt@gmail.com',
        pass:'plzv zuxs blll zeoe'
    }
})

const content=path.join(__dirname,'index.txt')
fs.readFile(content,'utf-8',(err,data)=>{
    if(err){
        console.log("Error Sending Mail")
    }
    else{
        const mailOptions={
            from:'manieshkt@gmail.com',
            to:'maniesh037@gmail.com,badcaptain263@gmail.com,cappy7617@gmail.com',
            subject:'Sending Email using Node.js',
            text:data
        }
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log("Error Sending Email ",err)
            }
            else{
                console.log("Email Sent")
            }
        })
    }
})