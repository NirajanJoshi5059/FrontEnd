let num1=5

// check the number is even or odd

if (num1%2 === 0){
    document.write("Even Number<br>");
}
else{
    document.write("Odd Number<br>");
}

// check the numebr is positive, negative or zero
let num=-5
if(num>0){
    document.write("Positive Number<br>");
}
else if(num<0){
    document.write("Negative Number<br>")
}
else if(num === 0)
    document.write("Zero<br>");

// Positive and even number

num=5
if(num>0 && num%2 === 0){
    document.write("Positive with Even Number<br>")
}
else
    document.write("Number is either Negative or Odd<br>")