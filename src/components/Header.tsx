// Header component for navigation bar

import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../assets/styles/Components";

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <div className="headercontent">
        <Link className="link" to={"/"}>
          Home Page
        </Link>
        <Link className="link" to={"/history"}>
          History Page
        </Link>
      </div>
    </HeaderStyle>
  );
};

export default Header;
