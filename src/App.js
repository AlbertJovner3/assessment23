import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SCP from './components/pages/SCP';
import Video from './components/pages/Video';
import SCPData from './components/pages/SCPData'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/scp' exact component={SCP} />
          <Route path='/video' component={Video} />
          <Route path='/scp/:_id' component={SCPData}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
