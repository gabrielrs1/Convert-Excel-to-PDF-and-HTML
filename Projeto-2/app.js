var Reader = require("./Reader") // Pegando class criada no Reader.js
var Write = require("./Writer") // Pegando class criada no Writer.js
var Processor = require("./Processor") // Pegando class criada no Processor.js
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var PDFWriter = require("./PDFWriter")

var leitor = new Reader() // Executando a class Reader
var escritor = new Write()

async function main() {
    var dados = await leitor.Read("./users.csv") // Retornando os arquivos
    var dadosProcessados = Processor.Process(dados) // Executando a class

    var usuarios = new Table(dadosProcessados) // Executando class de Tabela
    
    var html = await HtmlParser.Parse(usuarios) // Recebendo os dados da promisse do HtmlParser

    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
    // usuarios.rows.push(["Larissa", 33, "Biologa"]) // Adicionando um dado 
    
    // console.log(usuarios.RowCount)
    // console.log(usuarios.ColumnCount)
}
main()