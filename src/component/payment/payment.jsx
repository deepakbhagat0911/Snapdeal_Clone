import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/context";
import "./payment.css";
const Payment = ({ useremail, profile }) => {
  const { state, dispatch } = CartState();
  const [detail, setDetail] = useState({
    address: "",
    city: "",
    country: "",
  });
  const [cvv, setCVV] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [zip, setZip] = useState("");

  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    if (
      !detail.address ||
      !detail.city ||
      !detail.country ||
      !cvv ||
      !cardExpiry ||
      !cardNo ||
      !zip
    ) {
      setErrorMsg("Please fill all details");
      return;
    }
    setErrorMsg("");

    alert("Order placed successfully");
    dispatch({ type: "CLEAR_CART" });
    ~navigate("/");
  };
  const handleCVVChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 3);
    setCVV(numericValue);
  };
  const handleExpiryChange = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 4) {
      // Limit the length to 4 characters
      formattedValue = formattedValue.slice(0, 4);
    }

    if (formattedValue.length >= 2) {
      const month = parseInt(formattedValue.slice(0, 2));
      formattedValue = `${Math.min(Math.max(month, 1), 12)
        .toString()
        .padStart(2, "0")}${formattedValue.slice(2)}`;
    }

    if (formattedValue.length >= 4) {
      const year = parseInt(formattedValue.slice(2));
      formattedValue = `${formattedValue.slice(0, 2)}/${Math.min(
        Math.max(year, 0),
        99
      )
        .toString()
        .padStart(2, "0")}`;
    }

    setCardExpiry(formattedValue);
  };

  const handlecardNoChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
    setCardNo(numericValue);
  };
  const handleZipChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setZip(numericValue);
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
                <input type="text" placeholder="John miller" value={profile} />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input type="email" value={useremail} />
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
                    placeholder="eg. India"
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
                    id="zipInput"
                    maxLength={6}
                    value={zip}
                    onChange={handleZipChange}
                    placeholder="123123"
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
                <input type="text" placeholder="Enter Name" required />
              </div>

              <div className="inputBox">
                <span>Card number :</span>
                <input
                  type="text"
                  id="cardInput"
                  maxLength={16}
                  value={cardNo}
                  onChange={handlecardNoChange}
                  placeholder="card no."
                />
              </div>
              <div className="inputBox">
                <span>exp date:</span>
                <input
                  type="text"
                  id="card-expiry"
                  value={cardExpiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength="5" // Limit the input length to 7 characters (including slashes)
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>CVV :</span>
                  <input
                    type="text"
                    id="cvvInput"
                    maxLength={3}
                    value={cvv}
                    onChange={handleCVVChange}
                    placeholder="cvv"
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
