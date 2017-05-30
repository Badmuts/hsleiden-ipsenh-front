import React, { Component } from 'react';
import Header from './../components/Header';
import HeaderWidget from './../components/HeaderWidget';
import { Tag, Intent, Classes} from '@blueprintjs/core';

class HubsDetails extends Component {
    render() {
        const hub = this.props.location.state.hub;
        return (
            <div>
                <Header title={`Hub ${hub.name}`}>
                    <div className="row">
                        <HeaderWidget label="status" icon="pulse" value={hub.status}/>
                        <HeaderWidget label="sensors" icon="graph" value={hub.sensors.length}/>
                        <HeaderWidget label="location" icon="geolocation" value={hub.room.name}/>
                    </div>
                </Header>
                <div style={{padding: "30px 50px"}}>
                    <div className="box" style={{marginBottom: '15px'}}>
                        <h2>Sensors</h2>
                        <table className="pt-table pt-bordered" style={{width: "100%"}}>
                            <thead>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                            {hub.sensors.map(sensor => (
                                <tr key={sensor.id}>
                                    <td>{sensor.name}</td>
                                    <td>{sensor.sensorType}</td>
                                    <td><code>{sensor.status.toString()}</code></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <hr />
                        <h2>Room</h2>
                        {hub.room.name ? (
                            <div className="pt-card pt-elevation-0 pt-interactive box" style={{marginBottom: '15px'}}>
                                <h5>
                                    <span className="pt-icon-large pt-icon-home" style={{paddingRight: '5px'}}></span> 
                                    {hub.room.name}
                                </h5>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <small className="pt-text-muted" >Size</small><br />
                                            <Tag className={Classes.MINIMAL} intent={Intent.PRIMARY}> <span className="pt-icon-zoom-to-fit"></span> {hub.room.size} m<sup>2</sup></Tag>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <small className="pt-text-muted">Max. Capacity</small><br />
                                            <Tag className={Classes.MINIMAL} intent={Intent.DANGER}><span className="pt-icon-segmented-control"></span> {hub.room.maxCapacity}</Tag>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <small className="pt-text-muted">Occupation</small><br />
                                            <Tag className={Classes.MINIMAL}><span className="pt-icon-people"></span> {hub.room.occupation}</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="pt-callout pt-intent-warning pt-icon-warning-sign">
                                    <h5>This hub is not connected with a room</h5>
                                    You should select the room this hub is located in via the dropdown below.
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box pt-form-group">
                                            <label className="pt-label" for="example-form-group-input-a">
                                                Building
                                                <span className="pt-text-muted">(required)</span>
                                            </label>
                                            <div className="pt-form-content">
                                                <div className="pt-select pt-large">
                                                    <select>
                                                        <option selected>Choose a building...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        <option value="4">Four</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box pt-form-group">
                                            <label className="pt-label" for="example-form-group-input-a">
                                                Room
                                                <span className="pt-text-muted">(required)</span>
                                            </label>
                                            <div className="pt-form-content">
                                                <div className="pt-select pt-large">
                                                    <select disabled>
                                                        <option selected>Choose a room...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        <option value="4">Four</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )}
                    </div>
                    <pre>{JSON.stringify(hub, null, 2)}</pre>
                </div>
            </div>
        )
    }
}

export default HubsDetails