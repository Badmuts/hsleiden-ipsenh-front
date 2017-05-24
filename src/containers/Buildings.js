import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';

const style = {
  padding: '30px 50px'
};

class Buildings extends Component {
    state = {
        buildings: null
    };

    componentDidMount() {
        fetch('http://localhost:3000/buildings')
            .then(res => res.json())
            .then(buildings => {
                this.setState({ buildings })
            })
            .catch(err => {
                this.setState({ err })
            })
    }
    
    render() {
        const { buildings } = this.state;
        
        return (
            <div style={style}>
                <h2>Buildings</h2>
                {buildings ? (
                    buildings.map(building => (
                        <div className="pt-card pt-elevation-0 pt-interactive">
                            <h5>{building.name}</h5>
                            <p>{building.location}</p>
                        </div>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        )
    }
}

export default Buildings