import request from 'supertest';
import app from '../app';
import { getConnection } from '../Database/conection';
import {InsertEmployees} from '../Controller/EmployeesRepository';
import { Employees } from '../Models/EmployeesModels';

describe('POST /createEmployees', () => {
    it('deberia de haber un nuevo empleado', async () => {
        const empleado = new Employees(
            "Juan",
            "juan123@gmail.com",
            "12345",
            1
        );

        const connection = await getConnection();

        await InsertEmployees(empleado.getNombreEmpleado(), empleado.getCorreoElectronico(), empleado.getCotrasena(), empleado.getRol(), connection);

        const response = await request(app)
            .post('/createEmployees')
            .send({
                Nombre: empleado.getNombreEmpleado(),
                Correo: empleado.getCorreoElectronico(),
                Contrasena: empleado.getCotrasena(),
                Rol: empleado.getRol()
            });
        if (response.statusCode == 200) {
            expect(response.body).toEqual({ message: 'Empleado creado exitosamente' });
        } else if (response.statusCode == 409){
            expect(response.body).toEqual({ message: 'El correo ya existe' })
        }
        await connection.end(); 
    })
})