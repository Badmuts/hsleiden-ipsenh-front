import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {
    Button,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";

import Header from './Header/Header.js'

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);

class Nav extends Component {
    state = {
        name: "Stuxnet."
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="pt-navbar pt-dark">
                        <div className="Container">
                            <div className="pt-navbar-group pt-align-left">
                                <div className="pt-navbar-heading">{this.state.name}</div>
                            </div>
                            <div className="pt-navbar-group pt-align-right">
                                <Link className="pt-button pt-minimal" to="/">Home</Link>
                                <Link className="pt-button pt-minimal" to="/buildings">Buildings</Link>
                                <Popover content={menu} position={Position.BOTTOM_RIGHT}>
                                    <Button className="pt-minimal" iconName="cog" />
                                </Popover>
                            </div>
                        </div>
                    </nav>
                    <Header />
                </div>
            </div>
        )
    }
}

export default Nav