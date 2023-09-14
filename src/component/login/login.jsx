import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 50vh;
  width: 300px;
`;
const Wraper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginBtn = styled(Button)`
  background: #e40046;
  color: #fff;
  &:hover {
    background: #333; /* Change the background color on hover */
  }
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
  text-align: center;
`;
const CreateAccount = styled(Typography)`
  font-size: 13px;
  text-align: center;
  color: #2874f0;
  cursor: pointer;
`;
const initial = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};
const LoginDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [account, toggleAccount] = useState(initial.login);
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setOpen(false);
    toggleAccount(initial.login);
  };
  const toggleSignup = () => {
    toggleAccount(initial.signup);
    setError("");
  };

  const logIn = async (e) => {
    if (!values.email || !values.password) {
      setError("Fill all Details");
      return;
    }
    setError("");
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        handleClose();
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setError("Invalid Email");
          return;
        } else if (err.code === "auth/wrong-password") {
          setError("Invalid Password");
          return;
        } else if (err.code === "auth/user-not-found") {
          setError("User not found");
          return;
        }
      });
  };
  const signIn = async (e) => {
    if (!values.name || !values.email || !values.password) {
      setError("Fill all Details");
      return;
    }
    setError("");

    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: values.name,
        });
        handleClose();
        navigate("/");

        window.location.reload();
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setError("Enter Valid Email");
          return;
        } else if (err.code === "auth/weak-password") {
          setError("Password should be at least 6 characters ");
          return;
        }
      });
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Component>
          {account.view === "login" ? (
            <Wraper>
              <TextField
                variant="standard"
                label="Enter Email "
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <Text>
                Please provide your Mobile Number or Email to Login/ Sign Up on
                Snapdeal
              </Text>
              <b
                style={{
                  fontSize: "13px",
                  color: "crimson",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {error}
              </b>
              <LoginBtn onClick={logIn}>CONTINUE</LoginBtn>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Snapdeal? Create an account
              </CreateAccount>
            </Wraper>
          ) : (
            <Wraper>
              <TextField
                variant="standard"
                label="Enter Username"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <TextField
                variant="standard"
                label="Enter Email"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <b
                style={{
                  fontSize: "13px",
                  color: "crimson",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {error}
              </b>
              <LoginBtn onClick={signIn}>CONTINUE</LoginBtn>
            </Wraper>
          )}
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
