import React, { Component } from 'react';
import BreedVideo from './BreedVideo';
import { connect } from 'react-redux';
import { breedDetail } from '../../Redux/User';
import Tabs from './Tabs';
// import Photos from './Photos';
import Header from '../Header/Header';
import Photos from './Photos';

class BreedDetail extends Component {
    constructor(){
        super();

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.breedDetail(id);
    }

    render() {
        var breed = this.props.currentBreed;
        var bgImg = {
            backgroundImage: `url(${breed.photo})`
        }
        return (
            <div id='breed-detail'>
                <Header />
                <div className='breed-top-section' style={bgImg}>
                        <div>
                            <h1> {breed.name} </h1>
                        </div>
                        <div className='hero-traits'>
                            <span>{breed.trait1}</span>
                            <span>{breed.trait2}</span>
                            <span>{breed.trait3}</span>
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

                    <div className='tab-container'>
                        <hr />
                        <h2>{breed.name} Attributes</h2>
                        <hr />
                        <Tabs />
                    </div>

                    <div className='photo-container'>
                        <hr />
                        <h2>{breed.name} Photos</h2>
                        <hr />
                        <Photos />
                        Cute dog photos will go here!
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        currentBreed: state.user.currentBreed
    }
}

export default connect(mapStateToProps, { breedDetail })(BreedDetail);