import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./styles.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar d-none d-md-flex flex-column"> 
        <div className="mt-4 d-flex justify-content-center">
          <Link to="/videos">
            <FontAwesomeIcon
              icon={"video"}
              size="2x"
              className="navbar-btn"
              color="white"
            />
          </Link>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Link to="/">
            <FontAwesomeIcon
              icon={"users"}
              size="2x"
              className="navbar-btn"
              color="white"
            />
          </Link>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <Link to="/">
            <FontAwesomeIcon icon={"bars"} size="2x" color="white" />
          </Link>
        </div>
      </div>
    );
  }
}
