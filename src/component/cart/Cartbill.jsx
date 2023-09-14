import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BillHeader = styled(Box)`
  padding: 15px 24px;
  border-bottom: 1px solid #f0f0f0;
`;

const BillContainer = styled(Box)`
  padding: 15px 24px;
  border-bottom: 1px solid #f0f0f0;
  & > p {
    margin-bottom: 15px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 15px;
  }
`;
const Price = styled(Box)`
  float: right;
`;
const Cartbill = ({ product, profile }) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [product]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    product.map((item) => {
      price += item.price;
      discount += (item.price * 30) / 100;
    });
    setPrice(price);
    setDiscount(discount);
  };
  const placeOrder = () => {
    if (profile == "Sign in") {
      alert("Please Log in");
      return;
    }
    navigate("/payment");
  };
  return (
    <Box>
      <BillHeader>
        <Typography style={{ color: "#878787" }}>Price Detail</Typography>
      </BillHeader>
      <BillContainer>
        <Typography>
          Price({product.length} item)
          <Price component={"span"}>${price.toFixed(2)}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component={"span"} style={{ color: "green" }}>
            - ${discount.toFixed(2)}
          </Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component={"span"} style={{ color: "green" }}>
            Free
          </Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component={"span"}>${(price - discount).toFixed(2)}</Price>
        </Typography>
        <Typography style={{ color: "green" }}>
          You will save ${discount.toFixed(2)} on this Order
        </Typography>
      </BillContainer>

      <Box textAlign={"end"} marginTop={"10px"}>
        <button className="buyBtn" onClick={placeOrder}>
          Place Order
        </button>
      </Box>
    </Box>
  );
};

export default Cartbill;
