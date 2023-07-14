import React from "react"
import {Link, HashRouter} from "react-router-dom"


const Header = () => {
    return (
        <div>
                <nav className="navbar 	is-spaced is-light is-expanded is-tab is-active" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                            <img src="/Doggo.svg" width="112" height="28" alt="logo"/>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">Lista wszystkich ras</Link>
                            <Link to="search" className="navbar-item">Wyszukaj psa</Link>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
    
export default Header