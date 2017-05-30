import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Footer from './components/Footer'

import Home from './containers/Home'
import Buildings from './containers/Buildings'
import Rooms from './containers/Rooms'
import Room from './containers/Room'
import Hubs from './containers/Hubs'


import pkg from './../package.json';


class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            {/*<Nav />*/}


          <Route path="/" component={Home} exact/>
          <Route path="/buildings" component={Buildings}/>
          <Route path="/rooms/:buildingId" component={Rooms}/>
          <Route path="/rooms/:buildingId/:roomId" component={Room}/>
          <Route path="/hubs" component={Hubs}/>

          </div>
          <Footer version={pkg.version}/>

        </div>
      </Router>
    )
  }
}

export default App
