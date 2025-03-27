"use strict";
//clase Base|Clase padre
class Figura {
    //Metodo calcular area
    calcularArea() {
        throw new Error("Este metodo debe ser implementado por las sub clases o clases hijas");
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    //Sobre escritura de Metodo calcular area o Polimorfismo
    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}
class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class Triangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
//Funcion que resibe un array de figuras y calcula sus areas
function calcularArea(figuras) {
    figuras.forEach((figura) => {
        console.log(`Area de ${figura.constructor.name}:${figura.calcularArea().toFixed(2)}`);
    });
}
const figuras = [
    new Circulo(8),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];
calcularArea(figuras);
