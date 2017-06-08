import React, {Component} from 'react';
import {Spinner, Colors} from '@blueprintjs/core';
import Header from './../components/Header';
import HeaderWidget from './../components/HeaderWidget';
import BarChart from './../components/BarChart';
import Moment from 'moment';
import _ from 'lodash'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { room } from './../endpoints/buildings';

const cleanChart = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
    "19", "20", "21", "22", "23"],
    datasets: [
        {
            label: 'Occupation',
            backgroundColor: "#79D1CF",
            borderColor: "#79D1CF",
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            label: 'Expected Occupation',
            backgroundColor: "#7af442",
            borderColor: "#7af442",
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    ]
};

class Room extends Component {
    state = {
        room: null,
        err: null,
        startDate: Moment(),
        chartData: _.clone(cleanChart)
    };
    
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date,
            chartData: this.processLogs(date)
        });
    }
    
    componentDidMount() {
        room(this.props.match.params.buildingId, this.props.match.params.roomId)
            .then(room => this.setState({ room: room }))
            .then(room => this.setState({ chartData: this.processLogs(this.state.startDate) }))
            .catch(err => this.setState({ err: err }))
    }

    processLogs(startDate) {
        const room = this.state.room
        var data = _.clone(cleanChart);
        
        _.forEach(room.logs, function(log) {
            if(Moment(log.time).format('D') === startDate.format('D')) {
                //check if index is already filled with an occupation
                //if so calculate new average. else add occupation to data array
                if(data.datasets[0].data[Moment(log.time).format('H')] > 0) {
                    var tempValueFromDataArray = data.datasets[0].data[Moment(log.time).format('H')];
                    var average = (log.occupation + tempValueFromDataArray) / 2;
                    data.datasets[0].data[Moment(log.time).format('H')] = _.floor(average);
                } else {
                    data.datasets[0].data[Moment(log.time).format('H')] = log.occupation
                }

            }

        });

        _.forEach(room.roster, function(value) {
            if(Moment(value.from).format('D') === startDate.format('D')) {                    
                data.datasets[1].data[Moment(value.from).format('H')] = value.amount
            }

        });

        data.labels = _.map(data.labels, (label) => `${label}:00`);

        data.labels = data.labels.splice(7,23);
        data.datasets[0].data = data.datasets[0].data.splice(7,23);
        data.datasets[1].data = data.datasets[1].data.splice(7,23);

        return data;
    }

    render() {
        Moment.locale('nl');
        const {room, chartData} = this.state

        return(<div>
                {room ? (
                <Header title={room.name}>
                    <div className="row">
                        <HeaderWidget label="size" icon="zoom-to-fit" value={room.size}/>
                        <HeaderWidget label="max capacity" icon="warning-sign" value={room.maxCapacity}/>
                        <HeaderWidget label="occupation" icon="info-sign" value={room.occupation}/>
                    </div>
                </Header>
                ) : (<div></div>)}
                
                <div style={{padding: '30px 50px', marginTop: '-70px', zIndex: 10, position: 'relative' }}> 
                    {room ? (
                        <div className="pt-card pt-elevation-0 pt-interactive">
                            <div className="row">
                                <div className="col-xs">
                                    <h2><span className="pt-icon-large pt-icon-timeline-bar-chart" style={{color: Colors.GRAY4}}></span>  Occupation vs. Expected occupation</h2>
                                    <div className="box pt-form-group">
                                        <label className="pt-label" htmlFor="example-form-group-input-a">
                                            Kies een datum
                                        </label>
                                        <div className="input-group">
                                        <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-calendar"></i></span>
                                        <DatePicker className="pt-form-control"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <BarChart data={chartData} />
                        </div>
                    
                    ) : (
                        <Spinner />
                    )}
            </div>
        </div>)
    }
}

export default Room