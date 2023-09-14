import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, styled, Drawer, Divider } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Categories from "../main/categories";
import CostomIcon from "./costomIcon";
import SearchBox from "./SearchBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartState } from "../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./Header.css";
import LoginDialog from "../login/login";
import { useNavigate } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
  const { state } = CartState();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        handleClose();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const openDialog = () => {
    setOpen(true);
    setMenu(false);
  };
  return (
    <>
      <section className="search" style={{ zIndex: "20000" }}>
        <div className="container c_flex">
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <div className="logo width">
              <span>snapdeal</span>
            </div>
          </Link>
          <SearchBox />
          <CostomIcon profile={profile} />
          <MenuBtn style={{ color: "#fff" }} onClick={handleOpen}>
            <Menu />
          </MenuBtn>
          <Drawer open={menu} onClose={handleClose} style={{ zIndex: "40000" }}>
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: "25px",
                color: "#e40046",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Snapdeal
            </div>
            <div className="menu-profile">
              {profile !== "Sign in" ? (
                <div>
                  <span>{`Hello, ${profile}`}</span>
                </div>
              ) : (
                <div onClick={() => openDialog()}>
                  <span>{profile}</span>
                </div>
              )}
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>Cart</span>
                  <ShoppingCartIcon />
                  <span>{state.cart.length}</span>
                </div>
              </Link>
              <span onClick={logout}>Log out</span>
            </div>
            <Divider />
            <Categories />
          </Drawer>
          <LoginDialog open={open} setOpen={setOpen} />
        </div>
      </section>
    </>
  );
};

export default Search;
