import React from "react";
import { loginimg } from "./data";
import { Button, styled } from "@mui/material";
import "./Home.css";
import LoginDialog from "../login/login";
import { useState } from "react";
const LoginBtn = styled(Button)`
  background-color: #333;
`;
const LoginCard = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <section className="category Login-card">
        <div className="login-img">
          <img src={loginimg.Login} alt="" />
        </div>
        <div className="Logindata">
          <p style={{ textAlign: "center" }}>
            Login to your <br />
            Snapdeal account
          </p>
          <LoginBtn variant="contained" onClick={() => openDialog()}>
            Login
          </LoginBtn>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <span>New User?</span>
          <a
            onClick={() => openDialog()}
            style={{ textDecoration: "none", color: "#068FFF" }}
          >
            Register
          </a>
        </div>
        <LoginDialog open={open} setOpen={setOpen} />
      </section>
    </>
  );
};

export default LoginCard;
