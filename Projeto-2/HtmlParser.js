var ejs = require("ejs")

class HtmlParser {
    static async Parse(table) {
        return await ejs.renderFile("./table.ejs", { // Enviando os dados para o arquivo html com ejs
            header: table.header,
            rows: table.rows
        })
    }
}

module.exports = HtmlParser