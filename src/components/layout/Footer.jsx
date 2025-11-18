import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                <ul className="links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
