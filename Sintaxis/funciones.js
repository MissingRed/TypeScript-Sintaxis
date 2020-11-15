//Funciones simples
function nombre() {
    console.log("Daniel");
}
nombre();
//Funciones con parametros
function nombreVariable(nombre) {
    console.log("El nombre agregado es:", nombre);
}
nombreVariable("Hernan");
//Funciones retornables
function suma(numero1, numero2) {
    var total = numero1 + numero2;
    return total;
}
var suma1 = suma(20, 30);
console.log("El resultado de la suma es: ", suma1);
//Calcular promedio: Funciones retornables
function promedio(nota1, nota2, nota3) {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}
var TotalPromedio = promedio(3.7, 4.8, 5.0);
console.log("El primedo del estudiante es: ", TotalPromedio);
