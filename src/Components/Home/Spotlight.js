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
                <div key={i}
                    className='card'
                    style={{ backgroundImage: `url(${dog.photo})`}}
                    onClick={() => this.props.history.push(`/breed/${dog.id}`)}>

                    <div className='spotlight-name'>
                        <h4> {dog.name} </h4>
                    </div>

                </div>
            )
        })
        return (
            <div className='main-card-container'>
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


// style={{ backgroundImage: `url(${dog.photo})`, height: '200px' }}