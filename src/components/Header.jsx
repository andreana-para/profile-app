import styles from '../styles/Header.module.css'

const Header = ({change}) => {

    return (
        <header className = "header">
            <h1>Profile App</h1>
            <nav className = {styles.navBar}>
                <div className = {styles.link}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Profiles</a>
                </div>
                <button onClick={change}>Light/Dark</button>
            </nav>
        </header>
    )
}

export default Header;