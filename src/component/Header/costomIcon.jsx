import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/login";
import "./Header.css";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const CostomIcon = ({ profile }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const opened = Boolean(anchorEl);
  const { state } = CartState();
  const navigate = useNavigate();
  const openDialog = () => {
    setOpen(true);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="icon f_flex width">
        {profile !== "Sign in" ? (
          <div className="avtar wraper" onClick={handleClick}>
            <span>{`Hello, ${profile}`}</span>
          </div>
        ) : (
          <div className="avtar wraper" onClick={() => openDialog()}>
            <span>{profile}</span>
          </div>
        )}
        <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
          <div className=" wraper">
            <span>Cart</span>
            <ShoppingCartIcon />
            <span className="">{state.cart.length}</span>
          </div>
        </Link>
      </div>
      <Menu anchorEl={anchorEl} open={opened} onClose={handleClose}>
        <MenuItem
          onClick={handleClose}
          style={{ background: "none", padding: "0px 15px", fontSize: "14px" }}
        >
          Logout
        </MenuItem>
      </Menu>
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default CostomIcon;
