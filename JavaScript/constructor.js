function Detail(name, address, contact){
    this.name=name;
    this.address=address;
    this.contact=contact;

    // by default there is (return this) type of activities

    this.profile=function(){
        return(`Name: ${this.name} 
Address: ${this.address}`)
    }
}

let pro=new Detail("Nirajan", 'Kushma, Parbat','9847620206')
console.log(pro)
console.log(pro.profile())