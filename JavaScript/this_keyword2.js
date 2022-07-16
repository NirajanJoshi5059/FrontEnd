// this keyword make code more dynamic 
let laptop={
    cpu:'i7',
    brand:'Dell',
    ram:'8 GB',
    graphic:'4 GB',

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

    compare : function(laptop){
        if (this.cpu> laptop.cup)
            console.log(this)
        else
            console.log(laptop)
    },
    spec:function(user){
        console.log(`${user} use ${this.brand}  laptop.
        It has ${this.cpu} processor with ${this.ram} and
        ${this.graphic} of ram and graphics card.`)
    }
}


laptop.spec("Nirajan")
laptop1.compare(laptop)