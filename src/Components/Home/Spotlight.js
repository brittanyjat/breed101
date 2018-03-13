import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpotlight } from '../../Redux/User';

class Spotlight extends Component {

    componentDidMount() {
        this.props.getSpotlight();
    }


    render() {
        const spotlights = this.props.spotlight.map((dog, i) => {
            return (
                <div key={i} style={{ backgroundImage: `url(${dog.photo})`, height: '200px' }}>
                    <h3>{dog.name}</h3>
                </div>
            )
        })
        return (
            <div>
                {spotlights}
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        spotlight: state.user.spotlight
    }
}

export default connect(mapStateToProps, { getSpotlight })(Spotlight);