const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id:'3', nome: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringfy([...dadosAtuais, novoDado ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))