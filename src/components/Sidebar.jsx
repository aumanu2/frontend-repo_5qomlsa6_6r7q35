import React from "react";
import "./Sidebar.css";

function SidebarLayout({ children }) {
  return (
    <div className="layout">
      <div className="sidenav">
        <a href="#about" className="active">Overview</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="main">
        {children}
      </div>
    </div>
  );
}

export default SidebarLayout;
