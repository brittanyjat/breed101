import React, { Component } from 'react';
import axios from 'axios';
import BreedVideo from './BreedVideo';

export default class BreedDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breed: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/breed/${id}`).then(res => {
            this.setState({ breed: res.data })
        })
    }

    render() {
        console.log(this.state.breed)
        const { breed } = this.state;
        var bgImg = {
            backgroundImage: `url(${breed.photo})`
        }
        return (
            <div>
                <div className='breed-top-section'>
                    <div className='hero-section' style={bgImg}>
                        <div className='meet-the'>
                            <span>meet the</span>
                        </div>
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
                    </div>


                    <div>
                        <BreedVideo vid={breed.youtube} />
                    </div>
                </div>
            </div>
        )
    }
}