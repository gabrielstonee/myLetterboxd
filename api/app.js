const express = require("express")
const rotaLivro = require("./rotas/livro.js")
const rotaFavorito = require("./rotas/favoritos.js")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);
app.get('/', (req, res) => {
  res.send("Olá mundo")
})

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
})