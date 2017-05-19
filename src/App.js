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
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Popover content={menu} position={Position.BOTTOM_RIGHT}>
              <Button className="pt-minimal" iconName="cog" />
            </Popover>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
