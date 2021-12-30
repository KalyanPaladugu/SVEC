"use strict"

// const name="Vamcy";
// var age=20;

// if(age>18){
//         const name="Vamcy A";
//     //  name="DF:"
//         console.log(name);
// }

// console.log(name);


// Objects

// let employee={
//     name:"Govardan",
//     designation:"Junior Software Developer",
//     salary:"3.6LPA",
//     mobile:9876544321
// }



// console.log(employee)

// Array

// let employees=["Syam","Raja","Akhila"]
// console.log(employees[1])



// Alerts

// alert("Registration is completed successfully")

// let number1=prompt("Enter number1")
// console.log(number1)

// confirm("Are you sure to exit?")

// console statements

// console.log("Welocme");
// console.info("For information");
// console.warn("Check the code once")
// console.error("name is not defined")

// Spread Operator

// let external_marks=[23,33,54,44,32,33]
// let internal_marks=[12,3,14,16,17]

// let results=[23,34,external_marks]
// let final=[23,445,556,...external_marks,...internal_marks]

// console.log(results)
// console.log(final)

// Rest Parameter 

// function addition(x,y,...remainData){
     
//     console.log(x);
//     console.log(y);
//     console.log(remainData);
//     console.log(typeof(remainData))
// }

// console.log(addition(2,3,242,423434,23423,424,234,"wewe"))


// Destructuring of Array 

// let employees=["Sunil","Gopinath","Abdul","Rahaman"]

// // let name1=employees[0];
// // let name2=employees[1];

// let [sunil_21,gopinath,...data]=employees

// console.log(sunil_21)
// console.log(data)

// Destructuring of Object 

// let employee={
//         uname:"Govardan",
//         designation:"Junior Software Developer",
//         salary:"3.6LPA",
//         mobile:9876544321
//     }

//     let { uname,designation,...remainList}=employee;
//     console.log(uname);
//     console.log(designation);
//     console.log(remainList)

    
// Functions

// Anonymous function

// let demo= function (x,y){
//     return x+y
// }

// (function(){
//  console.log( "Welcome") 
//  }) ()

// setTimeout(function(){
//     console.log("Welcome")
// },3000)

// // console.log(demo(3,4))


// Arrow function 

// let demo=  (x,y) => {
//     return x*y
// }
// console.log(demo(3,4))

let employees=["Dhanunjay","Pavan","Harika","Vignesh"]

// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }


// for-in 

// for(let i in employees){
//     console.log(i)
// }

// for-of 

// for(let i of employees){
//     console.log(i)
// }

// forEach()

// employees.forEach(function(element,index){
//     console.log(element+"  OK")
// })



// map function 

let result= employees.map((element,index)=>{
    return element+" K"+ index
})
// console.log(employees)
console.log(result)








    

