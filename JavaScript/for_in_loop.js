let employee={
    name:"Nirajan",
    p_lang:'Python',
    expr:4,
    laptop:{
        cpu:'i7',
        ram:8,
        brand:"Dell",
        gpu:4
    }
}

for (let key in employee){
    console.log(key,employee[key])
}

for (let key in employee.laptop){
    console.log(key, employee.laptop[key])
}