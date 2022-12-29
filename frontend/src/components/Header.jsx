import { ReactComponent as Icon } from '../assets/icons/logo3.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <Icon className='icon'></Icon>
                <p className='slogan'>Sentite como en tu hogar</p>
            </div>
            <div className='btns'>
                <a className='btn'>Crear cuenta</a>
                <a className='btn'>Iniciar sesión</a>
            </div>
            <div className='burger-menu'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </header>
    );
}

export default Header;