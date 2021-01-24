const { throws } = require("assert");
const { table } = require("console");

class Table {
    constructor(arr) {
        this.header = arr[0] // Pegando o indice 0 do array 
        arr.shift() // Apagando o indice 0 do array
        this.rows = arr // Pegando restante dos indices
    }

    // Campos visuais
    get RowCount() { // Usando get antes do método, meio que transforma ele em um atributo, mas é obrigatório ele retornar algo
        return this.rows.length
    }

    get ColumnCount() {
        return this.header.length
    }
}

module.exports = Table