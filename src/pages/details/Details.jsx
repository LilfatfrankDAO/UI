import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Button } from "../../components";
import { AppContext } from "../../context/Context";
import "./Details.scss";

const Details = () => {
  const { daoData, form } = useContext(AppContext);

  return (
    <Box className={"details"}>
      <Typography variant="h1" style={{ fontSize: 80 }}>
        NFT Details:
      </Typography>
      <Box className={"info"}>
        <Typography style={{ fontSize: 36 }}>
          Snapshot Space: {form.snapshot}
        </Typography>
        <Typography style={{ fontSize: 36 }}>
          NFT Count: {form.count}
        </Typography>
        <Typography style={{ fontSize: 36 }}>
          Levels: 3<br />
          <ul>
            <li>Gold (10%)</li>
            <li>Silver (40%)</li>
            <li>Gold (50%)</li>
          </ul>
        </Typography>
        <Typography style={{ fontSize: 36 }}>
          No. of Proposals: {daoData?.num_of_proposals}
        </Typography>
        <Typography style={{ fontSize: 36 }}>
          Voter Count: {daoData?.vote_count}
        </Typography>
        <Typography style={{ fontSize: 36 }}>
          Max Votes by an address: {daoData?.max_vote}
        </Typography>
      </Box>
      <Button onClick={() => console.log("test")}>Mint NFTs</Button>
    </Box>
  );
};

export default Details;
