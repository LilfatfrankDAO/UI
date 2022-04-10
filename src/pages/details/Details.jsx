import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { AppContext } from "../../context/Context";
import NFTCONFIG from "../../config/nftconfig.json";
import "./Details.scss";
import { fetchData } from "../../redux/data/dataActions";

const Details = () => {
  const { daoData, form } = useContext(AppContext);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [tokenUri, setTokenUri] = useState([
    "https://ipfs.infura.io/ipfs/QmT1DunTGXxau8eSMFRmhu7gsB6XkGGernciPBJwUpijJB",
    "https://ipfs.infura.io/ipfs/QmcK4pGhiBrgb9NYgP1DeTTHAKA4PCeHku7Lsu8qKSajMT",
    "https://ipfs.infura.io/ipfs/QmdDovQ85HNwHtWhbtFK9M8L8Cbwr65Dz7yAktduUuVHqu"
  ]);
  const [userAddresses, setUserAddresses] = useState();

  useEffect(() => {
    setUserAddresses(Object.keys(daoData?.votes)?.sort().reverse());
  }, []);

  const claimNFTs = () => {
    let gasLimit = NFTCONFIG.GAS_LIMIT;
    let totalGasLimit = String(gasLimit * 1);
    blockchain.smartContract.methods
      .createCollectible(tokenUri[0], userAddresses[0])
      .send({
        gasLimit: String(totalGasLimit),
        to: NFTCONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: 0
      })
      .once("error", (err) => {
        console.log(err);
      })
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        const tokenArr = [...tokenUri];
        tokenArr.shift();
        setTokenUri(tokenArr);
        const userArray = [...userAddresses];
        userArray.shift();
        setUserAddresses(userArray);
      });
  };

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
      <Button onClick={claimNFTs}>Mint NFTs</Button>
    </Box>
  );
};

export default Details;
