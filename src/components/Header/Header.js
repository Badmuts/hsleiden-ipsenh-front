import React, {Component} from 'react';
import img from './hsleiden.jpg';

class Header extends Component {
    render() {
        const wrapper = {
            position: 'relative',
            transform: 'skewY(-6deg)',
            marginTop: '-50px',
            marginBottom: '40px'
        };

        const colorFilter = {
            position: 'absolute',
            backgroundColor: '#1539CF',
            mixBlendMode: 'color',
            zIndex: 10,
            width: '100%',
            height: '100%'
        };

        const image = {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backgroundImage: `url(${this.props.bgImg || img})`,
            backgroundSize: 'cover',
            backgroundPosition: '0 -90px',
            backgroundBlendMode: 'darken',
            minHeight: '380px'
        };

        const content = {
            marginTop: '-180px',
            zIndex: '10',
            position: 'absolute',
            marginLeft: '50px',
            marginRight: '50px',
            width: '840px'
        };

        return (
            <div>
                {this.props.nav}
                <div style={wrapper}>
                    <div style={colorFilter}></div>
                    <div style={image}></div>
                </div>
                <div style={content}>
                    <h1 style={{ background: 'white', padding: '5px 10px 3px 3px', fontFamily: 'PT Sans', fontWeight: '700', fontSize: '4.5em', display: 'inline-block'}}>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header