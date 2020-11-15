var nombres: Array<String> = ["Daniel", "Fernando", "Juan"];

for (var i: number = 0; i < nombres.length; i++) {
  console.log("El nombre es: ", nombres[i]);
}

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
}

var usuarios: Array<Persona> = [
  {
    nombre: "Daniel",
    apellido: "Rodriguez",
    edad: 20,
    peso: 72
  },
  {
    nombre: "Hernan",
    apellido: "Rodriguez",
    edad: 57,
    peso: 71
  },
  {
    nombre: "Juan",
    apellido: "Garcia",
    edad: 19,
    peso: 50
  },
  {
    nombre: "Fernando",
    apellido: "Guzman",
    edad: 22,
    peso: 60
  }
];

// FOR NATIVO
for (let i = 0; i < usuarios.length; i++) {
  console.log("los Nombres de los Usuarios son: ", usuarios[i].nombre);
  console.log("los Apellidos de los Usuarios son: ", usuarios[i].apellido);
}

//FOROF
for (let i of usuarios) {
  console.log("La Edad de los Usuarios son: ", i.edad);
  console.log("El Peso de los Usuarios son: ", i.peso);
}
