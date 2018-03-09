import React, { Component } from 'react';
// import axios from 'axios';
import BreedVideo from './BreedVideo';
import Needs from './Needs';
import { connect } from 'react-redux';
import { breedDetail } from '../../Redux/reducer';
import Adaptability from './Adaptability';


class BreedDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.breedDetail(id)
    }

    render() {
        // console.log(this.props)
        var breed = this.props.currentBreed;
        var bgImg = {
            backgroundImage: `url(${breed.photo})`
        }
        return (
            <div>
                <div className='breed-top-section'>
                    <div className='hero-section' style={bgImg}>
                        <div>
                            <h1>{breed.name}</h1>
                        </div>
                        <div className='hero-traits'>
                            <span>{breed.trait1}</span>
                            <span>{breed.trait2}</span>
                            <span>{breed.trait3}</span>
                        </div>
                    </div>
                </div>

                <div className='breed-bottom-section'>
                    <div className='intro-section'>
                        <h2>INTRODUCTION</h2>
                        <p>{breed.description}</p>
                        <br /><hr />
                    </div>

                    <div className='breed-video-main'>
                        <h3>{breed.name} Videos</h3>
                        <BreedVideo vid={breed.youtube} />
                    </div>

                    <div>
                        <Needs />
                        <Adaptability />
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        currentBreed: state.currentBreed
    }
}

export default connect(mapStateToProps, { breedDetail })(BreedDetail);