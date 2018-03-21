import React, { Component } from 'react';
import Search from './Search';
import mobile from '../../assets/mobile.png';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
    constructor() {
        super();

        this.state = {
            activeSearch: false,
            showMenu: false
        }
    }

    render() {
        console.log(window)
        return (
            <div>
                <div className='header'>

                    <div className='search-container'>
                        <Icon name='content' size='large' />
                        <div className='selection'>
                            {this.state.activeSearch ? <Search /> : null}
                            <Icon
                                name='search'
                                size='large'
                                onClick={() => this.setState({ activeSearch: !this.state.activeSearch })} />
                        </div>
                    </div>

                    <div className='full-header'>

                        <div className='split-header-container'>
                            <Link to='/' className='header-link'>
                                <span>Home</span>
                            </Link>
                            <Link to='/about' className='header-link'>
                                <span>About</span>
                            </Link>
                        </div>
                        
                        <img src={mobile} alt='logo' className='header-logo' />

                        <div className='split-header-container'>
                            <Link to='/explore' className='header-link'>
                                <span>Explore</span>
                            </Link>
                            <Link to='/quiz/step1' className='header-link'>
                                <span>Matcher</span>
                            </Link>
                        </div>
                    </div>

                    <div className='icon-container'>
                        <Link to='/' className='header-link'>
                            <span>Home</span>
                        </Link>
                        <Link to='/about' className='header-link'>
                            <span>About</span>
                        </Link>
                        <Link to='/explore' className='header-link'>
                            <span>Explore</span>
                        </Link>
                        <Link to='/quiz/step1' className='header-link'>
                            <span>Matcher</span>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default (MainHeader);