import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import Header from './../components/Header';
import Nav from './../components/Nav';

const style = {
  padding: '30px 50px'
};

class Hubs extends Component {
    state = {
        hubs: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/hubs')
            .then(res => res.json())
            .then(hubs => {
                this.setState({ hubs: hubs })
            })
            .catch(err => {
                this.setState({ err })
            })
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

                <div style={style}>
                    {hubs ? (
                        hubs.map(hub => (
                            <div className="pt-card pt-elevation-0 pt-interactive" key={hub.id}>
                                <h5>{hub.name}</h5>
                                <p>{hub.serialNumber}</p>
                            </div>
                        ))
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>
        )
    }
}

export default Hubs