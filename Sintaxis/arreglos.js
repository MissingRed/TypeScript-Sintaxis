var listadoDeNombres = ["Daniel", "Juan", "Fernando"];
console.log("El nombre seleccionado es: " + listadoDeNombres[2]);
var listadoPersonas = [
    {
        nombre: "Daniel",
        apellido: "Rodriguez",
        edad: 20,
        peso: 72
    },
    {
        nombre: "Juan",
        apellido: "Garcia",
        edad: 19,
        peso: 57
    },
    {
        nombre: "Hernan",
        apellido: "Collazos",
        edad: 57,
        peso: 70
    }
];
console.log("El apellido seleccionado de la interfaz es: " + listadoPersonas[2].apellido);
listadoPersonas.push({
    nombre: "Martha",
    apellido: "Florez",
    edad: 56,
    peso: 72
});
console.log(listadoPersonas);
