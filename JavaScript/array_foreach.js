let data=[14,15,10,9,17,25,26]

data.forEach((n)=>{
    console.log(n)
})

data.forEach((n, i, data)=>{
    console.log(`Value : ${n},
Index : ${i},
Array : ${data}`)
})