import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/main" element={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
