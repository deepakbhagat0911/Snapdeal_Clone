import { Box, Button, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CartState } from "../context/context";

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
const BtnComponent = styled(Box)`
  display: flex;
  border: 1px solid #f0f0f0;
  padding: 2px;
  width: max-content;
  gap: 10px;
  margin-top: 10px;
`;
const Text = styled(Box)`
  margin-top: 5px;
`;
const Cartitem = ({ product, qty }) => {
  const { state, dispatch } = CartState();
  const [count, setCount] = useState(1);
  const [total, setAmount] = useState();

  useEffect(() => {
    setAmount(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);

  const increment = (e) => {
    setCount(count + 1);
  };
  const decriment = () => {
    if (count <= 1) {
      dispatch({ type: "REMOVE_TO_CART", payload: product });
      return;
    }
    setCount(count - 1);
  };

  return (
    <Component>
      <LeftComponent>
        <Image src={product.image} alt="product" />
      </LeftComponent>
      <Box style={{ padding: "10px" }}>
        <Text>{product.title}</Text>
        <Text style={{ color: "green" }}>Price ${product.price}</Text>
        <BtnComponent>
          <RemoveIcon onClick={decriment} />
          <Typography>{count}</Typography>

          <AddIcon onClick={increment} />
        </BtnComponent>
        <Text>7 Days return policy</Text>
        <Button
          style={{ marginTop: "10px" }}
          onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: product })}
        >
          Remove
        </Button>
      </Box>
    </Component>
  );
};

export default Cartitem;
