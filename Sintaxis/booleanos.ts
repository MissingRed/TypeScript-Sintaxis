var descuento: boolean = 700 + 9000 == 9700;

if (descuento == true) {
  alert("Descuento Agregado");
} else {
  alert("Descuento Denegado");
}

var nombre: string = "Daniel";
var apellido: string = "Daniel";
var num1: number = 10;
var num2: number = 10;

var igualdad: boolean = nombre == apellido && num1 == num2;

if (igualdad == true) {
  alert("Los textos son iguales");
} else {
  alert("Los textos no son iguales");
}

var BooleanoCompartido: boolean = descuento && igualdad;

alert("Los Booleanos son: " + BooleanoCompartido);
