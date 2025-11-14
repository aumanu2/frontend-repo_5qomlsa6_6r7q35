import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} ReactVibes • Crafted with <span>❤</span> • All rights reserved</p>
    </div>
  );
}

export default Footer;
