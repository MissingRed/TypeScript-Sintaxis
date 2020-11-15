enum menuOpciones {
  opcion1 = 1,
  opcion2,
  opcion3
}

var opcion: number = 0;
opcion = parseInt(prompt("Digita una Opcion del 1 - 3"));

switch (opcion) {
  case menuOpciones.opcion1: {
    alert("Digito la Opcion 1");
    break;
  }

  case menuOpciones.opcion2: {
    alert("Digito la Opcion 2");
    break;
  }

  case menuOpciones.opcion3: {
    alert("Digito la Opcion 3");
    break;
  }
  default: {
    alert("Opcion no valida");
  }
}

// TERNARIOS (Es un If mas corto)
var numero: number = 10;
var nombre: string = null;

nombre = numero >= 15 ? "Daniel" : "Juan";
console.log(nombre);
