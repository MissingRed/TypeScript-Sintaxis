interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
}

var personaN1: Persona = {
  nombre: "Daniel",
  apellido: "rodriguez",
  edad: 20,
  peso: 72
};

console.log(personaN1.nombre);
