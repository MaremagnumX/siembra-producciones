import React from "react";
import '../styles/Header.css';

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logotype">
                    <a className="logotype-link" href="">
                        <img
                            className="logo-header"
                            alt="Logo siembra producciones"
                            src="../siembra_logo.png" />
                    </a>
                    <div className="title-header-container">
                        <h2 className="title-header">Siembra producciones,<br />colectivo audiovisual.</h2>
                    </div>
                </div>
                <div className="list-container">
                    <ul className="list-navbar">
                        <li className="list-navbar-item"><a className="item-link" href=""><h2 className="navbar-text-item">Inicio</h2></a></li>
                        <li className="list-navbar-item"><a className="item-link" href=""><h2 className="navbar-text-item">Portafolio</h2></a></li>
                        <li className="list-navbar-item"><a className="item-link" href=""><h2 className="navbar-text-item">Sobre nosotros</h2></a></li>
                        <li className="list-navbar-item"><a className="item-link" href=""><h2 className="navbar-text-item">Talleres</h2></a></li>
                        <li className="list-navbar-item"><a className="item-link" href=""><h2 className="navbar-text-item">Contacto</h2></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;
