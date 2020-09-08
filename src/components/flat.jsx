import React, { Component } from 'react';

class Flat extends Component {

    render() {
        const style = {
            // "background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);"
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
        };

        return (
            <div className="flat card" style={style}>
                <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
                <div className="card-description">
                    <h2>{this.props.flat.name}</h2>
                </div>
            </div>
        );    
    }
}


export default Flat;