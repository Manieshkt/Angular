const mysql=require('mysql')
const nodemailer=require('nodemailer')

var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Salary'
})

conn.connect((err)=>{
    if(err){
        console.log("ERROR")
    }
    else{
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'manieshkt@gmail.com',
                pass:'plzv zuxs blll zeoe'
            }
        })
        const datas=conn.query('select * from Salary',(err,res)=>{
            if(err){
                console.log('No data')
            }
            else{
                const mailOptions={
                    from:'manieshkt@gmail.com',
                    to:'maniesh037@gmail.com,badcaptain263@gmail.com,cappy7617@gmail.com',
                    subject:'Mail Using Node.js',
                    text:JSON.stringify(res)
                }
                transporter.sendMail(mailOptions,((err,res)=>{
                    if(err){
                        console.log('Error sending mail')
                    }
                    else{
                        console.log('Mail Sent',res)
                    }
                }))
            }
        })
    }
})