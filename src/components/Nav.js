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
import './Nav.css';
import img from './hsleiden.jpg';

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);

const wrapper = {
    position: 'relative',
    transform: 'skewY(-3deg)',
    marginTop: '-30px'
};
const colorFilter = {
    position: 'absolute',
    backgroundColor: '#1539CF',
    mixBlendMode: 'color',
    zIndex: 10,
    width: '100%',
    height: '100%'
};
const image = {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backgroundImage: `url(${img})`,
    backgroundBlendMode: 'darken',
    minHeight: '300px'
};

class Nav extends Component {
    state = {
        name: "Stuxnet."
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div style={wrapper}>
                        <div style={colorFilter}></div>
                        <div style={image}></div>
                    </div>
                </div>

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
            </div>
        )
    }
}

export default Nav