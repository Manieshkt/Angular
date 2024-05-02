const first=[1,2,20,3,4,5]
const arr='Bruce Wayne'

const Sum=first.reduce((acc,curr)=>acc+curr,0)
console.log(Sum)

let mul=1
const empty=[]
for(let i=1;i<=first.length;i++){
    mul*=i
    empty.push(mul)
}
console.log(empty)

const MaxNumber=first.reduce((acc,curr)=>Math.max(acc,curr))
console.log(MaxNumber)

const reverse=first.reduce((acc,curr)=>[curr,...acc],[])
console.log(reverse)

const reverseString=arr.split('').reduce((acc,curr)=>[curr,...acc],'').join('')
console.log(reverseString)

const one=(callback)=>{
    const text="Hello this is Bruce Wayne"
    callback(text)
}
const message=(text)=>{
    console.log(text)
}
one(message)

const fetchData=async()=>{
    try{
       const response=await fetch('https://jsonplaceholder.typicode.com/users')
       if (! response.ok){
        throw new Error("Response not ok")
       }
       else{
        const data=await response.json()
        console.log(data)
       }
    }
    catch(error){
        console.log("Error fetching Data" + error)
    }
}
fetchData()