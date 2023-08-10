const object = { key: "value" }
console.log(object);


const array = [5, 6, 5, 4, 6, 5, 6, 5, 6, 5, 6, 5]
const fil = array.filter(array => array == 6)

console.log(fil);


let obj = {
  person: "abhay",
  age: 23,
  roll: 45

}
obj.age = 56
console.log(obj);


const houseNumber = Symbol("key1")

const detail = {
  user: "uddesh",
  contact: 9958481996,
  email: "uddeshysrivastava@gmail.com",
  address: "dwarka delhi",
  [houseNumber]: 586,
  pincode: 110075
}

console.log(detail);


const fet = {
  id: 1,
  Name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  lat: "-37.3159",
  lng: "81.1496",
  phone: "1-770-736-8031 x56442",
  catchPhrase: "Multi-layered client-server neural-net",
  bs: "harness real-time e-markets"
}

console.log(fet);
console.log(fet.street);
console.log(fet["zipcode"])
console.log(fet["username"]);
// Object.freeze(fet)  //with this we cann;t change the value inside



function leno() {

  let fun = {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    lat: "-38.2386",
    lng: "57.2232",
    phone: "024-648-3804",
    website: "ambrose.net",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }
 console.log(fun.suite);
}
leno()






function fake() {

  const lack = {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    lat: "-38.2386",
    lng: "57.2232",
    phone: "024-648-3804",
    website: "ambrose.net",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }
  // console.log(lack["email"]);

}
fake()


function peraddr() {

  const addres = {
    id: 9,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "",
    lat: "-38.2386",
    lng: "57.2232",
    phone: "024-648-3804",
    website: "ambrose.net",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }
  addres["zipcode"] = "110075"
  delete addres.suite
  console.log(addres);
}
peraddr()





const gra = [
  {
    person: "vaibhav",
    age: 20,
    mobile: 981446464,
    address: " street 235",
    gen: "male"
  },
  {
    person: "arti",
    age: 23,
    mobile: 9881685115,
    address: " street 856",
    gen: "female"
  }, 
          {
    person: "sukanya",
    age: 28,
    mobile: 986635548,
    address: " street 3656",
    gen: "female"
  },  
          {
    person: "ankur    ",
    age: 27,
    mobile: 9863486752,
    address: " street 456",
    gen: "male"
  },
          {
    person: "abhishek",
    age: 32,
    mobile: 981424582,
    address: " street 02136",
    gen: "male"
  },
          {
    person: "aashi",
    age: 29,
    mobile: 981454166,
    address: " street 84162",
    gen: "female"
  },
          {
    person: "ananya",
    age: 36,
    mobile: 981458792,
    address: " street 1256",
    gen: "female"
  },
          {
    person: "samriddhi",
    age: 30,
    mobile: 923185555,
    address: " street 235441",
    gen: "female"
  },
  
]

console.log(gra[2].person);
console.log(gra[4].mobile);
console.log(gra[3]["age"]);


const old_person = [{
  person : "shyam",
  age : 56,
  address: "noida street 548",
  house :  {
    person : "abhay",
    age : 57,
    address : "lucknow 856" 
     }
}
]
console.log(old_person[0].house.age);



function peraddr() {

  let addres = {
    id: 22,
    name: "rafeek",
    name2:{
      hamza : {
        age : 27,
        city : "dubai",
        sonOf : "rafeek"
      }
    } ,
    username: "rafeek.khan",
    email: "xyz@gmail.com",
    street: " Turnpike",
    suite: "sutir 546",
    city: "africa",
    zipcode: "",
    lat: "-38.56425",
    lng: "57.856145",
    phone: "024-648-87946",
    website: "ambrose.net",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
  }

  const {name2} = addres
  console.log(name2.hamza.sonOf);
  // console.log(addres);
  // console.log(addres.name2.hamza.city);
}
peraddr()


function car () {
  const cars = {
    tyre : 4,
    stayring : 1,
    seat : 5,
    miror : 2,
    winddow : {
      automati : 2,
      manual : 2
    }
  }
  const {tyre }= cars
  console.log(tyre);
  // console.log(cars.winddow.automati);
}
car()

