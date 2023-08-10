import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled(Box)`
  flex-basis: calc(20% - 10px);
  height: 300px;
  width: 200px;
  cursor: pointer;
`;

const Image = styled("img")`
  border-radius: 20px;
  padding: 10px;
  width: 200px;
  height: 250px;
`;
const Slider2 = () => {
  return (
    <Box marginTop={5}>
      <Container>
        <Item>
          <Image src={"./brand-img/brand1.avif"} alt="" />
        </Item>
        <Item>
          <Image src={"./brand-img/brand2.avif"} alt="" />
        </Item>
        <Item>
          <Image src={"./brand-img/brand5.avif"} alt="" />
        </Item>
        <Item>
          <Image src={"./brand-img/brand4.avif"} alt="" />
        </Item>
        <Item>
          <Image src={"./brand-img/brand3.avif"} alt="" />
        </Item>
      </Container>
    </Box>
  );
};

export default Slider2;
