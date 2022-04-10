import "./Input.scss";
import {
  Box,
  Typography,
  TextField,
  FormHelperText,
  FormControl
} from "@mui/material";
import { Button } from "../../components";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const { daoData, callApi, setForm, form } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (daoData) {
      navigate("/details");
    }
  }, [daoData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    callApi(form.snapshot);
  };

  return (
    <Box className="input">
      <Typography style={{ fontSize: 80 }} variant={"h1"}>
        Fill these Details Below:
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <FormControl>
          <Typography style={{ fontSize: 36 }}>Snapshot Space Name</Typography>
          <FormHelperText>
            Learn more about Snapshot{" "}
            <a
              href="https://docs.snapshot.org/"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              here
            </a>
          </FormHelperText>
          <TextField
            id="snapshot-name"
            name="snapshot"
            type="text"
            placeholder="lilfatfrank.eth"
            className="field"
            onChange={(e) =>
              setForm({
                ...form,
                snapshot: e.target.value
              })
            }
          />
        </FormControl>
        <FormControl>
          <Typography style={{ fontSize: 36 }}>NFT Count</Typography>
          <TextField
            id="nft-count"
            name="nftcount"
            type="number"
            placeholder="1000"
            className="field"
            onChange={(e) =>
              setForm({
                ...form,
                count: e.target.value
              })
            }
          />
        </FormControl>
        <FormControl>
          <Typography style={{ fontSize: 36 }}>DAO Admin Address</Typography>
          <TextField
            id="admin-address"
            name="admin"
            type="text"
            placeholder="0x000000000000000000011111111111"
            className="field"
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value
              })
            }
          />
        </FormControl>
        <Button htmlType="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Input;
