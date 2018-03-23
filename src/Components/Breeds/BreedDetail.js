import React, { Component } from 'react';
import { connect } from 'react-redux';
import { breedDetail } from '../../Redux/User';
import Tabs from './Tabs';
import MainHeader from '../Header/Header';
import Photos from './Photos';
import Genetics from './Genetics';
import hypo from '../../assets/logo.png';
import { Label } from 'semantic-ui-react';

class BreedDetail extends Component {
    constructor(){
        super();

        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.breedDetail(id);
    }


    render() {
        console.log(window)
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
                <MainHeader />
                <div className='breed-top-section' style={bgImg}>
                        <div>
                            <h1> {breed.name} </h1>
                        </div>
                        <div className='hero-traits'>
                            <span className='fadeIn'>{breed.trait1}</span>
                            <span className='fadeIn trait-2'>{breed.trait2}</span>
                            <span className='fadeIn trait-3'>{breed.trait3}</span>
                        </div>
                    </div>

                <div className='breed-bottom-section'>
                    <div className='intro-section'>
                        <h2>INTRODUCTION</h2>
                        <p>{breed.description}</p>
                        <br />
                    </div>

                    <div className='tab-container'>
                        <hr />
                        <h2>{breed.name} Attributes</h2>
                        { breed.hypoallergenic === true ?
                            <div className='hypo-container'>
                                <img src={hypo} alt='hypoallergenic' className='hypo-badge'/>
                                <div className='hypo-description'>
                                    <Label style={{margin: 'auto'}}>
                                        This dog is more compatible with allergic people than other breeds.
                                    </Label>
                                </div>
                            </div>
                        : null }
                        <br/>
                        <Tabs />
                    </div>

                    <div className='detail-container'>
                        <hr/>
                        <h2>{breed.name} Photos</h2>
                        <Photos />
                        <br/>
                    </div>

                    <div className='detail-container'>
                        <hr/>
                        <h2>{breed.name} Genetics*</h2>
                        <Genetics props={genetics}/>
                        <h6>* based on median for breed</h6>
                        <br />
                    </div>

                    <div className='detail-container'>
                        <hr/>
                        <h2>{breed.name} Videos</h2>
                        <div className='video-wrapper'>
                            <iframe
                            title='detailed-info'
                            src={`https://www.youtube.com/embed/${breed.youtube}`}>
                            </iframe>
                        </div>
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