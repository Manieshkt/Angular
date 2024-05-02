const greeting=(name,callback)=>{
    const message=`Hello I am ${name}`
    callback(message)
}
const printMessage=(message)=>{
    console.log(message)
}
greeting("Bruce Wayne",printMessage)

let symbol=''
for(let i=1;i<=10;i++){
    symbol+="*"
    console.log(symbol)
}
let num=2
const Push=[]
for (let i=1;i<=10;i++){
    Push.push(num*i)
}
console.log(Push)

const CheckNum=Math.floor(Math.random() * 6+1);
if (CheckNum<=6 && CheckNum>=1 ){
    console.log(CheckNum)
}
else{
    console.log("Error")
}

const fun=async(name,callback)=>{
    const text=await `Hello I am ${name} `
     callback(text)
}
const Print=(text)=>{
    console.log(text)
}
fun("Batman",Print)