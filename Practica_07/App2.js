"use strict";
class Vehiculos {
    moverse() {
        throw new Error("Este metodo debe ser implementado por las sub clases o clases hijas");
    }
}
class Coche extends Vehiculos {
    constructor(marca, modelo) {
        super();
        this.marca = marca;
        this.modelo = modelo;
    }
    moverse() {
        return `el vehiculo ${this.marca} ${this.modelo} esta moviendose`;
    }
}
class Bicleta extends Vehiculos {
    constructor(tamaño, marca) {
        super();
        this.tamaño = tamaño;
        this.marca = marca;
    }
    moverse() {
        return `La biciclta de tamaño ${this.tamaño} ${this.marca} esta moviendose`;
    }
}
class Avion extends Vehiculos {
    constructor(Aerolinea, numeroVuelo) {
        super();
        this.Aerolinea = Aerolinea;
        this.numeroVuelo = numeroVuelo;
    }
    moverse() {
        return `El vuelo ${this.numeroVuelo} ${this.Aerolinea} Esta en movimiento`;
    }
}


let miPrimerVeiculo = new Coche("Nissan","Frontier")
console.log(miPrimerVeiculo.moverse())
let miPrimerBicicleta = new Bicleta(20,"corsario")
console.log(miPrimerBicicleta.moverse())
let miPrimerAvion= new Avion("msibdb",'20')
console.log(miPrimerAvion.moverse())
