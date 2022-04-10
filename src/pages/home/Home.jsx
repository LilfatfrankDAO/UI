import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Sprite } from "../../components";
import { AppContext } from "../../context/Context";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const { networkVersion, setNetworkVersion } =
    useContext(AppContext);

  useEffect(() => {
    if (window.ethereum) {
      setNetworkVersion(window.ethereum.chainId);
    }
  }, []);

  return (
    <Box className="home">
      <Typography style={{ fontSize: 80 }} variant={"h1"}>
        Reward DAO Participation
      </Typography>
      <Box className="info">
        <Box className="details">
          <Typography variant={"h2"} style={{ fontSize: 36 }}>
            Issue NFTs to DAO members to reward their on-chain actity
          </Typography>
          <ul className="list">
            <li>Fill in your details</li>
            <li>Issue your NFTs</li>
            <li>Change them every month</li>
          </ul>
          <Box className="buttons">
            <Button onClick={() => navigate("/input")}>
              Let's Go{" "}
              <Sprite
                id={"arrow"}
                width={50}
                height={24}
                style={{ marginLeft: "5px" }}
              />
            </Button>
            {/* Connect button disabled for removing the dashboard functionality */}
            {/* <Button
              onClick={() => connectWallet(networkVersion)}
              type="secondary"
            >
              Connect Wallet
            </Button> */}
          </Box>
        </Box>
        <img src="Membership.png" alt="membership" width={700} height={400} />
      </Box>
    </Box>
  );
};

export default Home;
