import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';

class Adapability extends Component {
    render() {
        const { apartment, cat, dog, child } = this.props;
        return (
            <div className='adaptability-container'>
                <h3>Apartment Friendly</h3>
                <Progress percent={apartment || 0} color='blue' progress />
                <h3>Cat Friendly</h3>
                <Progress percent={cat || 0} color='blue' progress />
                <h3>Dog Friendly</h3>
                <Progress percent={dog || 0} color='blue' progress />
                <h3>Child Friendly</h3>
                <Progress percent={child || 0} color='blue' progress />
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        apartment: state.currentBreed.apartment,
        dog: state.currentBreed.dog,
        cat: state.currentBreed.cat,
        child: state.currentBreed.child
    }
}

export default connect(mapStateToProps, {})(Adapability);