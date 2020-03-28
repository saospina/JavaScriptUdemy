// Video 7 JavaScript es asíncrono? que es asíncrono?

function imprimir() {
    for (let index = 0; index < 8000; index++) {
        console.log('Imprimió');
        
        
    }
}

function presionoClick() {
    console.log('CLick on button');
    
}

imprimir();

// no es asincrono, pone en espera las funciones y las ejecuta en orden

