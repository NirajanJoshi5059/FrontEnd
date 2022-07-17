let map=new Map()

map.set("Nirajan",'Python');
map.set("Bimal","Accounting"),
map.set("Kiran","Marketing")


console.log(map)

for(let[k,v] of map){
    console.log(k," : ",v)
}
map.set("Nirajan",'JavaScript')
map.forEach((v,k)=>{
    console.log(k,' : ', v)
})