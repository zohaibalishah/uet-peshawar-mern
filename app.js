const array1 = ["car", "apple", 1, "7676"];

// array1.splice(1,2)
// console.log(array1)

// const copyarray=[...array1]
// console.log("copyarray",copyarray)

// array1.push("ali")
// array1.pop()
// console.log(array1)

// map ,forEach
// for

// for(let i=0;i<array1.length;i++){
//     console.log(array1[i])
// }
// console.log("******")
// array1.map((i)=>{
// console.log(i)
// })

// array1.forEach((i)=>{
//     console.log(i)
//     })

const obj = {
  name: "ali",
  age: 29,
  phone: 127366156,
};
// obj["address"]="peshawar"
// obj.type="admin"
// delete obj["phone"]
// delete obj.age

// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.phone)

const students = [10, 20, 30, 50];

// const result=students.filter((i) => {
//  return i>10
// });

// const students = [
//   { id: 1, name: "ali", age: 22, address: "peshawar" },
//   { id: 2, name: "kamran", age: 22, address: "mardan" },
//   { id: 3, name: "a", age: 22, address: "peshawar" },
// ];

// students.map((row)=>{
//     students.includes(row.id)

// })
// students.

// const index=students.findIndex((row)=>row.name=='ali')
// students.splice(index,1)
// console.log(students)

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// students.map((i,index) => {
//     console.log(index)
//   console.log(i.name);
//   console.log(i.age);
//   console.log(i.address);
// });

// module.export
// export
// import

const {sum,sub} = require("./libraries");
// import {sum,sub} from "./libraries" 
sum(10, 20);
sub(10, 20);

