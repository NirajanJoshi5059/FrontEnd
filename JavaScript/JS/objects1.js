// Declearing a object
var bike = {
    brand_name:"Bajaj",
    bike_model:"Ns 200",
    price: 319900,

    extraft:function(){
        document.write("Most powerful bike in 200 cc segment with affordable price.<br>");
    }
}
bike.extraft()
document.write(bike.bike_model+"<br>")


// Constructor
function Bike(brand,model, price){
    this.brand_name=brand,
    this.bike_model=model,
    this.price=price,
    
    this.extra=function(){
        document.write("SR 150 most powerful scooter.<br>");
    }
}

let aprilia = new Bike("Aprilia", "SR 150", 289000);
aprilia.extra();