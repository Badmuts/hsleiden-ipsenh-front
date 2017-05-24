import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Footer from './components/Footer'

import Home from './containers/Home'
import Buildings from './containers/Buildings'

import pkg from './../package.json';

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            {/*<Nav />*/}

            <Route exact path="/" component={Home}/>
            <Route path="/buildings" component={Buildings}/>
          </div>
          <Footer version={pkg.version}/>
        </div>
      </Router>
    )
  }
}

export default App
