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

// // 1. add types to remove the "Parameter 'a' implicitly has an 'any' type." error
// const multiplyTwoNumbers = (a, b) => {
//     a = Number
//     b = Number
//     return a * b;
//   };
  
  
//   // 2. define an interface 'Person' and define the appropriate property types to remove the warnings
//   const sayHello = (person) => {
//     return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
//   };
  
  // !solution
  interface Person{
    name: string,
    age: number,
  }
  
  // 3. Add a return type to a function. This function should return a number. Also, add types to the function parameters.
  // const getAverage = (x, y, z) => {
  //   return (x + y + z) / 3;
  // };
  
  // !solution
//   const getAverage = (x:number, y:number, z:number):number =>  {
//     return (x + y + z) / 3;
//   };


  // 4. define a union to remove the error so that both functional expressions return without errors.
  //!solution
  // string | number //?not sure how to write 
//   const getAverage = (x:number, y:number, z?:string):number | string  =>  {
//     if (z) {
//         const result = x + y + z;
//         return result;
//     }
//         else {
//             const result = x + y;
//             return result
//         }

   
//   };
//   console.log("test", getAverage);
  
  // 5. try to solve the error problem again, this time using a generic instead.
  // const getElementAtIndex = (array, index) => {
  //   return array[index];
  // };
  
  
  // let strArray = ["a", "b", "c"];
  // let numArray = [1, 2, 3];
  
  // const strElement = getElementAtIndex(strArray, 1);
  // const numElement = getElementAtIndex(numArray, 2);
  
  // // 6. Type aliases. The function should accept only string or number. Use a type alias to achieve this.
  // const printID = (id) => {
  //   console.log(`Your ID is ${id}.`);
  // };
  
  // // 7.a) Optional parameters and default parameters. Fix the TypeScript warnings in the function by making z optional and giving y a default value of 0.
  // // b) Modify the function and its signature so that we console.log the result of adding x and y inside the function instead of returning it. Our 'sum' variable should now throw an error.
  // const addNumbers = (x, y, z) => {
  //   return x + y + z;
  // };
  
  // let sum = addNumbers(5, 5);
  
  // // 8. Function Types. Add a type definition for a function that accepts two numbers and returns a number. Use this type definition to type the calculate parameter.
  // const performCalculation = (calculate, x, y) => {
  //   return calculate(x, y);
  // };
  
  // // 9. Interfaces and optional properties. Define an interface to type the parameter. Make middleName optional, as it is not always provided.
  // const printFullName = (user) => {
  //   return `${user.firstName} ${user.middleName} ${user.lastName}`;
  // };
  
  // // 10.a) Add Typescript to ensure that an error is thrown if a string is assigned to age.
  
  // let age = 30;
  // age = "thirty";
  
  // // 10.b) Add Typescript to ensure that an error is thrown when the wrong type of value is added to the `numbers` array.
  
  // let numbers = [];
  
  // numbers.push(1);
  // numbers.push("two");
  
  // // 10.c) Add some type safety to the code to prevent a number from being added to the students Set.
  
  // const students = new Set();
  
  // students.add("Moni");
  // students.add("Sam");
  // students.add("Emma");
  // students.add("Josh");
  
  // students.add(5);
  
  // // 11. Create a type or interface to ensure that all objects in the cohort array have a name and id.
  
  // let cohort = [
  //   { name: "Moni", id: 1 },
  //   { name: "Sam", id: 2 },
  //   { name: "Emma", id: 3 },
  //   { name: "Hassan", id: 4 },
  // ];
  
  // cohort.push({ name: "Josh" });
  
  // // 12.a) Ensure that calculateArea function can only accept a Rectangle or Circle as a parameter.
  // // b) Now create a modified version of the function above that uses a type guard to distinguish between the shapes.
  
  // interface Rectangle {
  //   width: number;
  //   height: number;
  // }
  // interface Circle {
  //   radius: number;
  // }
  // interface Triangle {
  //   sides: number;
  // }
  
  // type Shapes = Rectangle | Circle;
  
  // function calculateArea(shape: any) {
  //   // implementation...
  // }
  
  // calculateArea({ sides: 4 });
  
  // // 13. Suppose we are building a system for a school. We need to handle information about both teachers and students. Refactor the code using interfaces instead of types, using inheritance to share the common properties.
  
  // type PersonType = {
  //   name: string;
  //   age: number;
  //   id: string;
  // };
  
  // type StudentType = PersonType & {
  //   grade: number;
  //   parentName: string;
  // };
  
  // type TeacherType = PersonType & {
  //   subject: string;
  //   yearsOfExperience: number;
  // };
  
  // function getPersonInfo(person: PersonType): string {
  //   return `${person.name} is ${person.age} years old.`;
  // }
  
  // function getStudentInfo(student: StudentType): string {
  //   return `${getPersonInfo(student)} They are in grade ${
  //     student.grade
  //   } and their parent's name is ${student.parentName}.`;
  // }
  
  // function getTeacherInfo(teacher: TeacherType): string {
  //   return `${getPersonInfo(teacher)} They teach ${teacher.subject} and have ${
  //     teacher.yearsOfExperience
  //   } years of teaching experience.`;
  // }
  
  // // 14.a) In the JavaScript function 'receiveSomethingGiveItBack', any type of input can be passed, and it is returned as it is. This can potentially lead to type errors in our code. Use function overloading in TypeScript to ensure that no errors occur when we reassign 'thisWorks', but Typscript flags our assignment of 'thisFails' as problematic.
  
  // function primitiveProcessor(primitive) {
  //   return primitive;
  // }
  
  // let thisWorks;
  // let thisFails;
  // thisWorks = primitiveProcessor("hello");
  // thisWorks = primitiveProcessor(1);
  // thisWorks = primitiveProcessor(true);
  // thisFails = primitiveProcessor({ name: "Josh" });
  
  // //b) Use generics to make the following code type-safe.
  
  // const anythingProcessor = (anything) => {
  //   return anything;
  // };
  
  // thisWorks = anythingProcessor("hello");
  // thisWorks = anythingProcessor([1, 2, 3]);
  // thisWorks = anythingProcessor({ name: "Josh" });
  
  // // 15. (Hard task) Creating, managing and assigning dynamic data structures with TS, featuring closures
  
  // // Fix this.
  
  // const createCohort = (cohortName: string) => {
  //   const cohorts = {};
  
  //   const add = (id: string, value: string) => {
  //     if (!cohorts[cohortName]) {
  //       cohorts[cohortName] = {};
  //     }
  //     cohorts[cohortName][id] = value;
  //   };
  
  //   const remove = (id: string) => {
  //     delete cohorts[cohortName][id];
  //   };
  
  //   const get = (id: string) => {
  //     return cohorts[cohortName][id];
  //   };
  
  //   return {
  //     cohorts,
  //     add,
  //     remove,
  //     get,
  //   };
  // };
  
  // const honeyBadgers = createCohort("honeyBadgers");
  // honeyBadgers.add("premiumStudent", "Moni");
  // honeyBadgers.add("silverMedal", "Sam");
  // honeyBadgers.add("hasDog", "Emma");
  // honeyBadgers.add("attendsCourse", "Josh");
  
  // let bestStudent = honeyBadgers.get("premiumStudent");
  
  // console.log(bestStudent);
  