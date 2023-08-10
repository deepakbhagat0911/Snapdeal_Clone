import React from "react";
import Search from "./Search";

import Head from "./head";
import "./Header.css";

const Header = ({ profile }) => {
  return (
    <>
      <div className="header">
        <Head />
        <Search profile={profile} />
      </div>
    </>
  );
};

export default Header;
