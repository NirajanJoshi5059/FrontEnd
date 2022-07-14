
for (let i = 0; i <= 5; i++) {
    console.log("Hi " + i);
}

// nested for loop
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("*".repeat(j));
    }
    console.log('\n');
}

// Prime number 


for (let num = 1; num <= 100; num++) {
    let n = 0
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            n += 1
        }
    }
    if (n === 0) {
        console.log(`${num} is Prime`);
    }
    else {
        console.log(`${num} is Not Prime`);
    }
}
