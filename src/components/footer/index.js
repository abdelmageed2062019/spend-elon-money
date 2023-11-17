import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100px", backgroundColor: "grey" }}
    >
      <div className="mt-5 mb-5 mx-5">Edited by Abdelmageed Hamdi</div>
      <a
        href="https://www.linkedin.com/in/abdelmageed-hamdy/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-5"
      >
        <i className="fab fa-linkedin"></i> Linkedin
      </a>
      <a
        href="https://github.com/abdelmageed2062019"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <i className="fab fa-github"></i> Github
      </a>
    </div>
  );
};

export default Footer;
