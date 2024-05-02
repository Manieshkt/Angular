let num: number = 10;
let company: string = 'Amazon';
let completed: boolean = true
let x: any = false
console.log("Num : ", num)
console.log(x)

let arr: number[] = [1, 2, 3, 4]
console.log(arr)

let person: [number, string, boolean] = [20, "Man", true]
console.log(person)

let employee: [number, string][]
employee = [
    [1, "Man"],
    [2, "Brad"],
    [3, "Bruce"]
]
console.log(employee)

let id: number | string | boolean | any[]
id = [1, 2]
console.log(id)

enum direction1 {
    up,
    down,
    left,
    right
}
console.log(direction1.up)

type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: "Bruce"
}
console.log(user)

let cid: any = 1
let customerID = cid as string
customerID = "Wayne"

const add = (x: number, y: number): number => {
    return (x + y)
}
console.log(add(4, 3))

const log = (message: string | number): void => {
    console.log(message)
}
log('Hello World !')


//Interface
interface MathFunc {
    (x: number, y: number): number
}
const sub: MathFunc = (x: number, y: number): number => {
    return (x - y)
}
console.log(sub(5, 12))


interface UserInterface {
    id: number
    name: string
    age: number
}
const Users: UserInterface = {
    id: 1,
    name: "Wayne",
    age: 24
}
console.log(Users)

//Class Constructor
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id,
            this.name = name
    }
    register() {
        return `${this.name} is registered`
    }
}
const Bruce = new Person(1, "Bruce")
const Clark = new Person(2, "Clark")
console.log(Bruce)
console.log(Clark.register())

//Interface in Class
interface PersonInterface {
    id: number
    name: string
    register(): string
}
class Persons implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(){
        return `Hello This is ${this.name}`
    }
}
const Batman=new Persons(1,"Bruce Wayne")
const Superman=new Persons(2,"Clark Kent")

class Employee extends Persons{
    position:string

    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position=position
    }
}
const emp=new Employee(3,"Shawn","Dev")
console.log(emp.position)


//Generics
const getArray=<T>(items:T[]):T[]=>{
    return Array.prototype.concat(items)
}
const numArr=getArray<number>([1,2,3,4,5])
const strArr=getArray<string>(["Bruce","Brad","Wayne","Jill"])
