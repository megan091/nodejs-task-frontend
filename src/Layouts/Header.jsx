import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [sideBar, setSidebar] = useState(false);

  return (
    <>
      <div
        id="mySidenav"
        className="sidenav"
        style={{
          width: sideBar ? "250px" : "0px",
        }}
      >
        <a href="#" className="closebtn" onClick={() => setSidebar(false)}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <span
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setSidebar(true)}
        >
          &#9776; <span style={{ color: "red", marginLeft: "15px" }}>TIME</span>
        </span>

        <input
          type="text"
          className="search"
          name="search"
          placeholder="Search.."
        />
      </div>
    </>
  );
}

export default Header;
