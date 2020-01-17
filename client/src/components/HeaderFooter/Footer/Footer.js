import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",

        background: "beige"
      }}
    >
      <span>&copy; {year} - Imran Irshad. </span>
    </div>
  );
}

export default Footer;
