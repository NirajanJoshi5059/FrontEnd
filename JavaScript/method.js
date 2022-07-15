let laptop={
    cpu:'i7',
    brand:'Dell',
    ram:'8 GB',
    graphic:'4 GB',

    brand_name: function(){
        console.log("The brand name is "+laptop.brand)
    },
    spec:function(user){
        console.log(`${user} use ${laptop.brand}  laptop.
        It has ${laptop.cpu} processor with ${laptop.ram} and
        ${laptop.graphic} of ram and graphics card.`)
    }
}

laptop.brand_name()
laptop.spec("Nirajan")