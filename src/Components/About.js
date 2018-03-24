import React from 'react';
import MainHeader from './Header/Header';

export default function About() {
    return (
        <div>
            <MainHeader />
            <div className='about-bottom'>
                <h2>ABOUT</h2>
                <h4>The sole purpose for this site is to showcase what I have learned while attending DevMountain so far.</h4>

                <p>I take no credit for any of the information on this site, as it is for educational purposes only.</p>
                <div className='about-list'>
                    <h5>SOURCES</h5>
                    <a href='http://www.akc.org/' target='_blank' rel="noopener noreferrer"><h6>American Kennel Club</h6></a>
                    <a href='http://dogtime.com/' target='_blank' rel="noopener noreferrer"><h6>Dog Time</h6></a>
                    <a href='http://www.petwave.com/' target='_blank' rel="noopener noreferrer"><h6>Pet Wave</h6></a>
                    <a href='http://www.pexels.com/' target='_blank' rel="noopener noreferrer"><h6>Pexels</h6></a>
                    <a href='http://www.unsplash.com/' target='_blank' rel="noopener noreferrer"><h6>Unsplash</h6></a>
                </div>
                <div className='about-list'>
                    <h5>BUILT WITH</h5>
                    <h6>React</h6>
                    <h6>Node</h6>
                    <h6>Postgres</h6>
                    <h6>Redux</h6>
                    <h6>Dog CEO API</h6>
                </div>
            </div>
        </div>
    )
}