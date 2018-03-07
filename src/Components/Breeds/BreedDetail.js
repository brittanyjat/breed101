import React, { Component } from 'react';
import axios from 'axios';

export default class BreedDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            breed: []
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        axios.get(`/api/hero/${id}`).then(res => {
            this.setState({breed: res.data})
        })
    }

    render(){
        console.log(this.state.breed)
        return(
            <div>
                <div>
                    <img src={this.state.breed.photo} alt='dog'/>
                    <h1>{this.state.breed.name}</h1>
                    <h2>{this.state.breed.trait1}</h2>
                    <h2>{this.state.breed.trait2}</h2>
                    <h2>{this.state.breed.trait3}</h2>
                </div>
            </div>
        )
    }
}