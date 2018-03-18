import React, { Component } from 'react';
import MainHeader from '../Header/Header';
import Spotlight from './Spotlight';
import { Link } from 'react-router-dom';
import { Modal, Header } from 'semantic-ui-react';


export default class Home extends Component {

    render() {
        return (
            <div>
                <MainHeader />
                <div className='home-top home-section'>
                    <Modal basic trigger={
                        <div className='first-link hero'>
                            <div className='hero-single'>
                                <h2>Selecting</h2>
                                <h3>Your Breed</h3>
                            </div>
                        </div>}>
                        <Modal.Header>Importance Of Selecting The Right Breed</Modal.Header>
                        <Modal.Content>
                            <iframe id='ytplayer' type='text/html' width="420" height="315" title='info'
                                src="https://www.youtube.com/embed/ASxkyQKZE4k">
                            </iframe>
                        </Modal.Content>
                    </Modal>

                    <div className='second-link hero'>
                        <div className='hero-single'>
                            <h2>Sample</h2>
                            <h3>text</h3>
                        </div>
                    </div>

                    <div className='explore-link hero'>
                        <Link to='/explore'>
                            <div className='hero-single'>
                                <h2>Explore</h2>
                                <h3>Breeds</h3>
                            </div>
                        </Link>
                    </div>

                </div>
                <hr width='75%' />
                <br />

                <div className='home-spotlight home-section'>
                    <h1>Breeds of the Month</h1>
                    <Spotlight history={this.props.history} />
                    <br />
                    <hr width='75%' />
                    <br />
                </div>

                <div className='home-articles home-section'>
                    <h1>Recent Articles</h1>
                    <div className='article-container'>
                        <a href='https://topdogtips.com/resources-new-dog-owner/' className='home-article' style={{ backgroundImage: `url(${`https://topdogtips.com/wp-content/uploads/2017/03/Useful-Resources-for-A-New-Dog-Owner-1-1021x580.jpg`})` }}>
                            <h4>10 Useful Resources for A New Dog Owner</h4>
                        </a>

                        <a href='https://www.dogfoodadvisor.com/choosing-dog-food/brand-guidelines/' className='home-article' style={{ backgroundImage: `url(${`https://images.pexels.com/photos/770363/pexels-photo-770363.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb`})` }}>
                            <h4>Finding Superior Dog Food</h4>
                        </a>

                        <a href='https://www.cesarsway.com/dog-training/obedience/5-essential-commands-you-can-teach-your-dog' className='home-article' style={{ backgroundImage: `url(${`https://images.pexels.com/photos/237692/pexels-photo-237692.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb`})` }}>
                            <h4>5 Essential Commands To Teach Your Dog</h4>
                        </a>

                        <a href='https://itsadog.com/11-tips-make-dogs-first-vacation-success/' className='home-article' style={{ backgroundImage: `url(${`https://images.pexels.com/photos/928449/pexels-photo-928449.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb`})` }}>
                            <h4>11 Tips to Make Your Dog’s First Vacation a Success!</h4>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}