import React, { Component } from 'react';
import axios from 'axios';

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
        var bgImg = {
            backgroundImage: `url(${this.state.breed.photo})`
        }
        return (
            <div>
                <div className='hero-section' style={bgImg}>
                    <div className='meet-the'>
                        <span>meet the</span>
                    </div>
                    <div>
                        <h1>{this.state.breed.name}</h1>
                    </div>
                    <div className='hero-traits'>
                        <span>{this.state.breed.trait1}</span>
                        <span>{this.state.breed.trait2}</span>
                        <span>{this.state.breed.trait3}</span>
                    </div>
                </div>
            </div>
        )
    }
}