import React, { Component } from 'react';
import MobileHeader from './MobileHeader';
import FullHeader from './FullHeader';


class MainHeader extends Component {
    render() {
        var winWidth = window.innerWidth;
        return (
            <div >
                {winWidth > 700 ? <FullHeader /> : <MobileHeader />}
                <div className='tagline'>
                    <h5>Educating humans since 2018</h5>
                </div>
            </div>
        )
    }
}

export default (MainHeader);