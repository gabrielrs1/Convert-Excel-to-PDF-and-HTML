const fs = require("fs")
const util = require("util") // coisas 'uteis'

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile) // promisify transforma em promisse
                    // Função nova  (função velha)                                                  
    }

    // promisse 
    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf8")
        } catch (error) {
            console.log(error)   
        }
    }
}

module.exports = Reader