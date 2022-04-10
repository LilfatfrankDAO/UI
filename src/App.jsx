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

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
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
    </SnackbarProvider>
  );
};

export default App;
