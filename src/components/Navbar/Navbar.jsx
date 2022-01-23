import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <Link className="link" to="/">
          <div className="logo">
            <strong>Crytos</strong>
          </div>
        </Link>
        <ul className="links">
          <li>
            <Link className="link" to="/">
              <p>Home</p>
            </Link>
          </li>

          <li>
            <Link className="link" to="/exchanges">
              <p>Exchanges</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/cryptocurrencies">
              <p>Cryptocurrencies</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/news">
              <p>News</p>
            </Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
      </nav>
    </div>
  );
}

export default Navbar;
