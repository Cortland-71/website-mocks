import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home-page/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => { 
  return (
    <Router>
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
  );
}

ReactDOM.render(<App />, document.getElementById('root'));