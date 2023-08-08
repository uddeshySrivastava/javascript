# Variables

- 5 vedios on youtube daily
 - https://www.youtube.com/watch?v=Q4p8vRQX8uY&pp=ygUUamF2YXNjcmlwdCB2YXJpYWJsZSA%3D
 -https://www.youtube.com/watch?v=--Vh17ocC_s&pp=ygUUamF2YXNjcmlwdCB2YXJpYWJsZSA%3D
 -https://www.youtube.com/watch?v=XIOLqoPHCJ4&pp=ygUiamF2YXNjcmlwdCB2YXJpYWJsZSBjb2RlIGV2b2x1dGlvbg%3D%3D
 -https://www.youtube.com/watch?v=yY0bKZNYmJs&pp=ygUiamF2YXNjcmlwdCB2YXJpYWJsZSBjb2RlIGV2b2x1dGlvbg%3D%3D
 -https://www.youtube.com/watch?v=DHjqpvDnNGE&pp=ygUiamF2YXNjcmlwdCB2YXJpYWJsZSBjb2RlIGV2b2x1dGlvbg%3D%3D
 -https://www.youtube.com/watch?v=9WIJQDvt4Us&pp=ygUeamF2YXNjcmlwdCB2YXJpYWJsZSBzaW1wbGlmaWVk


 # Vedio 1 
 ## variables 
 - variables is a container that stores value.
 - the value of a javascript variables can be change during the exicution of a Program.
 ## difference between Let , Var , Const.
 -  var are globally scoped but let and const are blocked scoped.
 - var can be update and re-declared with in the scope.
 - let can be update but cann't re-declared.
 - const can neither be update nor be re-decleared.
 - const must be initlized during decleration  

 # Javascript 
 - scripting language
 - dynamically type
 -  case sensetive language
 -  non blocking language ( put process on wating )
 -  Single threaded       ()
 - Interpreter language   (run line wise)








 ## Javascript variables questions
 - What is a variable in JavaScript?
 ans:-  variable is a container to store data

- How do you declare a variable in JavaScript?
ans  let , const , var

- What are the different data types available in JavaScript for variables?
ans:-   bolean ,  number , string , int , symbol , nul , undefined

- What is the difference between var, let, and const in variable declarations?
ans:-  var is a globally scope variable means we can decleared anywhere in scope. let and const are blocked scoped

- Can you reassign a value to a constant variable in JavaScript? Why or why not?
ans:-  we cann't re-assign a value in  const b,coz its constant

- Explain the concept of hoisting in relation to JavaScript variables.
ans:  hoisting is a default behaiver of JS which decleadre variable to the top.

- How do you check the type of a variable in JavaScript?
ans: typeof()

- What is the difference between == and === when comparing variables?
ans:  == isequal type but === is strict type.

-How can you convert a string to a number in JavaScript?
ans:  parsInt

- What are global variables and how are they declared in JavaScript?
ans: variable which are inside the function is local and outside the function is globel

-Explain the scope chain in JavaScript and how it affects variable access.
ans: global scope , function scope , block scope

-What is the difference between local and global variables?
ans: variable which are inside the function is local and outside the function is globel

- How can you prevent a variable from being modified in JavaScript?
ans: const

- What is the purpose of the let and const block-scoped variables?
ans:  let value can be re-assign but const is constant

- Can you use spaces in variable names in JavaScript?
ans:  yes

- What happens if you declare a variable without using any keyword (var, let, const)?
ans: it through an error

- How do you define and use a constant object in JavaScript?
ans:  const abc = {key : "value"}

- How do you create a variable as a reference to another variable in JavaScript?
ans:  const user = "abhay"
      const userName = user

- What is the significance of the this keyword in relation to variables within objects?
ans: 

- How can you delete a variable in JavaScript?
ans:  with (delete) 
       const user = "abhay"
       const Name = "vaibhav"
       delete name

- How do you check if a variable is null or undefined?
ans:   using the strict (===) equality

- Explain the purpose and usage of the ternary operator in JavaScript variables.
ans:  tanary operator (if else) isa conditional  operator 
       use to check the value if its true or false

-What is variable destructuring in JavaScript? Provide an example.
ans: const {} = destructure

- How do you find the length of a string stored in a variable in JavaScript?
ans:  will check the length of the string. (length)

- How can you concatenate two or more variables into a single string in JavaScript?
ans: `this is first ${variable and this is second ${variable}`

- What is the difference between let and var regarding function scope?
ans: var in function scope we can declear anywhere in function but let we can decleared in function block

- How do you declare a variable that will not be affected by the strict mode in JavaScript?
ans: 


- How can you declare a variable that is accessible throughout the entire application in JavaScript?
ans: wecan declare anywhere in the global scope.

- How do you declare and use a variable as a function in JavaScript?
Explain the concept of closures and their relation to variables in JavaScript.
ans  const decleared = ()=>{}

-  How do you check if a variable is an array in JavaScript?
ans:  array.isarray

- How do you declare a variable that holds an empty object in JavaScript?
What is variable shadowing in JavaScript and - how does it work?
ans:   const obj = {}

- How do you convert a variable to a Boolean value in JavaScript?
ans:  const value = true

