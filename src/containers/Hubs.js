import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Header from './../components/Header';
import Nav from './../components/Nav';
import {hubs} from './../endpoints/hubs.js';

const style = {
  padding: '30px 50px'
};

class Hubs extends Component {
    state = {
        hubs: []
    };

    componentDidMount() {
        hubs()
            .then(hubs => this.setState({ hubs: hubs }))
            .catch(err => this.setState({ err }))
    }

    renderNav() {
      return (<Nav />)
    }
    
    render() {
        const { hubs } = this.state;
        
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

                <div style={style} className="row">
                    {hubs ? (
                        hubs.map(hub => (
                            <div className="col-xs-6">
                                <div className="pt-card pt-elevation-0 pt-interactive box" key={hub.id}>
                                    <h5>{hub.name}</h5>
                                    <p>{hub.serialNumber}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="box">
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Hubs