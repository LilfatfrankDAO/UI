import { Box } from "@mui/material";
import { Routes as Switch, Route } from "react-router-dom";
import { Details, Home, Input } from "../../pages";

const Content = () => {
  return (
    <Box style={{ padding: 30 }}>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/details" element={<Details />} />
      </Switch>
    </Box>
  );
};

export default Content;
