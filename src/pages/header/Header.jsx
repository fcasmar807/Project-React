import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../../logo.webp" alt="Sefan Logo" />
      </div>

      <div className="header-search">
        <input type="text" placeholder="Búsqueda" />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="header-icons">
        <FaShoppingCart className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;