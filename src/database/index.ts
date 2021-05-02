import "reflect-metadata";
import {createConnection} from "typeorm";

class ConnectionDB {
    public connectionPostgres() {
        createConnection().then(async connection => {
            console.log("DB postgres connected.");
        }).catch(error => console.log(`connection error: ${error}`))
    }
}

export default new ConnectionDB()



