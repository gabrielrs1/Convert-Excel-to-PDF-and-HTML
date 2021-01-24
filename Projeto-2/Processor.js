// Processador de dados
class Processor {
    static Process(data) {
        var a = data.split("\r\n") // Separando a string a cada quebra de linha
        var rows = []

        a.forEach(row => {
            var arr = row.split(";") // Separando as linhas do array criado
            rows.push(arr) 
        })

        return rows
    }
}

module.exports = Processor