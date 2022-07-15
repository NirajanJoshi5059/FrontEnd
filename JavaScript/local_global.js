// global variable
let name="Nirajan"

function greet(user){7
    // local variable
    let age=25
    console.log(`Welcome to JavaScript Mr. ${user}`)
    console.log(name)
}

greet(name)
// console.log(age)

// Default value

function mul(num1, num2, num3=1){
    return num1*num2*num3;
}

let result=mul(5, 9, 189)
console.log(result)

result=mul(152,698)
console.log(result)