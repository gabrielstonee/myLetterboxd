import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros} from "../../services/livros.js";

import { postFavoritos, deleteFavoritos } from "../../services/favoritos.js";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
  const [ livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros();
  }, [])

  async function fetchLivros(){
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
  }

  async function insertFavorito(id) {
    await postFavoritos(id)
    alert(`Livro de id:${id} inserido!`)
  }

  return (
      <PesquisaContainer>
          <Titulo>Já sabe por onde começar?</Titulo>
          <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
          <Input
              placeholder="Escreva sua próxima leitura"
              onBlur={evento => {
                  const textoDigitado = evento.target.value
                  const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                  setLivrosPesquisados(resultadoPesquisa)
              }}
          />
          { livrosPesquisados.map((livro)=> (
            <ResultadoContainer onClick={() => insertFavorito(livro.id)}>
              <p>{livro.nome}</p>
              <img src={livro.src}/>
            </ResultadoContainer>
          ))}
      </PesquisaContainer>
  )
}

export default Pesquisa