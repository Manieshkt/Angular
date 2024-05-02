"use strict";
let num = 10;
let company = 'Amazon';
let completed = true;
let x = false;
console.log("Num : ", num);
console.log(x);
let arr = [1, 2, 3, 4];
console.log(arr);
let person = [20, "Man", true];
console.log(person);
let employee;
employee = [
    [1, "Man"],
    [2, "Brad"],
    [3, "Bruce"]
];
console.log(employee);
let id;
id = [1, 2];
console.log(id);
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
console.log(direction1.up);
let user = {
    id: 1,
    name: "Bruce"
};
console.log(user);
let cid = 1;
let customerID = cid;
customerID = "Wayne";
const add = (x, y) => {
    return (x + y);
};
console.log(add(4, 3));
const log = (message) => {
    console.log(message);
};
log('Hello World !');
const sub = (x, y) => {
    return (x - y);
};
console.log(sub(5, 12));
const Users = {
    id: 1,
    name: "Wayne",
    age: 24
};
console.log(Users);
//Class Constructor
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const Bruce = new Person(1, "Bruce");
const Clark = new Person(2, "Clark");
console.log(Bruce);
console.log(Clark.register());
class Persons {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `Hello This is ${this.name}`;
    }
}
const Batman = new Persons(1, "Bruce Wayne");
const Superman = new Persons(2, "Clark Kent");
class Employee extends Persons {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Dev");
console.log(emp.position);
//Generics
const getArray = (items) => {
    return Array.prototype.concat(items);
};
const numArr = getArray([1, 2, 3, 4, 5]);
const strArr = getArray(["Bruce", "Brad", "Wayne", "Jill"]);
