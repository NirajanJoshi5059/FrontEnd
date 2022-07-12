// type conversion

let num = 6
console.log(num, typeof num)

let num1= String(14)
console.log(num1, typeof num1)

console.log(num, Boolean(num))

num = !num
console.log(num, typeof num)

let address= 6
address=address+ ' Kushma'
console.log(address, typeof address)

// when we subtract value from numeric string it convert into number
num1=num1-2
console.log(num1, typeof num1)

// when we add a numeric value to string it will hold on string
let num2= String(14)
num2= num2+ 5
console.log(num2, typeof num2)

num2= num2+6
console.log(num2, typeof num2)

num2=+num2+6
console.log(num2, typeof num2)

num2=num2-5
console.log(num2, typeof num2)

// Boolean type conversion
let pnum=Boolean(5)
let znum=Boolean(0) 
let nnum=Boolean(-5)
console.log(pnum, typeof pnum)
console.log(znum, typeof znum)
console.log(nnum, typeof nnum)
console.log(Boolean(null))

// ParseInt

let addr="6 Kushma"
console.log(addr, typeof addr)
let addr1= Number('6 Kushma')
console.log(addr1, typeof addr1)

addr=parseInt(addr)
console.log(addr, typeof addr)