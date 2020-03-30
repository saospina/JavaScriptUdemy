// Video 43 Funciones especiales

var car = {
    color:"white",
    brand: "renault",
    print:function () {
        var exit = this.brand + "-" + this.color;
        return exit;
    }
};

var car2 = {
    color: "Red",
    brand: 'Toyota'
}

console.log( car.print());

var logCar = function (arg1, arg2) {

    console.log("Carroo", this.print());
    console.log('Arguments are: ', arg1, arg2);
    console.log('==========');
    
     
}

var logModelCar = logCar.bind(car);

logModelCar('abc','xyz');

logModelCar.call( car, '123', '456');
logModelCar.apply( car, ['sergio', 'ospina']);

//FUnciones prestadas

console.log(car.print.call(car2));

