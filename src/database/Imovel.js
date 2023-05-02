import DatabaseConnetion from "./db"

export async function createTableImovel(){
    const db= DatabaseConnetion.getConnection();
    const query = `
    CREATE TABLE IF NOT EXISTS Imovel (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        contrato VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        moradia VARCHAR(255) NOT NULL,
        aluguel REAL NOT NULL,
        valorVenda REAL NOT NULL,
        quarto INTEGER NOT NULL,
        banheiro REAL NOT NULL,
        locado VARCHAR(255) NOT NULL,
        condominio REAL NOT NULL
    )
    `
    db.transaction(tx => {
        tx.executeSql(query);
    }, (error) => {
        console.log("error call back: " + JSON.stringify(error));
        console.log(error);
    }, () => {
        console.log("Transaction complete");
    });
}
export async function insertIntoImovel(imovel){
    const db= DatabaseConnetion.getConnection();
    return new Promise((resolve, reject) => db.transaction(
        tx =>{
            tx.executeSql(`INSERT INTO
            imovel(contrato, endereco, moradia, aluguel, valorVenda, quarto, banheiro, locado, condominio)
            VALUES ("${imovel.contrato}", "${imovel.endereco}", "${imovel.moradia}", ${imovel.aluguel}, ${imovel.valorVenda}, ${imovel.quartos}, ${imovel.banheiros}, "${imovel.locado}", ${imovel.condominio})`,
            (_, {insertId, rows}) => {
                console.log("Inserido");
                resolve(insertId);
            }), (sqlError) => {
                console.log("SQL error: " + JSON.stringify(sqlError));
            }}, (txError) => {
                console.log("Transaction error: " + txError);
            }
    ));
}

export async function findAllImovel() {
    const db = DatabaseConnetion.getConnection();
    return new Promise((resolve, reject) => db.transaction(tx => {
        tx.executeSql(`select * from imovel`, [], (_, {rows}) => {
            console.log("All: " + JSON.stringify(rows));
            resolve(rows);
        }), (sqlError) => {
            console.log(sqlError);
        }, (txError) => {
            console.log(txError);
        }
    }))
}
