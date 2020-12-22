// import react from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import ListItems from "./components/ListItems/ListItems";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const theme = createMuiTheme({});
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageLayout>
          <ListItems />
        </PageLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
