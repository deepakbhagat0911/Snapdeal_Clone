import { useState, useEffect } from "react";
import { CartState } from "../context/context";
import { Grid, Box, styled, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 15px",
  },
}));
const Header = styled(Box)`
  text-align: center;
  padding: 15px 24px;
  margin-top: 20%;
`;
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  margin-top: 30px;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
`;
const Image = styled("img")`
  width: 180px;
  height: 180px;
`;

const Text = styled(Box)`
  margin-top: 5px;
`;
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

const Cart = ({ profile }) => {
  const navigate = useNavigate();
  const [total, setAmount] = useState();

  const { state, dispatch } = CartState();
  useEffect(() => {
    setAmount(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);
  const product = state.cart;

  const placeOrder = () => {
    if (profile == "Sign in") {
      alert("Please Log in");
      return;
    }
    navigate("/payment");
  };
  return (
    <>
      {product.length <= 0 ? (
        <Header className="">
          <h3>Shopping Cart is Empty</h3>
        </Header>
      ) : (
        <>
          <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Box>
                <Typography>My Cart({state.cart.length})</Typography>
              </Box>
              {product.map((product) => (
                <Component>
                  <LeftComponent>
                    <Image src={product.image} alt="product" />
                  </LeftComponent>
                  <Box style={{ padding: "10px" }}>
                    <Text>{product.title}</Text>
                    <Text style={{ color: "green" }}>
                      Price ${product.price}
                    </Text>

                    <select
                      name=""
                      id=""
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_QTY",
                          payload: { id: product.id, qty: e.target.value },
                        })
                      }
                      style={{ padding: "2px 10px", margin: "5px 0" }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                    </select>

                    <Text>7 Days return policy</Text>
                    <Button
                      style={{ marginTop: "10px" }}
                      onClick={() =>
                        dispatch({ type: "REMOVE_TO_CART", payload: product })
                      }
                    >
                      Remove
                    </Button>
                  </Box>
                </Component>
              ))}
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box>
                <BillHeader>
                  <Typography style={{ color: "#878787" }}>
                    Price Detail
                  </Typography>
                </BillHeader>
                <BillContainer>
                  <Typography>
                    Price({product.length} item)
                    <Price component={"span"}>{Math.floor(total)}</Price>
                  </Typography>
                  <Typography>
                    Discount
                    <Price component={"span"} style={{ color: "green" }}>
                      - ${Math.floor((total * 30) / 100)}
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
                    <Price component={"span"}>
                      {Math.floor(total - (total * 30) / 100)}
                    </Price>
                  </Typography>
                  <Typography style={{ color: "green" }}>
                    You will save ${Math.floor((total * 30) / 100)} on this
                    Order
                  </Typography>
                </BillContainer>

                <Box textAlign={"end"} marginTop={"10px"}>
                  <button className="buyBtn" onClick={placeOrder}>
                    Place Order
                  </button>
                </Box>
              </Box>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default Cart;
