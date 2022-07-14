let num =0

while (num <=5){
    console.log(`Hi ${num}`);
    num++;
}
console.log(num)

do{
    console.log(`Hello ${num}`);
    num++;

}while(num<5)
console.log(`dowhile ${num}`);

let num1=9847620206
while(num1>0){
    console.log(num1%10);
    num1=parseInt(num1/10);
}

// reverse

let phone=9844375899
let reve=0, rem
while(phone > 0){
    rem=phone%10
    phone=parseInt(phone/10)
    reve=reve*10+rem   
}
console.log(reve);