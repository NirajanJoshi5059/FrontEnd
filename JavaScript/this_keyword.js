// this keyword make code more dynamic 
let laptop={
    cpu:'i7',
    brand:'Dell',
    ram:'8 GB',
    graphic:'4 GB',

    brand_name: function(){
        console.log("The brand name is "+laptop.brand)
    },
    spec:function(user){
        console.log(`${user} use ${this.brand}  laptop.
        It has ${this.cpu} processor with ${this.ram} and
        ${this.graphic} of ram and graphics card.`)
    }
}
let laptop1={
    cpu:'i3',
    brand:'Dell',
    ram:'4 GB',
    graphic:'2 GB',

    brand_name: function(){
        console.log("The brand name is "+laptop1.brand)
    },
    spec:function(user){
        console.log(`${user} use ${this.brand}  laptop.
        It has ${this.cpu} processor with ${this.ram} and
        ${this.graphic} of ram and graphics card.`)
    }
}

laptop.brand_name()
laptop.spec("Nirajan")

laptop1.brand_name()
laptop1.spec("Nirajan")