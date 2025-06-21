import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h2 className="error-title">Error, page not found</h2>
      <p className="error-message">
        Please go back to login <br />
      </p>
      <Link to="/login" className="error-button">
        Login
      </Link>
    </div>
  );
};

export default Error;