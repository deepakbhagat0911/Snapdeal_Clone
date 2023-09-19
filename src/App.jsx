import { useState } from "react";
import Header from "./component/Header/Header";
import "./App.css";
import Home from "./component/main/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailview from "./component/details/Detailview";
import Cart from "./component/cart/cart";
import { auth } from "./firebase";
import { Payment } from "./component/payment/payment";
import Mens from "./component/pages/mens";
import GridProducts from "./component/grid/GridProducts";
import Women from "./component/pages/womes";
import Pages from "./component/pages/other";
// import Summary from "./component/summary/summary";
const App = () => {
  const [profile, setProfile] = useState("Sign in");
  const [useremail, setUserEmail] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      setProfile(user.displayName);
      setUserEmail(user.email);
    } else {
      setProfile("Sign in");
    }
  });

  return (
    <>
      <BrowserRouter>
        <Header profile={profile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detailview />} />
          <Route path="/cart" element={<Cart profile={profile} />} />
          <Route
            path="/payment"
            element={<Payment useremail={useremail} profile={profile} />}
          />
          <Route path="/product" element={<GridProducts />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/page" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
