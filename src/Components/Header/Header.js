import React, { Component } from 'react';
import Search from './Search';
import fullsize from '../../assets/fullsize.png';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class MainHeader extends Component {
    render() {
        return (
            <div >
                <div className='full-header'>
                    <div>
                        <img src={fullsize} alt='full-logo' className='full-logo' />
                    </div>

                    <div className='links'>
                        <Link to='/'>Home</Link>
                        <li>Spotlight</li>
                        <li>About</li>
                        <Link to='/explore'>Explore</Link>
                    </div>

                    <div className='selection'>
                        <Icon name='search' size='large' color='grey' />
                        <Search />
                    </div>
                </div>
                <div className='tagline'>
                    <h5>Educating humans since 2018</h5>
                </div>
            </div>
        )
    }
}

export default (MainHeader);