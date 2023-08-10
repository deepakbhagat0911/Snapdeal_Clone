import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/context";
import "./payment.css";
const Payment = () => {
  const { state, dispatch } = CartState();
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    cNum: "",
    month: "",
    yesr: "",
    cvv: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!detail.name || !detail.address) {
      setErrorMsg("fill all detail");
      return;
    }
    setErrorMsg("");

    alert("Order placed successfully");
    dispatch({ type: "CLEAR_CART" });
    ~navigate("/");
  };
  return (
    <>
      <div className="payment-container">
        <div className="form">
          <div className="row">
            <div className="col">
              <h3 className="title">billing Address</h3>
              <div className="inputBox">
                <span>Full Name :</span>
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setDetail((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input
                  type="text"
                  placeholder="Enter Email"
                  onChange={(e) =>
                    setDetail((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="inputBox">
                <span>Address :</span>
                <input
                  type="text"
                  placeholder="Enter address"
                  onChange={(e) =>
                    setDetail((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
              </div>
              <div className="inputBox">
                <span>City :</span>
                <input
                  type="text"
                  placeholder="Enter city"
                  onChange={(e) =>
                    setDetail((prev) => ({ ...prev, city: e.target.value }))
                  }
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>Country :</span>
                  <input
                    type="text"
                    placeholder="Enter country"
                    onChange={(e) =>
                      setDetail((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="inputBox">
                  <span>Zip code :</span>
                  <input
                    type="text"
                    placeholder="Enter zip code "
                    maxLength={6}
                    onChange={(e) =>
                      setDetail((prev) => ({ ...prev, zip: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="title">Payment Details</h3>

              <div className="inputBox">
                <span>Card accepted :</span>
                <img src={"./payment-img/card_img.png"} alt="" />
              </div>
              <div className="inputBox">
                <span>Name on card :</span>
                <input type="text" placeholder="Enter Name" />
              </div>

              <div className="inputBox">
                <span>Card number :</span>
                <input
                  type="text"
                  maxLength={16}
                  placeholder="Enter Card number"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, cNum: e.target.value }))
                  }
                />
              </div>
              <div className="inputBox">
                <span> month :</span>
                <input
                  type="text"
                  placeholder="Enter month"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, month: e.target.value }))
                  }
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>Year :</span>
                  <input
                    type="text"
                    placeholder="Enter Year"
                    onChange={(e) =>
                      setValue((prev) => ({ ...prev, yesr: e.target.value }))
                    }
                  />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input
                    type="text"
                    placeholder="Enter cvv "
                    onChange={(e) =>
                      setValue((prev) => ({ ...prev, cvv: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <b
              style={{
                fontSize: "13px",
                color: "crimson",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {errorMsg}
            </b>

            <button className="submitBtn" onClick={handlesubmit}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Payment };
