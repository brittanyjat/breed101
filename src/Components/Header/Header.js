import React, { Component } from 'react';
import windowSize from 'react-window-size';
import MobileHeader from './MobileHeader';
import FullHeader from './FullHeader';


class Header extends Component {
    render() {
        const { windowWidth } = this.props;
        return (
            <div >
                {windowWidth > 700 ? <FullHeader /> : <MobileHeader />}
                <div className='tagline'>
                    <h5>Educating humans since 2018</h5>
                </div>
            </div>
        )
    }
}

export default windowSize(Header);