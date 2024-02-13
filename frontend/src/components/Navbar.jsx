import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import "../styles/materialize.css";
import "../styles/icons.css";

const Navbar = () => {
    // State variable to manage the open/close state of the navigation menu
    const [isOpen, setIsOpen] = useState(false);
    // Reference to the navigation menu DOM element
    const navRef = useRef(null);

    // Function to toggle the navigation menu
    const toggleNav = () => setIsOpen(!isOpen);
    // Function to handle link clicks and close the navigation menu
    const handleLinkClick = () => setIsOpen(false);

    // Function to handle clicks outside the navigation menu to close it
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Effect hook to add event listener for clicks outside the navigation menu when component mounts
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Rendering the Navbar component
    return (
        <div>
            <nav className="blue" role="navigation">
                <div className="nav-wrapper container" ref={navRef}>
                    <a id="logo-container" href="/" className="brand-logo">lrnr</a>
                    {/* Desktop navigation links */}
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/account" onClick={handleLinkClick}>Account</Link></li>
                        <li><Link to="/categories" onClick={handleLinkClick}>Quiz Generation</Link></li>
                    </ul>
                    {/* Mobile navigation links */}
                    <ul id="nav-mobile" className={`sidenav ${isOpen ? "open" : ""}`} style={{ transform: isOpen ? "translateX(0%)" : "translateX(-105%)" }}>
                        <li><Link to="/account" onClick={handleLinkClick}>Account</Link></li>
                        <li><Link to="/categories" onClick={handleLinkClick}>Quiz Generation</Link></li>
                    </ul>
                    {/* Mobile menu toggle button */}
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger" onClick={toggleNav}><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
