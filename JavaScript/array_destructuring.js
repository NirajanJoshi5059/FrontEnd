let data=[7,14,10,9,15,17,25,26]
let name=["Nischal", "Nirajan",'Saurav','Sujan','Jayanta']
// let a=5;
// let b=6;
// [a,b]=[b,a]
let [a,b,c,d,e]=name
console.log(a, b)
// console.log(a,b)

let [roll1, roll2,, rolln]=data
console.log(roll1, roll2, rolln)


let dat="My name is Nirajan Joshi".split(" ")
let[w,x,, ...z]=dat
console.log(w, x, z)


// dat="My name is Nirajan Joshi".split(" ")
// [m, n, , o]=dat
// console.log(m, n , o)