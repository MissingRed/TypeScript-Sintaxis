var estudiante = /** @class */ (function () {
    function estudiante(id, nombre, apellido, edad, peso) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
    }
    estudiante.prototype.toString = function () {
        return ("El nombre del estudiante numero " +
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
            " Kilogramos");
    };
    estudiante.prototype.asignarDatos = function (id, nombre, apellido, edad, peso) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
    };
    return estudiante;
}());
//Fin de la Clase
//Creación de Objetos de tipo ESTUDIANTE | Sin el uso de un contructor
var estudiante1 = new estudiante(0, null, null, 0, 0);
estudiante1.asignarDatos(235, "Daniel", "Rodriguez", 20, 72);
var imprimirEstudiante = estudiante1.toString();
console.log(imprimirEstudiante);
//Creación de Objetos de tipo ESTUDIANTE | Con el uso del contructor
var estudiante2 = new estudiante(500, "Martha", "Florez", 56, 60);
imprimirEstudiante = estudiante2.toString();
console.log(imprimirEstudiante);
