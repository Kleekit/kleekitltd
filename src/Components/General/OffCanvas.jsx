import React from "react";

function OffCanvas() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="sidebar"
      aria-labelledby="sidebar-label"
    >
      <div className="offcanvas-body" id="off-body">
        <ul className="links-canvas">
          <li className="menu-link menu-active">
            <a href="/home">Home</a>
          </li>
          <li className="menu-link menu-active">
            <a href="/work">Work</a>
          </li>
          <li className="menu-link menu-active">
            <a href="/about">About</a>
          </li>
          <li className="menu-link menu-active">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="menuCloseCase">
        <div className="menuCloseBtn">
          <a
            href="#sidebar"
            className="d-block"
            data-bs-toggle="offcanvasCustom"
            role="button"
            aria-controls="sidebar"
          >
            <img
              className="menuImg"
              src="media/menuClose.png"
              alt="menu button"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
