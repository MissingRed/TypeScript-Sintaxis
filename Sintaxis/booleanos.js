var descuento = 700 + 9000 == 9700;
if (descuento == true) {
    alert("Descuento Agregado");
}
else {
    alert("Descuento Denegado");
}
var nombre = "Daniel";
var apellido = "Daniel";
var num1 = 10;
var num2 = 10;
var igualdad = nombre == apellido && num1 == num2;
if (igualdad == true) {
    alert("Los textos son iguales");
}
else {
    alert("Los textos no son iguales");
}
var BooleanoCompartido = descuento && igualdad;
alert("Los Booleanos son: " + BooleanoCompartido);
