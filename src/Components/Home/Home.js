import React, { Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/bulldog/boston/images/random').then(res => {
            this.setState({dogs: res.data})
        })
    }

    render() {
        // console.log(this.state.dogs)
        return (
            <div>
                <Header />
                <div>
                    <img src={this.state.dogs.message} alt='random-dog' />
                </div>
            </div>
        )
    }
}