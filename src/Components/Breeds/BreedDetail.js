import React, { Component } from 'react';
import { connect } from 'react-redux';
import { breedDetail } from '../../Redux/User';
import Tabs from './Tabs';
import Header from '../Header/Header';
import Photos from './Photos';
import Genetics from './Genetics';

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
        var genetics = {
            energy: breed.energy,
            expected: breed.expectancy,
            height: breed.height,
            weight: breed.weight,
            bark: breed.barking
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
                        {/* <iframe width="420" height="315" title='detailed-info'
                        src={`https://www.youtube.com/embed/${breed.youtube}`}>
                    </iframe> */}
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
                        {/* <Photos /> */}
                    </div>

                    <div>
                        <Genetics props={genetics}/>
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