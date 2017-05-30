import React, {Component} from 'react';

import {Spinner, NonIdealState, Colors, Tag, Intent, Classes} from '@blueprintjs/core';

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
                            <div className="col-xs-6" key={hub.id}>
                                <div className="pt-card pt-elevation-0 pt-interactive box" style={{marginBottom: '15px'}}>
                                    <h5>
                                        <span className="pt-icon-large pt-icon-pulse" style={{color: (hub.status) === 'online' ? Colors.GREEN2 : (hub.status === 'offline') ? Colors.RED2 : Colors.ORANGE2, paddingRight: "5px"}}></span> 
                                        {hub.name} <small className={Classes.TEXT_MUTED}>{hub.serialNumber}</small>
                                    </h5>
                                    <div className="row">
                                        <div className="col-xs">
                                            <div className="box">
                                                <small className="pt-text-muted">Status</small><br />
                                                <Tag className={Classes.MINIMAL} intent={this.statusIntent(hub.status)}> <span className="pt-icon-pulse"></span> {hub.status}</Tag>
                                            </div>
                                        </div>
                                        <div className="col-xs">
                                            <div className="box">
                                                <small className="pt-text-muted">Sensors</small><br />
                                                <Tag className={Classes.MINIMAL} intent={Intent.NONE}><span className="pt-icon-graph"></span> {hub.sensors.length}</Tag>
                                            </div>
                                        </div>
                                        <div className="col-xs">
                                            <div className="box">
                                                <small className="pt-text-muted">Location</small><br />
                                                {hub.room.name 
                                                    ? ( <Tag className={Classes.MINIMAL} intent={Intent.PRIMARY}><span className="pt-icon-geolocation"></span> {hub.room.name}</Tag> ) 
                                                    : ( "-" )
                                                }
                                            </div>
                                        </div>
                                    </div>
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

    statusIntent(status) {
        return (status) === 'online' ? Intent.SUCCESS : (status === 'offline') ? Intent.DANGER : Intent.WARNING
    }
}

export default Hubs