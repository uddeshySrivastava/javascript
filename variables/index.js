// var person = "uddesh"
// person = "yash"

// console.log(person);


// block scope 

let number = 56
// number = 85

// console.log(number);


let b = "akash"

{
    let b = "yash"
    const c= number
    console.log(b);
}

// console.log(b)  
   
// const harry = 25;
// harry = 35  //conn't be change b,coz its constant. will show errer
// console.log(harry);     

// function scope block scope

function modjs(animal) {
    if (animal) {
        let bird = "parrot"
        const dog = "pamerion"
        console.log("the bird is "+ bird +"the dog is "+dog);
    }
}
modjs(true)


function modjs(animal) {
    if (animal) {
        var bird = "parrot"
        var dog = "pamerion"
    }
    console.log("the bird is "+ bird +"the dog is "+dog);
}
modjs(true)

// variable can store data and transfer data 

let alpha = 1
 alpha = 2
 alpha = 3
 alpha = "4"
 alpha = "zero"
 console.log(alpha);


 let person = "akash"
 let car = "maruti"
 let mobile = alpha 
 mobile  = alpha
 alpha = mobile
 let table = "wooden"
console.log(alpha);


let num = 56
num =85
console.log(num);

// read only memory
const legal = false
const entry = legal
console.log(entry);

const obj = {
    fname : "abhay",
    lname : "soni"
}

obj.fname = "yash"