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
    setOpen(false);
    toggleAccount(initial.login);
  };
  const toggleSignup = () => {
    toggleAccount(initial.signup);
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
      })
      .catch((err) => {
        setError(err.message);
        console.log("error-", err.message);
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
      })
      .catch((err) => {
        setError(err.message);
        console.log("error-", err.message);
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
              <button
                className="buyBtn"
                onClick={signIn}
                style={{ margin: "20px auto" }}
              >
                CONTINUE
              </button>
            </Wraper>
          )}
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
