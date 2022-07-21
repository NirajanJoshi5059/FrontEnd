// No parameter no argument
function add2Num(){
    let a=5;
    let b=6;
    document.write(`The sum of ${a} and ${b} is ${a+b}<br>`);
}

add2Num();


// parameter and argument
function add(a, b){
    let result=a+b;
    document.write(`The sum of ${a} and ${b} is ${result}<br>`);
}
add(7, 595);


// return type function
function mult(a, b){
    let result=a*b;
    return result;
}
let res=mult(7, 59);
document.write(`The multiplication is ${res}`);