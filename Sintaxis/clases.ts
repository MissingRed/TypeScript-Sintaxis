class estudiante {
  private id: number;
  private nombre: string;
  private apellido: string;
  private edad: number;
  private peso: number;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    peso: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
  }

  public toString(): string {
    return (
      "El nombre del estudiante numero " +
      this.id +
      " es: " +
      this.nombre +
      " " +
      this.apellido +
      ", tiene una edad de: " +
      this.edad +
      " Años" +
      " y pesa: " +
      this.peso +
      " Kilogramos"
    );
  }

  public asignarDatos(
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    peso: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
  }
}

//Fin de la Clase

//Creación de Objetos de tipo ESTUDIANTE | Sin el uso de un contructor
var estudiante1: estudiante = new estudiante(0, null, null, 0, 0);
estudiante1.asignarDatos(235, "Daniel", "Rodriguez", 20, 72);
var imprimirEstudiante = estudiante1.toString();
console.log(imprimirEstudiante);

//Creación de Objetos de tipo ESTUDIANTE | Con el uso del contructor
var estudiante2: estudiante = new estudiante(500, "Martha", "Florez", 56, 60);
imprimirEstudiante = estudiante2.toString();
console.log(imprimirEstudiante);
