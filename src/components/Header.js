import React from "react";
import '../styles/Header.css';
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logotype">
                    <a className="logotype-link" href="/">
                        <img
                            src='../siembra_logo.png'
                            className="logo-header"
                            alt="Logo siembra producciones"
                            />
                    </a>
                    <div className="title-header-container">
                        <h2 className="title-header">Siembra producciones,<br />colectivo audiovisual.</h2>
                    </div>
                </div>
                <div className="list-container">
                    <ul className="list-navbar">
                        <li className="list-navbar-item"><NavLink className={({isActive}) => (isActive ? "active" : "item-link")} to="/" style={{ textDecoration: 'none' }}><h2 className="navbar-text-item">Inicio</h2></NavLink></li>
                        <li className="list-navbar-item"><NavLink className={({isActive}) => (isActive ? "active" : "item-link")} to="/portfolio" style={{ textDecoration: 'none' }}><h2 className="navbar-text-item">Portafolio</h2></NavLink></li>
                        <li className="list-navbar-item"><NavLink className={({isActive}) => (isActive ? "active" : "item-link")} to="/about" style={{ textDecoration: 'none' }}><h2 className="navbar-text-item">Sobre nosotros</h2></NavLink></li>
                        <li className="list-navbar-item"><NavLink className={({isActive}) => (isActive ? "active" : "item-link")} to="/workshop" style={{ textDecoration: 'none' }}><h2 className="navbar-text-item">Talleres</h2></NavLink></li>
                        <li className="list-navbar-item"><NavLink className={({isActive}) => (isActive ? "active" : "item-link")} to="/contact" style={{ textDecoration: 'none' }}><h2 className="navbar-text-item">Contacto</h2></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;
