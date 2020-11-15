interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
}

var listadoEstudiantes: Array<Alumno> = [];

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
listadoEstudiantes.forEach(probando => {
  console.log(probando.nombre + " " + probando.apellido);
});

var BuscarEstudiante = listadoEstudiantes.find(probando => {
  return probando.nombre == "Daniel";
  return probando.nombre.includes("niel");
});

console.log(BuscarEstudiante);
