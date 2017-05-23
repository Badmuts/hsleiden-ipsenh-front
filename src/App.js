import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import Buildings from './pages/Buildings'
import Rooms from './pages/Rooms'
import Room from './pages/Room'

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route path="/" component={Home} exact/>
          <Route path="/buildings" component={Buildings}/>
          <Route path="/rooms/:buildingId" component={Rooms}/>
          <Route path="/rooms/:buildingId/rooms/:roomId" component={Room}/>
        </div>
      </Router>
    )
  }
}

export default App
