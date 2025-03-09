const db = require('../util/database');

module.exports = class Distro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombrePersona, nombreDistro, idValue = null) {
        this.username = nombrePersona;
        this.distro = nombreDistro;
        this.id = idValue;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO vote(distro, username) values( ? , ? )', [this.distro, this.username]); // Aunque sea string, no se tiene que especificar comillas. También evita SQL inyections
    }

    modify() {
        return db.execute('UPDATE vote SET distro = ? WHERE id = ?', [this.distro, this.id])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(`SELECT * FROM vote`);
    }

    static fetchByDistro(distro) {
        return db.execute('SELECT username, createdAt FROM vote WHERE distro = ?', [distro]);
    } 

    static fetchById(id) {
        return db.execute('SELECT distro FROM vote WHERE id = ?', [id]);
    } 

}