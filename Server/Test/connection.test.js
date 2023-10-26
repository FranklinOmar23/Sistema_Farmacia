import { getConnection } from '../Database/conection.js';

describe('Test de conexión a la base de datos', () => {
    let pool;

    beforeAll(() => {
        pool = getConnection();
    });

    afterAll((done) => {
        if (pool) {
            pool.end((err) => {
                if (err) {
                    console.error("Error al conectar la base de datos", err);
                }
                done(); // Llama a done() para notificar que las tareas asincrónicas han finalizado
            });
        }
    });

    it('Debería conectarse a la base de datos', (done) => {
        pool.query('SELECT 1 + 1 AS solution', (error, results) => {
            if (error) {
                done(error);
            } else {
                const resultado = results[0].solution; // Corrige la extracción del resultado
                console.log("Resultado del query es:", resultado);
                expect(resultado).toBe(2);
                done(); // Llama a done() para notificar que las tareas asincrónicas han finalizado
            }
        });
    });
});
