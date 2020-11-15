var listadoEstudiantes = [];
listadoEstudiantes.push({
    nombre: "Daniel",
    apellido: "Rodriguez",
    edad: 20,
    peso: 72
});
listadoEstudiantes.push({
    nombre: "Juan",
    apellido: "Garcia",
    edad: 19,
    peso: 62
});
listadoEstudiantes.push({
    nombre: "Martha",
    apellido: "Florez",
    edad: 58,
    peso: 64
});
//CalBacks
listadoEstudiantes.forEach(function (probando) {
    console.log(probando.nombre + " " + probando.apellido);
});
var BuscarEstudiante = listadoEstudiantes.find(function (probando) {
    return probando.nombre == "Daniel";
    return probando.nombre.includes("niel");
});
console.log(BuscarEstudiante);
