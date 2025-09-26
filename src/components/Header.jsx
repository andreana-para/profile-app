import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom'

const Header = ({change}) => {

    return (
        <header className = "header">
            <nav className = {styles.navBar}>
                <div className = {styles.link}>
                {/* <a href="#">Home</a> */}
                <Link to="/">Home</Link> 
                
                {/* <a href="#">About</a> */}
                <Link to="/about">About</Link>

                {/* <a href="#">Profiles</a> */}
                <Link to="/profiles">Profiles</Link>

                </div>
                <button onClick={change}>Light/Dark</button>
            </nav>
        </header>
    )
}

export default Header;