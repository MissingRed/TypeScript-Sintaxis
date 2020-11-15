//Funciones simples
function nombreFuncion() {
  console.log("Daniel");
}

nombreFuncion();
//Funciones con parametros
function nombreVariable(nombre: string) {
  console.log("El nombre agregado es:", nombre);
}

nombreVariable("Hernan");

//Funciones retornables
function suma(numero1: number, numero2): number {
  var total: number = numero1 + numero2;
  return total;
}

var suma1: number = suma(20, 30);
console.log("El resultado de la suma es: ", suma1);

//Calcular promedio: Funciones retornables
function promedio(nota1: number, nota2: number, nota3: number): number {
  var total = (nota1 + nota2 + nota3) / 3;

  return total;
}

var TotalPromedio = promedio(3.7, 4.8, 5.0);
console.log("El primedo del estudiante es: ", TotalPromedio);
