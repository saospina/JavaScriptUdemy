//Video 34 y 35 Expresiones regulares

//var reg1 = RegExp('o');
// i = insensible a mayusculas y minusculas
// g = todas las apariciones
// m = multilinea
var reg2 = /a/;

var text = 'Aeropuerto'
var arr =  text.match(/\w{2,2}/ig);
console.log( arr );
