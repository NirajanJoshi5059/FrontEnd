// Filter/ map/ reduce method in array

let data=[14,15,10,9,17,25,26]

let res=data.filter(n => n%2===0)
    .map(n => n*2)
    .reduce((a,b)=> a+b)
console.log(res)   

// actual activities 
let result=data.filter((n)=>{
    if(n%2===0)
        return n
})
console.log(result)
