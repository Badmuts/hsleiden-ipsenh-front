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

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route path="/" component={Home} exact/>
          <Route path="/buildings" component={Buildings}/>
          <Route path="/rooms/:buildingId" component={Rooms}/>
        </div>
      </Router>
    )
  }
}

export default App
