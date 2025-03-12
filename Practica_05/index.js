// Crear un sistema para verificar si un usuario tiene acceso a un panel de administracion
//El usuario debe estar registrado.
//El usuario debe tener permisosde admin.
//La cuenta del usuario no debe estar suspendida

let isRegistered;
let isadmin;
let isSuspended;

class Verificar {
    constructor(isRegistered, isadmin, isSuspended) {
        this.isRegistered = isRegistered;
        this.isadmin = isadmin;
        this.isSuspended = isSuspended;
    }
    inicio(){
        if (this.isRegistered === true) {
            if ( this.isadmin === true ) {
                if (this.isSuspended === false) {
                    console.log("Ingresando al panel de administrador...");
                    
                }else{
                    console.log("Debe estar activo");
                    
                }
            }else{
            console.log("El usuario no tiene permisos de administrador");

            }
        } else {
            console.log("El usuario no esta registrado");
            
        }
    }
}
const usuario1 = new Verificar(true, true, false)
usuario1.inicio()