import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="containerr">
        <div>
          <p>Contacts: +312-123-777</p>
          <span>
            <p>Leave a message</p>
            <input type="text" placeholder="Type here..." />
          </span>
        </div>
        <p>© 2023 Till next time, Marlen</p>
      </footer>
    </div>
  );
}

export default Footer;
