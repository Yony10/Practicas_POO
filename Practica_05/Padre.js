/*Crear una clase padre con los siguientes atributos(nombre, edad) y un metodo saludar() 
heredar a una clase Hija y crear un objeto para mostrar los metodos heredados*/

class Padre {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} de edad`);
    }
}
module.exports = Padre;