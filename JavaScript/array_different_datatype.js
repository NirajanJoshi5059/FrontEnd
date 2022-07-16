let data=['Nirajan', 25, {roll:14}, function(){console.log("Hello World")}]

console.log(data)
data[3]()

let data1=[function guest(){
    return "Hello JavaScript"
}, 
function add(num1, num2){
    return num1+num2
}]

let result=data1[0]()
console.log(result)
result=data1[1](5,6)
console.log(result)