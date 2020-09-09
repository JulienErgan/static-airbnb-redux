import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {

    handleClick = () => {
        // REDUX ACTION
        this.props.selectFlat(this.props.flat);
    }

    render() {
        const style = {
            // "background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);"
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
        };

        let classes = "flat card";
        if (this.props.flat === this.props.selectedFlat) {
            classes += " selected";
        }

        return (
            <div className={classes} style={style} onClick={this.handleClick}>
                <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
                <div className="card-description">
                    <h2>{this.props.flat.name}</h2>
                </div>
            </div>
        );    
    }
}

import { selectFlat } from '../actions/index';

function mapDispatchToProps(dispatch) { 
	return bindActionCreators(
        { selectFlat: selectFlat },
        dispatch 
    );
}

function mapReduxStateToProps(reduxState) { 
	return {
		selectedFlat: reduxState.selectedFlat 
	};
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);