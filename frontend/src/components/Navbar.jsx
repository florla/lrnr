import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import "../styles/materialize.css";
import "../styles/icons.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav className="blue " role="navigation">
                <div className="nav-wrapper container" ref={navRef}>
                    <a id="logo-container" href="/" className="brand-logo">lrnr</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/account" onClick={handleLinkClick}>Account</Link></li>
                        <li><Link to="/categories" onClick={handleLinkClick}>Quiz Generation</Link></li>
                    </ul>
                    <ul id="nav-mobile" className={`sidenav ${isOpen ? "open" : ""}`} style={{ transform: isOpen ? "translateX(0%)" : "translateX(-105%)" }}>
                        <li><Link to="/account" onClick={handleLinkClick}>Account</Link></li>
                        <li><Link to="/categories" onClick={handleLinkClick}>Quiz Generation</Link></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger" onClick={toggleNav}><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
