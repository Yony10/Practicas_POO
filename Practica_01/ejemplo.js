class Coche {
    constructor(marca, modelo, anio, encendido) {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.encendido = false;
    }
    showInfo(){
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio}`);
    }
    encender(){
        if (this.encendido) {
            console.log("El auto esta encendido");
        }else{
            console.log("El auto esta apagado");
        }
    }
    apagar(){
        if (this.encendido) {
            console.log("El auto esta apagado");
        }else{
            console.log("El auto esta encendido");
        }
    }
}
const auto1 = new Coche ("Nissan", "Frontier", 2022, true)
auto1.encender()
auto1.apagar()