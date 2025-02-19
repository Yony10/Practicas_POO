const Animal = require('./Animal')

class Perro extends Animal{
    constructor(nombre, raza, color) {
        super(nombre, raza, color)
    }
    getName(){
        return super.getName()
    }
    sonido(){
        console.log("Gua Gua!!!!");
        
    }
}

let perro1 = new Perro("Firulay", "Pitbull", "Café");
console.log(perro1.getName());
perro1.sonido()
