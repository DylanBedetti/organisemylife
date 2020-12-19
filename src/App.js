// import react from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import ListItems from "./components/ListItems/ListItems";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <PageLayout>
        <ListItems />
      </PageLayout>
    </>
  );
};

export default App;
