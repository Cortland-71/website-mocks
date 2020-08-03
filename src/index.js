import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home-page/home';
import Top from './components/top';
import Nav from './components/nav';
import { CssBaseline, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { customTheme } from './customTheme';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box height="100vh">
        <Top setNavOpen={setNavOpen} />
        <Router>
          <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              {/* <Projects /> */}
            </Route>
            <Route path="/contact">
              {/* <Contact /> */}
            </Route>
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));