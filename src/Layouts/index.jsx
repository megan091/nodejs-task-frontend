import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function index(props) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        margin: "0px 0px",
      }}
    >
      <div>
        <Header />
      </div>
      <div style={{ flex: "1" }}>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default index;
