import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import Buildings from './pages/Buildings'

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={Home}/>
          <Route path="/buildings" component={Buildings}/>
        </div>
      </Router>
    )
  }
}

export default App
