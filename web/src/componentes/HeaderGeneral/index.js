import Logo from '../Logo/index.js'
import IconesHeader from '../Icones/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function HeaderGeneral(){
  return (
    <HeaderContainer>
        <Link to="/">
          <Logo/>
        </Link>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
  )
}

export default HeaderGeneral;