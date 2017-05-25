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
          <Route path="/rooms/:buildingId/rooms/:roomId" component={Room}/>

          </div>
          <Footer version={pkg.version}/>

        </div>
      </Router>
    )
  }
}

export default App
