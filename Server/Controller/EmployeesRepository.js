import { getConnection } from "../Database/conection.js";
import Employees from "../Models/EmployeesModels";

async function InsertEmployees(Nombre, Correo, Contrasena, Rol) { 
    try {
        const pool = getConnection();

        const employee = new Employees(Nombre, Correo, Contrasena, Rol);

        const query = "INSERT INTO empleados (Nombre, Correo, Contrasena, Rol) VALUES (?, ?, ?, ?)";
        const values = [employee.getNombreEmpleado(), employee.getCorreoElectronico(), employee.getCotrasena(), employee.getRol()];

        await new Promise((resolve, reject) => {
            pool.query(query, values, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                console.log("Empleado creado exitosamente");
                resolve();
            })
        })
    } catch (error) {
        console.error(`Error al establecer conexion con la base de datos: ${error}`);
    }
}

export {InsertEmployees}