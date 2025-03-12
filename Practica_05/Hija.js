const Padre = require('./Padre')

class Hija extends Padre {
    constructor(nombre, edad, hermanos) {
        super(nombre, edad)
        this.hermanos = hermanos;
    }
    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} de edad... Soy clase hija`);
    }
    presentaHermanos(){
        console.log(`Mis hermanos son ${this.hermanos.join(', ')}`);
    }
}

const hija = new Hija("Yony", 19, ['Wendy', 'Meylin']);
hija.saludar();
hija.presentaHermanos();