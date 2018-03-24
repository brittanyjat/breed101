import React from 'react';
import MainHeader from './Header/Header';

export default function About() {
    return (
        <div>
            <MainHeader />
            <div className='about-bottom'>
                <h2>ABOUT THE SITE</h2>
                <h4>The sole purpose for this site is to showcase what I have learned while attending DevMountain so far.</h4>

                <p>I take no credit for any of the information on this site, as it is for educational purposes only.</p>
                <ul className='about-list'>
                    <h5>SOURCES</h5>
                    <a href='http://www.akc.org/' target='_blank' rel="noopener noreferrer"><li>American Kennel Club</li></a>
                    <a href='http://dogtime.com/' target='_blank' rel="noopener noreferrer"><li>Dog Time</li></a>
                    <a href='http://www.petwave.com/' target='_blank' rel="noopener noreferrer"><li>Pet Wave</li></a>
                    <a href='http://www.pexels.com/' target='_blank' rel="noopener noreferrer"><li>Pexels</li></a>
                    <a href='http://www.unsplash.com/' target='_blank' rel="noopener noreferrer"><li>Unsplash</li></a>
                </ul>
                <ul className='about-list'>
                    <h5>BUILT WITH</h5>
                    <li>React</li>
                    <li>Node</li>
                    <li>Postgres</li>
                    <li>Redux</li>
                    <li>Dog CEO API</li>
                </ul>
            </div>
        </div>
    )
}