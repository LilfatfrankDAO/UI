import { useSnackbar } from "notistack";
import { createContext, useState } from "react";
import Web3 from "web3";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [daoData, setDaoData] = useState();
  const [form, setForm] = useState({
    snapshot: "",
    count: "",
    address: ""
  });
  const { enqueueSnackbar } = useSnackbar();

  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  };

  const callApi = async (snapshot) => {
    try {
      const response = await fetch(
        `https://daorewards.herokuapp.com/dao/${snapshot}`
      );
      const data = await response.json();
      setDaoData(JSON.parse(data));
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const providerValues = {
    daoData,
    callApi,
    form,
    setForm,
    ethEnabled
  };

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};
