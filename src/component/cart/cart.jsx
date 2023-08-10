import { useState, useEffect } from "react";
import { CartState } from "../context/context";
import { Grid, Box, styled, Typography } from "@mui/material";

import Cartitem from "./Cartitem";
import Cartbill from "./Cartbill";

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

const Cart = ({ profile }) => {
  // const navigate = useNavigate();
  const [total, setAmount] = useState();
  const { state } = CartState();
  useEffect(() => {
    setAmount(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);
  const products = state.cart;
  return (
    <>
      {products.length <= 0 ? (
        <Header className="">
          <h3>Shopping Cart is Empty</h3>
        </Header>
      ) : (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box>
              <Typography>My Cart({state.cart.length})</Typography>
            </Box>
            {products.map((product) => (
              <Cartitem product={product} qty={product.qty} />
            ))}
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Cartbill products={products} profile={profile} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Cart;
