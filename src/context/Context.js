import { useWeb3React } from "@web3-react/core";
import { useSnackbar } from "notistack";
import { createContext, useState } from "react";
import { injectors } from "../wallet/connectors";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { activate, account, active } = useWeb3React();
  const [daoData, setDaoData] = useState();
  const [networkVersion, setNetworkVersion] = useState();
  const [form, setForm] = useState({
    snapshot: "",
    count: "",
    address: ""
  });
  const { enqueueSnackbar } = useSnackbar();

  const notification = (message, variant = "error") =>
    enqueueSnackbar(message, { variant });

  const callApi = async (snapshot) => {
    try {
      const response = await fetch(
        `https://daorewards.herokuapp.com/dao/${snapshot}`
      );
      const data = await response.json();
      setDaoData(JSON.parse(data));
    } catch (error) {
      notification(error.message);
    }
  };

  const connect = async () => {
    try {
      await activate(injectors);
    } catch (error) {
      notification(error.message);
    }
  };

  const providerValues = {
    daoData,
    callApi,
    form,
    setForm,
    notification,
    connect,
    account,
    networkVersion,
    setNetworkVersion,
    connected: active
  };

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};
