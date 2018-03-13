import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='home-top'>

                    <div className='first-link hero'>
                        <div className='hero-single'>
                            <h2>Sample</h2>
                            <h3>text</h3>
                        </div>
                    </div>

                    <div className='second-link hero'>
                        <div className='hero-single'>
                            <h2>Sample</h2>
                            <h3>text</h3>
                        </div>
                    </div>

                    <div className='explore-link hero'>
                        <div className='hero-single'>
                            <h2>Explore</h2>
                            <h3>Breeds</h3>
                        </div>
                    </div>

                </div>
                <hr width='75%'/>
                <div className='home-spotlight'>
                    <h1>Breeds Of The Month</h1>
                </div>

            </div>
        )
    }
}