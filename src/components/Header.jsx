const Header = () => {
    return (
        <header className = "header">
            <h1>Profile App</h1>
            <nav
                style = {{
                    position: 'fixed',       // Fix it at the top
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#5A352A',
                    height: '40px',
                    borderBottom: '1px solid black',
                    padding: '0 20px',
                    zIndex: 1000,
                }}
                >
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Profiles</a>
            </nav>
        </header>
    )
}

export default Header;