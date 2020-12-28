import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Router, Route, Switch } from 'react-router-dom'
import PageLayout from './components/PageLayout/PageLayout'
import ListItems from './components/ListItems/ListItems'
import CompletedLIst from './components/CompletedList/CompletedList'
import Charts from './components/Charts/Charts'
import history from './history'

const App = () => {
  const theme = createMuiTheme({})
  return (
    <>
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
    </>
  )
}

export default App
