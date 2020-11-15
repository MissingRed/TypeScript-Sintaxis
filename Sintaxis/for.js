var nombres = ["Daniel", "Fernando", "Juan"];
for (var i = 0; i < nombres.length; i++) {
    console.log("El nombre es: ", nombres[i]);
}
var usuarios = [
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
for (var i_1 = 0; i_1 < usuarios.length; i_1++) {
    console.log("los Nombres de los Usuarios son: ", usuarios[i_1].nombre);
    console.log("los Apellidos de los Usuarios son: ", usuarios[i_1].apellido);
}
//FOROF
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var i_2 = usuarios_1[_i];
    console.log("La Edad de los Usuarios son: ", i_2.edad);
    console.log("El Peso de los Usuarios son: ", i_2.peso);
}
