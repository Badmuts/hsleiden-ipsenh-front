import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

const options = {
    responsive:true,
    scaleBeginAtZero:true,
    barBeginAtOrigin:true,
    maintainAspectRatio: true,
    scales: {
        yAxes:[{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

export default class BarChart extends Component {
    render() {

        return (
            <div>
                <Bar
                    data={this.props.data}
                    options={options}
                />
            </div>
        );
    }
}