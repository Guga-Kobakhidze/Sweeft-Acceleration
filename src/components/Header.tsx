import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/history"}>History Page</Link>
    </header>
  );
};

export default Header;
