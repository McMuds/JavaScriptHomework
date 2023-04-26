//E6 imports
// import {stripEmptySpace} fro ".....";
//CommonJS - what node defaults to
// const { stripEmptySpace} = require('....');


//Valid: Function is hoisted
myFunc('Keith')

//Not Valid: Function is not hoisted
// mySecondFunc('Claire')

function myFunc(name) {
  return `Hello, ${name}`
}

const mySecondFunc = function (name) {
  return `Hello, ${name}`
}

const arrFunc = () =>  {
  return 2*2;
}

const shortFunction = () => 2*2;

const thirdFunc = (num) => 2 * num;
//same as
const fourthFunc = num => 2 * num;

console.log(shortFunction())

const myObj = {
  userName: "Tar",
  email: "lskdjf@aol.com",
  //doesn't work, because fat arrow doesn't have access to this
  // printDetails: () => {
  //   console.log(`${this.userName}`)
  // }
  //it can refer to myObj instead
  // printDetails: () => {
  //   console.log(`${myObj.userName}`)
  // }
  //or try this:
  printDetails: function () {
    console.log(`${myObj.userName}`)
  }
}

myObj.printDetails()

const numbers = [2,3,4,5,345];

const doubledNumbers = numbers.map ((num) => num * 2)
const doubledNumbers2 = numbers.map(function (num){
  return num * 2;
})

//shorthand
const name = "Ray"
const user = {
  name
}
console.log(user)

// destructuring
const user2 = {
  myName: "ray",
  age: 27,
  isGuitarPlayer: false
}

const {myName, isGuitarPlayer } = user2

user2.myName = "john"
delete user2.age;
console.log(`here: ${myName} `) //ray


//spreading
const myNewObj = {
  ...user2,
  ...myObj,
  nums: [3.4, 56, 3]
}
console.log(myNewObj)

const firstArray = [4, 5, 6]
const secondArray = [7, 8, 9]

const totalArray = [...firstArray, ...secondArray]
const totalArray2 = [firstArray, secondArray]

console.log(totalArray)
console.log(totalArray2)