import styled from "styled-components";
import {livros} from "../Pesquisa/dadosPesquisa.js";
import { Titulo } from "../Titulo/index.js";

const UltimosLancamentosContainer = styled.section`
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANCAMENTOS</Titulo>
        <NovosLivrosContainer>
          { livros.map( livro => (
          <img src={livro.src}/>
          ) ) }
        </NovosLivrosContainer>
    </UltimosLancamentosContainer>
      
  )
}

export default UltimosLancamentos;