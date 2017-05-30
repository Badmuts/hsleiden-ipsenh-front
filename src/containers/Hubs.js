import React, {Component} from 'react';

import {Spinner, NonIdealState, Colors} from '@blueprintjs/core';

import Header from './../components/Header';
import Nav from './../components/Nav';

import {hubs} from './../endpoints/hubs.js';

const style = {
  padding: '30px 50px'
};

class Hubs extends Component {
    state = {
        hubs: [],
        err: null
    };

    componentDidMount() {
        hubs()
            .then(hubs => this.setState({ hubs: hubs }))
            .catch(err => this.setState({ err: err }))
    }

    renderNav() {
      return (<Nav />)
    }
    
    render() {
        const { hubs, err } = this.state;

        return (
            <div>
                <Header topNav={this.renderNav()} title="Hubs">
                    {/*<nav className="pt-navbar">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-input-group .modifier">
                                <span className="pt-icon pt-icon-filter"></span>
                                <input type="text" className="pt-input" placeholder="Zoeken..." />
                            </div>
                        </div>
                    </nav>*/}
                </Header>

                <div style={style} className={"row " + (!hubs.length ? "center-xs" : "")}>
                    {hubs && !err ? (
                        hubs.map(hub => (
                            <div className="col-xs-6">
                                <div className="pt-card pt-elevation-0 pt-interactive box" key={hub.id}>
                                    <h5> <span className="pt-icon-large pt-icon-pulse" style={{color: (hub.status) === 'online' ? Colors.GREEN2 : (hub.status === 'offline') ? Colors.RED2 : Colors.ORANGE2}}></span> {hub.name}</h5>
                                    <p>{hub.serialNumber}</p>
                                    <p>Sensors: {hub.sensors.length}</p>
                                </div>
                            </div>
                        ))
                    ) : (err) ? (
                        <NonIdealState title="Could not connect with the server" visual="offline" description="Try again later." />
                    ) : (
                        <NonIdealState action={<Spinner />} />
                    )}
                </div>
            </div>
        )
    }
}

export default Hubs