import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className="container text-center p-5 border-bottom"
      style={{ color: "#424242" }}
    >
      <h1 className="my-4" style={{ fontSize: "2.9rem" }}>
        Technology
      </h1>
      <p style={{ fontSize: "1.25rem" }}>
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="mb-4">
        Check out our <Link to="/">investment offerings →</Link>
      </p>
    </div>
  );
}

export default Hero;
