import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled(Box)``;

const Image = styled("img")`
  cursor: pointer;
  width: 100%;
  height: 300px;
  @media (max-width: 1100px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
`;

const Slider2 = () => {
  return (
    <Box marginTop={5}>
      <Container>
        <Link to={"/product"}>
          <Item>
            <Image
              src={"https://i.ytimg.com/vi/U5Q3Du2W9a0/maxresdefault.jpg"}
              alt=""
            />
          </Item>
        </Link>
        <Link to={"/product"}>
          <Item>
            <Image
              src={
                "https://assets.ajio.com/cms/AJIO/MOBILE/05092023-UHP-M-IconicSale-4080.jpg"
              }
              alt=""
            />
          </Item>
        </Link>
      </Container>
    </Box>
  );
};

export default Slider2;
