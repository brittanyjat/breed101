import React from 'react';
import Search from './Search';
import fullsize from '../../assets/fullsize.png';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function FullHeader() {
    return (
        <div className='full-header'>
            <div>
                <img src={fullsize} alt='full-logo' className='full-logo' />
            </div>

            <ul>
                <Link to='/'>Home</Link>
                <li>Spotlight</li>
                <li>About</li>
                <li>Explore</li>
            </ul>

            <div className='selection'>
                <Icon name='search' size='large' color='grey' />
                <Search />
            </div>
        </div>
    )
}
