import React from "react";
import { common } from "@material-ui/core/colors";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { Route, Switch, Redirect } from "react-router-dom";

import { routes } from "./constants/routes";
import "./App.css";
import { CardsList } from "./components/CardsList/CardsList";

export const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: "100px",
        },
      },
    },
    palette: {
      secondary: { main: common.white },
    },
  })
);

const App: React.FunctionComponent = () => (
  <div className="App">
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path={routes.carList} component={CardsList} />
        <Redirect to={routes.carList} />
      </Switch>
    </MuiThemeProvider>
  </div>
);

export default App;
