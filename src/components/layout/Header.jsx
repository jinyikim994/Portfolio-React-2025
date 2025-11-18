import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-inner">
                <h1 className="logo">
                    <NavLink to="/" onClick={closeMenu}>PORT/25</NavLink>
                </h1>

                {/* MO MENU BTN */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="메뉴 열기/닫기"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* PC MENU */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><NavLink to="/Page1" onClick={closeMenu}>ABOUT</NavLink></li>
                        <li><NavLink to="/Page2" onClick={closeMenu}>SERVICE</NavLink></li>
                        <li><NavLink to="/Page3" onClick={closeMenu}>WORK</NavLink></li>
                        <li><NavLink to="/Page5" onClick={closeMenu}>RECRUIT</NavLink></li>
                        <li><NavLink to="/Page4" onClick={closeMenu}>NEWS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
