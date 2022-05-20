import React from "react";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img
                    className="logo-header"
                    alt="Logo siembra producciones"
                    src="../siembra_logo.png"/>
                <div className="title-header">
                    <h2>Siembra producciones</h2>
                </div>
            </div>
        </nav>
    )
}

export default Header;
