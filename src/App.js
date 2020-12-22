// import react from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import ListItems from "./components/ListItems/ListItems";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

const App = () => {
  const theme = createMuiTheme({});
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router history={history}>
          <PageLayout>
            <Switch>
              <Route path="/" exact component={ListItems} />
              <Route path="/stats" exact component="" />
              <Route path="/dates" exact component="" />
              <Route path="/feedback" exact component="" />
            </Switch>
          </PageLayout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
