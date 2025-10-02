import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom'
import ModeContext from '../contexts/ModeContext';
import { useContext } from 'react';

const Header = () => {

    const { handleModeClick } = useContext(ModeContext);

    return (
        <header className = "header">
            <nav className = {styles.navBar}>
                <div className = {styles.links}>
                {/* <a href="#">Home</a> */}
                <Link to="/">Home</Link> 
                
                {/* <a href="#">About</a> */}
                <Link to="/about">About</Link>

                {/* <a href="#">Profiles</a> */}
                <Link to="/profiles">Add a Profile</Link>

                <Link to="/fetchedProfiles">Fetched Profiles</Link>

                </div>
                <button onClick={handleModeClick}>Light/Dark</button>
            </nav>
        </header>
    )
}

export default Header;