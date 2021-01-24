const fs = require("fs") // fs = file system

// Ler arquivos em texto
// fs.readFile("./arquivo",{encoding: "utf-8"}, (erro, dados) => {
//     if(erro) {
//         console.log("Ocorreu uma falha de leitura")
//     } else {
//         console.log(dados)
//     }
// })

// Escrever em arquivos de texto
// fs.writeFile("./arquivo", "Novo conteudo", (err) => {
//     if(err) {
//         console.log("erro ao escrever")
//     }
// })

// Escritor e Leitor de arquivo JSON
function modificarUsuario(nome, idade, comida) {
    fs.readFile("./arquivo2.json", {encoding: "utf-8"}, (err, dados) => {
        if(err) {
            console.log("erro na leitura")
        } else {
            var conteudo = JSON.parse(dados) // Aqui vem os dados em formato de texto, então o JSON.parse transforma em um objeto real mesmo. Isso então libera para você modificar seus valores somente para a leitura, ele não grava no texto original
            conteudo.nome = nome
            conteudo.idade = idade
            conteudo.comida = comida
            console.log(conteudo)

            fs.writeFile("./arquivo2.json", JSON.stringify(conteudo), (err) => { // Aqui esse JSON faz o contrário no comando mais acima. Tranforma JSON para texto
                if(err) {
                    console.log("um erro na escrita")
                }
            })
        }
    })
}

modificarUsuario("nome", 42, "comida")
