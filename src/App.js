import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageLayout from "./components/PageLayout/PageLayout"
import ListItems from "./components/ListItems/ListItems"
import CompletedLIst from "./components/CompletedList/CompletedList"
import Charts from "./components/Charts/Charts"
import history from "./history"
import { Provider } from "react-redux"
import reducers from "./reducers"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

const App = () => {
  const theme = createMuiTheme({})
  return (

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <PageLayout>
            <Switch>
              <Route path='/' exact component={ListItems} />
              <Route path='/completed' exact component={CompletedLIst} />
              <Route path='/stats' exact component={Charts} />
              <Route path='/feedback' exact component='' />
            </Switch>
          </PageLayout>
        </Router>
      </ThemeProvider>
    </Provider>

  )
}

export default App
