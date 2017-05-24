import React, {Component} from 'react';
import img from './hsleiden.jpg';

const wrapper = {
    position: 'relative',
    transform: 'skewY(-3deg)',
    marginTop: '-30px',
    marginBottom: '20px'
};
const colorFilter = {
    position: 'absolute',
    backgroundColor: '#1539CF',
    mixBlendMode: 'color',
    zIndex: 10,
    width: '100%',
    height: '100%'
};

class Header extends Component {
    render() {
        const image = {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backgroundImage: `url(${this.props.bgImg || img})`,
            backgroundSize: 'cover',
            backgroundPosition: '0 -90px',
            backgroundBlendMode: 'darken',
            minHeight: '380px'
        };

        return (
            <div style={wrapper}>
                <div style={colorFilter}></div>
                <div style={image}></div>
            </div>
        )
    }
}

export default Header