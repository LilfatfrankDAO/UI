import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "QuickSand"
    }
  }
});

export const styles = makeStyles({
  appBar: {
    boxShadow: "none !important",
    background: "#fff !important"
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    height: 120
  }
});

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "var(--white)",
  border: "2px solid var(--primary)",
  padding: 20
};
