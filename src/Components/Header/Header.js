import React, { Component } from 'react';
import Search from './Search';
import mobile from '../../assets/mobile.png';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import MobileLinks from './MobileLinks';

class MainHeader extends Component {
    constructor() {
        super();

        this.state = {
            activeSearch: false,
            showMenu: false
        }
    }

    render() {
        // console.log(window)
        return (
            <div>
                <div className='header'>

                    <div className='search-container'>
                        <div className='hamburger-main'>
                            <Icon name='content' size='large' style={{ cursor: 'pointer' }}
                                onClick={() => this.setState({ showMenu: !this.state.showMenu, activeSearch: false })} />
                            {this.state.showMenu ? <Hamburger /> : null}
                        </div>

                        <div className='selection'>
                            {this.state.activeSearch ? <Search /> : null}
                            <Icon
                                style={{ cursor: 'pointer' }}
                                name='search'
                                size='large'
                                onClick={() => this.setState({ activeSearch: !this.state.activeSearch, showMenu: false })} />
                        </div>
                    </div>

                    <div className='full-header'>

                        <div className='split-header-container'>
                            <Link to='/' className='header-link'>
                                <span>home</span>
                            </Link>
                            <Link to='/about' className='header-link'>
                                <span>about</span>
                            </Link>
                        </div>

                        <img src={mobile} alt='logo' className='header-logo' />

                        <div className='split-header-container'>
                            <Link to='/explore' className='header-link'>
                                <span>explore</span>
                            </Link>
                            <Link to='/quiz/step1' className='header-link'>
                                <span>wizard</span>
                            </Link>
                        </div>
                    </div>

                    <MobileLinks />
                </div>
            </div>
        )
    }
}

export default (MainHeader);