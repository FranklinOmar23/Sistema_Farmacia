import msql from 'mysql';

const dbSettings = {
    user: "root",
    password: "",
    host: "localhost",
    database: "farmacia",
    port: 3306,
    connectionLimit: 10
}

export function getConnection() {
    try{
        const pool = msql.createPool(dbSettings);

        pool.getConnection((err, connection) => { 
            if(err){
                console.log(err);
            }
            console.log("Conexion exitosa");

            connection.release();
            
        });
        return pool;
    }catch{
        console.error("error", error)
    }
}