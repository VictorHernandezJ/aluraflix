import './header.css'
import Boton from '../boton/boton'
function Header() {
    return (
        <header className='contenedor-header'>
            <input type='image' src='public/img/logo.svg' />
            <Boton bgColor='transparent' textColor='white'>Nuevo Video</Boton>
        </header>
    )
}

export default Header