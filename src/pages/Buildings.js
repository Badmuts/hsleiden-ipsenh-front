import React, {Component} from 'react';
import {Spinner} from '@blueprintjs/core';
import {Link} from 'react-router-dom'
class Buildings extends Component {
    state = {
        buildings: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/buildings')
            .then(res => res.json())
            .then(buildings => {
                this.setState({ buildings })
            })
    }
    
    render() {
        const { buildings } = this.state
        return (
            <div className="Container p-30">
                <h2>Buildings</h2>
                {buildings ? (
                    buildings.map(building => (
                        <Link to="rooms">
                            <div className="pt-card pt-elevation-0 pt-interactive">
                                <h5>{building.name}</h5>
                                <p>{building.location}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        )
    }
}

export default Buildings