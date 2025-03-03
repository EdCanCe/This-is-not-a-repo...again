const entrevistas = [];

module.exports = class Distro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombrePersona, nombreDistro) {
        this.nombre = nombrePersona;
        this.distro = nombreDistro;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        entrevistas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return entrevistas;
    }

}