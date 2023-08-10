import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton, styled, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Categories from "../main/categories";
import CostomIcon from "./costomIcon";
const MenuBtn = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Search = ({ profile }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [menu, setMenu] = useState(false);

  const handleOpen = () => {
    setMenu(true);
    console.log(menu);
  };
  const handleClose = () => {
    setMenu(false);
    console.log(menu);
  };
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <div className="logo width">
              <span>snapdeal</span>
            </div>
          </Link>
          <MenuBtn style={{ color: "#fff" }} onClick={handleOpen}>
            <Menu />
          </MenuBtn>
          <Drawer open={menu} onClose={handleClose}>
            <div style={{ textAlign: "center", marginTop: 20 }}>Profile </div>
            <CostomIcon profile={profile} />
            <Categories />
          </Drawer>
          <div className="search-box f_flex">
            <input type="text" placeholder="Search product & brands" />
            <span className="serchBtn">
              <SearchIcon style={{ fontSize: 16 }} />
              Serach
            </span>
          </div>
          <CostomIcon profile={profile} />
        </div>
      </section>
    </>
  );
};

export default Search;
