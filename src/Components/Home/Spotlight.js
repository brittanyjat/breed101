import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpotlight } from '../../Redux/User';
import { Link } from 'react-router-dom';

class Spotlight extends Component {

    componentDidMount() {
        this.props.getSpotlight();
    }


    render() {
        const spotlights = this.props.spotlight.map((dog, i) => {
            return (
                <Link to={`/breed/${dog.id}`}>
                <div key={i}
                    className='card'
                    style={{ backgroundImage: `url(${dog.photo})`}}>

                    <div className='spotlight-name'>
                        <h4> {dog.name} </h4>
                    </div>

                </div>
                </Link>
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