- How do you swap the values of two variables without using a temporary variable?
ans:  let a = 5,
      let b = 6
      a = a+b
      b = b-a

- How can you convert a variable from lowercase to uppercase in JavaScript?
ans    by using  .touppercase()

- Explain the differences between declaring variables with var, let, and const inside loops.
ans  for (let i=0 ; i=>5 ; i++){
       clg(i)
}    as same we will declear  var and const

- How do you round a number stored in a variable to a specific number of decimal places in JavaScript?
ans:  
      

- What is the difference between null, undefined, and NaN in JavaScript variables?
ans  variable declear but its null
     vaiable is undefine 
     NaN not a number

- How can you check if a variable is a function in JavaScript?
ans:  const fun (){}

- How do you use the typeof operator to check the type of a variable?
Explain the concept of variable scope in JavaScript.
ans  const a = true
      clg(typeof a)

- How do you clone a variable containing an array or an object in JavaScript?
ans: 

- How can you check if a variable is an object in JavaScript?
ans:  const a = {key : value}
      clg(isobject (a))

- How do you declare a variable with a default value in JavaScript if the variable is undefined?
ans   console.log(5)
     var a = 
- What are the best practices for naming variables in JavaScript?
ans  use meaningful name and camelcase

- How do you check if a variable is an empty object in JavaScript?
ans   clg (isemptyobject(a))

- How can you use the const keyword for objects to allow modifying their properties?
ans  const obj = {
       key : "value"
}
obj.key= "yash"

- What happens if you declare a variable with the same name inside a block using let or const?
ans: varible will be declear

- How do you convert a variable from a string to an array in JavaScript?
Explain the differences between declaring variables with var, let, and const in global scope.
ans: const csvToArray = csv.split(',')
       ["hello , this , is , me" ]

- How do you handle the situation when a variable is not defined (undefined) in JavaScript?
ans will define a variable

- How can you remove a specific item from an array stored in a variable in JavaScript?
ans:   splice and slice

- What is the difference between declaring variables inside and outside a function in JavaScript?
ans:  out of the function is globel and inside of the funcrion is local.

- How do you find the index of a specific element in an array stored in a variable?
ans clg.table()

- How do you declare a variable that holds a regular expression in JavaScript?
ans:


- How can you convert a variable to a string in JavaScript?
ans  with the help of (" ")

- What is the purpose of the arguments object in relation to function variables?
ans:   console.log(argument)
 
- How do you check if a variable is a primitive data type in JavaScript?
ans:  

- How can you concatenate two or more arrays stored in variables in JavaScript?
ans: comsole.log("this is me" + uddesh) (`this is me ${uddesh}`)

- How do you declare a variable that holds an immediately-invoked function expression (IIFE) in JavaScript?
ans
What is the difference between declaring variables in the global scope and the function scope in JavaScript?
- How do you check if a variable is a number in JavaScript?
- How can you convert a variable to an integer in JavaScript?
Explain the concept of variable declaration without initialization in JavaScript.
- How do you add a new element to the beginning and end of an array stored in a variable?
What is the purpose of the new keyword in relation to object variables in JavaScript?
- How can you iterate over the properties of an object stored in a variable?
- How do you check if a variable is a promise in JavaScript?
- How can you check if a variable is an empty string in JavaScript?
What is the difference between declaring variables inside and outside a loop in JavaScript?
- How do you declare a variable that holds a template literal in JavaScript?
- How can you convert a variable to a floating-point number in JavaScript?
- How do you handle the situation when a variable is declared but not defined (uninitialized) in JavaScript?
What is the difference between using the let and const keywords for loop counters in JavaScript?
- How do you check if a variable is an arrow function in JavaScript?
- How can you find the maximum and minimum values in an array stored in a variable?
What is the purpose of the Symbol data type in relation to variables in JavaScript?
- How do you declare a variable with a rest parameter in JavaScript?
- How can you check if a variable is a generator function in JavaScript?
What is the difference between declaring variables inside and outside a try-catch block in JavaScript?
- How do you declare a variable that holds a set of unique values in JavaScript?
- How can you convert a variable to a date object in JavaScript?
- How do you handle the situation when a variable needs to be used across different script files in JavaScript?
What is the difference between declaring variables with var, let, and const inside object methods in JavaScript?
- How do you declare a variable that holds a map data structure in JavaScript?
- How can you check if a variable is a web worker in JavaScript?
What is the difference between declaring variables inside and outside a switch statement in JavaScript?
- How do you declare a variable that holds a class in JavaScript?
- How can you convert a variable to a JSON string in JavaScript?
- How do you handle the situation when a variable is used before it is declared in JavaScript?
What is the difference between declaring variables with var, let, and const inside a closure in JavaScript?
- How do you declare a variable that holds a Promise object in JavaScript?
- How can you check if a variable is an async function in JavaScript?
What is the difference between declaring variables inside and outside a try-catch-finally block in JavaScript?
- How do you declare a variable that holds a Symbol.iterator function in JavaScript?
- How can you convert a variable to an ArrayBuffer in JavaScript?
- How do you handle the situation when a variable is declared but never used in JavaScript?
What is the difference between declaring variables with var, let, and const in strict mode in JavaScript?
- How do you declare a variable that holds a BigInt value in JavaScript?