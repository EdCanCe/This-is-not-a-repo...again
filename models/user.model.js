const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombrePersona, passwd, idValue = null) {
        this.username = nombrePersona;
        this.password = passwd;
        this.id = idValue;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12).then((cipheredPass) => {
            return db.execute('INSERT INTO user(username, passwd) values( ? , ? )', [this.username, cipheredPass]); // Aunque sea string, no se tiene que especificar comillas. También evita SQL inyections
        }).catch(err => console.log(err));
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username) {
        return db.execute('CALL SelectUser(?)', [username]);
    }

    static getPrivileges(username) {
        return db.execute('CALL SelectPrivileges(?);', [username]);
    }

}