import React from 'react';

export default function Footer() {
    return (
        <div className='footer'>
            <span>Educating Humans Since 2018</span>
            <a href={process.env.REACT_APP_LOGIN}>Admin</a>
        </div>
    )
}