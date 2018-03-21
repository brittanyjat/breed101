import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

export default function Hamburger() {
    return (
        <div className='hamburger-menu slide-right'>
            <Link to='/' className='header-link'>
                <span className='span'>Home</span>
            </Link>
            <Link to='/about' className='header-link'>
                <span className='span'>About</span>
            </Link>
            <Link to='/explore' className='header-link'>
                <span className='span'>Explore</span>
            </Link>
            <Link to='/quiz/step1' className='header-link'>
                <span className='span'>Matcher</span>
            </Link>
        </div>
    )
}