import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-white fw-bold" href="/">
              News{" "}
              <span className="bg-white text-primary px-2 py-1 rounded">
                {" "}
                Portal{" "}
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        entertainment
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        general
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        health
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        science
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        technology
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled  text-white">Disabled</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
