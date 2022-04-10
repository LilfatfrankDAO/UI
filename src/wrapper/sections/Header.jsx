import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "../../style/styles";

const Header = () => {
  const classes = styles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Link to={"/"}>Home</Link>
        <a
          href={
            "https://ipfs.infura.io/ipfs/QmddwJN4eZPhEcCq5TPg8KALSWzrZzaXr3DaUsjVrpuTTy"
          }
          rel={"noreferrer noopener"}
          target={"_blank"}
        >
          Whitepaper
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
