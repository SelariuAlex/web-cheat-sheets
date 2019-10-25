import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import HtmlCheatSheet from './components/HtmlCheatSheet/HtmlCheatSheet';
import CssCheatSheet from './components/CssCheatSheet/CssCheatSheet';
import JsCheatSheet from './components/JsCheatSheet/JsCheatSheet';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/html" component={HtmlCheatSheet} />
        <Route exact path="/css" component={CssCheatSheet} />
        <Route exact path="/js" component={JsCheatSheet} />
      </Switch>
    </Router>
  );
}

export default App;
