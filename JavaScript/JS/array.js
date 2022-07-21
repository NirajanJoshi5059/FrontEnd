let cars=["BMW", "Mercedies", 'Volvo','Tata','Mahendra','Hyundai','Kia']
let car_model=new Array("Alto 800","Creata",'Seltos','Sonet','Verna','Polo',"Tiago","Tigor",'Nexon',"Punch")
car_model.push("XUV700")

for (let i=0; i<cars.length; i++){
    document.write(`<h2>${i} : ${cars[i]}</h2>`)
}

// for in loop
for (let key in car_model) {
    document.write(`<h4>${key} : ${car_model[key]}</h4>`)
}

// for of loop
for (let k of cars) {
    document.write(`<h3>${k}</h3>`)
}