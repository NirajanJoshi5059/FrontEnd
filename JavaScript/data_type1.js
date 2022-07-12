// Data Type
// 1. Primitive Data Type
// 2. Object

// Primitive Data Type
// Number, String, Boolean, Null, Undefined, Symbol

// Number
let name="Nirajan"
let age=25
let hexcolor= 0xf
let octnum= 0o16
let binnum=0b101011
let totalcost=10563.56

console.log(name)
console.log(age)
console.log(hexcolor)
console.log(octnum)
console.log(binnum)
console.log(binnum+hexcolor)
console.log(totalcost)

console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE * 2)

let price=1_00_00_000
console.log(price)

// Bigint
// n in last of digit represent bigint
let num1=98476202069844375899n
console.log(num1)
// console.log(num1+2)
console.log(num1+2n)


// typeof

console.log(typeof hexcolor)
console.log(typeof num1)
console.log(typeof totalcost)