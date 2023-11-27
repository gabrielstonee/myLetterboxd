import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo(){
  return(
    <div className='logo'>
        <img 
          src={logo}
          alt='Alura logo'
          className='logo-img'
        ></img>
        <p><strong>Alura Books</strong></p>
    </div>
  )
}

export default Logo