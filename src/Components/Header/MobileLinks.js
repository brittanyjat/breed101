import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileLinks() {
    return (
        <div className='icon-container'>
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
                <span className='span'>Wizard</span>
            </Link>
        </div>
    )
}