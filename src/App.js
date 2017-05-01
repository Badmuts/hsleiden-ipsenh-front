import React, { Component } from 'react';
import './App.css';
import {
    Button,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);

class App extends Component {
  name = "🍪";
  
  render() {
    return (
      <div className="App">
        <nav className="pt-navbar pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">{this.name}</div>
            <button className="pt-button pt-minimal">Home</button>
            <button className="pt-button pt-minimal">Files</button>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <input className="pt-input" placeholder="Search files..." type="text" />
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-user"></button>
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <Popover content={menu} position={Position.BOTTOM_RIGHT}>
              <Button className="pt-minimal" iconName="cog" />
            </Popover>
          </div>
        </nav>
        <div className="Container">
          <h1>Welcome</h1>
          <p>Dit smaakt naar gravel 🍜</p>
          <p>The next level 🎮</p>
          <iframe width="100%" height="720" src="//www.youtube.com/embed/aZKyWjElfCE" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
