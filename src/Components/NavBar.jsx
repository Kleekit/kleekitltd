import React from 'react';
import '../index.css';
import '../bootstrap.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="container-fluid">

            <div className="logo">
            <img src="./media/logo.png" alt="logo" />
            </div>
            
            <div className="navLinkContainer">
            <ul>
                <li><a className="activeLink" href="/">Home</a></li>
                <li><a className="activeLink" href="/about">About</a></li>
                <li><a className="activeLink" href="/portfolio">Porfolio</a></li>
                <li><a className="activeLink" href="/team">Team</a></li>
            </ul>
            </div>

            <div className="menuResponsive">
            <a href="#sidebar" className="d-block" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">
            <img className="img-fluid menuImg" src="media/menuBtn.png" alt="menu button" />
            </a>
            </div>

            <div className="btnResponsive">
            <a href="/start" className="header-btn">
                Start a Project
            </a>
            </div>
            </nav>
                    {/* <!-- offcanvas --> */}
            <div className="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="sidebar-label">

        <div className="offcanvas-body" id="off-body">
        <ul className="links-canvas">
            <li className="menu-link menu-active"><a href="#">Home</a></li>
            <li className="menu-link"><a href="/about">About</a></li>
            <li className="menu-link"><a href="/portfolio">Portfolio</a></li>
            <li className="menu-link"><a href="/team">Team</a></li>
            <li className="header-btn-menu">
                <a href="/start" className="header-btn">
                Start a Project
                </a>
            </li>

        </ul>
        </div>

        <div className="menuCloseCase">
        <div className="menuCloseBtn">
            <a href="#sidebar" className="d-block" data-bs-toggle="offcanvasCustom" role="button" aria-controls="sidebar">
            <img className="menuImg" src="media/menuClose.png" alt="menu button" />
            </a>
        </div>
        </div>
        </div>
        {/* <!-- offcanvas End --> */}

        </div>
    )
}

export default NavBar
