import { Student, WebMentors } from "./types/main";

console.log("hello TS world");

// !PRIMITIVES

// ? Implicit type
// let word = "hi" // infered type -> string;
// let count = 3 // infered type -> number;
// let myBoolean = true // infered  type -> boolean;

// ?Explicit type
let count: number
count = 3
// count = "hi" //!this wont work since it's not a number

let word: boolean
word = false
// word = "true"

// !ANY type

let canBeWhatever: any

canBeWhatever = 3
canBeWhatever = "sup"
canBeWhatever = true
// using ANY (dont use it without good reason)

// ! CUSTOM types
// ! UNIONS 

let password: string | number
password = "hello"
password = 12345

let myMentors: WebMentors;
// myMentors = "Arjun"//ERROR - typescript wont accept 
myMentors = "Raul"

// !INTERFACES

let moni: Student =  {
    name: "Moni",
    course: "Web-dev",
    courseLength: 5,
}

let sam: Student = {
    name: "Sam",
    course: "Web-dev",
    courseLength: 5,
    hasPet: true    //THIS IS OPTIONAL BC OF "?" in interface
}

// !FUNCTIONS

function multiply(a:number, b:number) {
    return a * b
}
const result = multiply(1, 2);
console.log("result", result);

// ------------------------------------------------------------------------------------------------//

