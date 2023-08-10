import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/login";
import "./Header.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
const CostomIcon = ({ profile }) => {
  const [open, setOpen] = useState(false);
  const { state } = CartState();
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
  return (
    <>
      <div className="icon f_flex width">
        <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
          <div className=" wraper">
            <span>Cart</span>
            <ShoppingCartIcon />
            <span className="">{state.cart.length}</span>
          </div>
        </Link>

        {profile == "Sign in" ? (
          <div className="avtar wraper" onClick={() => openDialog()}>
            <span>{profile}</span>
          </div>
        ) : (
          <div className="avtar wraper" onClick={logout}>
            <span
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "5px",
                borderRadius: "4px",
                fontSize: "13px",
              }}
            >
              Log out
            </span>
            {/* <span className="logout-text">Log out</span> */}
          </div>
        )}
      </div>
      <Divider />
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default CostomIcon;
