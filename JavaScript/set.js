// set is a class

let set1=new Set('bookkepper')
console.log(set1)

let set2=new Set()
set2.add(14);
set2.add(17);
set2.add(15);
set2.add(25);
set2.add(26);
set2.add(9);
set2.add(10);
set2.add(14);
console.log(set2)

// fetching each value single
// Using forEach
set2.forEach((n)=>{
    console.log(n)
})
// Using for of
for(let n of set2){
    console.log(n)
}