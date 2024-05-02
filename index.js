const arr=[23,24,4,34,32,43,2,13,21]
const max=arr.reduce((acc,curr)=>Math.max(acc,curr))
console.log(max)

const sort=arr.sort((a,b)=>a-b)
console.log(sort)

const newarr=[]
for (let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        newarr.push("fizz")
    }
    else{
        newarr.push("buzz")
    }
}
console.log(newarr)

const sum=(a,b)=>{
    return a+b
}
console.log(sum(5,5))


// let apiURL='https://jsonplaceholder.typicode.com/todos'
// let fetchData=fetch(apiURL)

// const get=async()=>{
//  try{
//     const res=await fetch(apiURL)
//     if(!res.ok){
//         throw new Error("Error fetching Data")
//     }
//     const data=await res.json()
//     console.log(data)
//  }  
//  catch{
//     console.log("Error")
//  } 
// }
// get()

const Name="Maniesh"
const rev=Name.split('').reduce((acc,curr)=>(curr+acc),'')
console.log(rev)

const reverse=arr.reduce((acc,curr)=>[curr,...acc],[])
console.log(reverse)

const num=[1,32,3,12,31,3,231,2,2,3,1,54]
const set=new Set(num)
console.log(set)

const NewNum=new Set()
NewNum.add(20)
NewNum.add(40)
NewNum.add(60)
console.log(NewNum)

const Person={
    name:"Bruce",
    age:24,
    city:"Gotham"
}
const {name,age,city}=Person
Person.city="Can"
console.log(Person.city)

const ADD=[12,3,3,4]
let Sum=0
Addarr=[]
for(let i=0;i<ADD.length;i++){
    Sum+=ADD[i]
    Addarr.push(Sum)
}
console.log(Addarr)

const greet=(name)=>{
    if(name==="Bruce Wayne"){
        console.log(`Hi I am ${name}`)
    }
    else{
        console.log("No name is declared")
    }
}
greet("Bruce Wayne")

const factorialArr=[]
let factorial=1
for (let i=1;i<=5;i++){
    factorial*=i
    factorialArr.push(factorial)
}
console.log("Factorail",factorialArr)

const greeting = (name, callback) => {
    const message = `Hello, ${name}!`
    callback(message);
}
const printMessage = (message) => {
    console.log(message);
}
greeting("Alice", printMessage)
