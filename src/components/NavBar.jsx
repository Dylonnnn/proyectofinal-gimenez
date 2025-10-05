import React from "react";
import Logo from "../assets/9zicon.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="NavBar">
                <img src={Logo} alt="logo" className="icon"/>
                <ul className="UlBar">
                    <li>INICIO</li>
                    <li>MIS SKINS</li>
                    <li>CATEGORIAS</li>
                </ul>
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;
