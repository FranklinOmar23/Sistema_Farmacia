class Employees {
    constructor(NombreEmpleado, CorreoElectronico, Contrasena, Rol) { 
        this.NombreEmpleado = NombreEmpleado;
        this.CorreoElectronico = CorreoElectronico;
        this.Contrasena = Contrasena;
        this.Rol = Rol;
    }

    getNombreEmpleado(){
        return this.NombreEmpleado;
    }
    setNombreEmpleado(NombreEmpleado){
        this.NombreEmpleado = NombreEmpleado;
    }

    getCorreoElectronico() {
        return this.CorreoElectronico;
    }

    setCorreoElectronico(CorreoElectronico) { 
        this.CorreoElectronico = CorreoElectronico;
    }

    getCotrasena() {
        return this.Contrasena;
    }

    setContrasena(Contrasena) {
        this.Contrasena = Contrasena;
    }

    getRol() {
        return this.Rol;
    }

    setRol(Rol) {
        this.Rol = Rol;
    }
}

export default Employees;