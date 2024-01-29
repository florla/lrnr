import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import '../styles/materialize.css'
import '../styles/icons.css'

export default function Navbar() {
    return (
        <>
            <nav className="blue" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="/" className="brand-logo">lrnr</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/categories">Quiz Generation</Link></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/categories">Quiz Generation</Link></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </>
    )
}
