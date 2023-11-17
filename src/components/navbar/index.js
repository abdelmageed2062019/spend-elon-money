import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container justify-content-center flex-column">
        <a className="navbar-brand" href="/">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
            alt=""
            width="100"
            height="100"
            className="rounded-circle "
          />
        </a>

        <h1>Spend Elon Mask Money</h1>
      </div>
    </nav>
  );
};

export default Navbar;
