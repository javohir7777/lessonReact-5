import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <div className="container">
        <nav className="nav">
          <div className="nav-menu__flex">
            <ul className="nav-menu">
              <li className="nav-menu__item">
                <NavLink to="/debts">Debts</NavLink>
              </li>
              <li className="nav-menu__item">
                <NavLink to="/transactions">Transactions</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
