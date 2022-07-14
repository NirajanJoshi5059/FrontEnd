// Complex Object

let employee={
    name:"Nirajan",
    p_lang:'Python',
    work_exp:4,
    laptop:{
        brand:'Dell',
        processor:'i7',
        ram:8
    }
}

console.log(employee.laptop.brand)

// check exists or not
console.log(employee.laptop.brand1?.length)

// delete property

delete employee.laptop.processor
console.log(employee)