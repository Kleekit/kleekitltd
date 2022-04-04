import React from "react";

function NavBar(props) {
  return (
    <nav
      class="navbar navbar-expand-md fixed-top navbar-light py-1 px-0"
      id="mainNavbar"
    >
      <div class="container">
        <a href="/#" class="navbar-brand">
          <div className="logo">{props.children}</div>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <img
            className="img-fluid menuImg"
            src="media/menuBtn.png"
            alt="menu button"
          />
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                className="activeLink nav-link"
                tabIndex="1"
                href="#heroSection"
              >
                Home
              </a>
            </li>

            <li class="nav-item">
              <a
                className="activeLink nav-link"
                tabIndex="2"
                href="#mobileSection"
              >
                Work
              </a>
            </li>

            <li class="nav-item">
              <a
                className="activeLink nav-link"
                tabIndex="3"
                href="#aboutMeSection"
              >
                About
              </a>
            </li>

            <li class="nav-item">
              <a
                className="activeLink nav-link"
                tabIndex="4"
                href={`mailto:${props.email}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
