import "./style/app.scss";
import Wrapper from "./wrapper/Wrapper";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./style/styles";
import { AppContextProvider } from "./context/Context";
import { SnackbarProvider } from "notistack";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { useEffect } from "react";
import { connect } from "./redux/blockchain/blockchainActions";

const App = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  function getLibrary(provider) {
    return new Web3(provider);
  }

  useEffect(() => {
    dispatch(connect());
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  const getData = () => {
    if (!blockchain.account && !blockchain.smartContract) {
      dispatch(fetchData(blockchain.account));
    }
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Switch>
                <Route path="/*" element={<Wrapper />} />
              </Switch>
            </Router>
          </ThemeProvider>
        </AppContextProvider>
      </Web3ReactProvider>
    </SnackbarProvider>
  );
};

export default App;
