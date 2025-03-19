const Autenticacion ={
    login(usuario){
        console.log(`${usuario} ha iniciado seccion`);
    }
};

const Notificacion = {
    enviarNotificacion(mensaje){
        console.log(`Notificacion: ${mensaje}`);
    }
}

class Usuario {
    constructor(nombre) {
       this.nombre = nombre; 
    }
}
Object.assign(Usuario.prototype, Autenticacion, Notificacion)

const user1 = new Usuario("Alex");
user1.login(user1.nombre);
user1.enviarNotificacion("Tienes un mensaje enviado")