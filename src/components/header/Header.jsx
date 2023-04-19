import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="container">
        <h1>Navbar</h1>
        <span>
          <h3>Home</h3>
          <h3>Contacts</h3>
          <h3>About</h3>
        </span>
        <div>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
