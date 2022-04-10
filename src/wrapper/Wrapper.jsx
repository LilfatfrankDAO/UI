import { Box, Toolbar } from "@mui/material";
import { memo } from "react";
import { Content, Header } from "./sections";

const Wrapper = () => {
  return (
    <Box>
      <Header />
      <Toolbar style={{ height: 120 }} />
      <Content />
    </Box>
  );
};

export default memo(Wrapper);
