import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Carousel from 'nuka-carousel';

class Photos extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         current: '',
    //         time: 3500
    //     }
    // }

    // componentWillMount() {
    //     this.changeImg();
    // }


    // changeImg(i = 0) {
    //     const { time } = this.state;
    //     const { photos } = this.props;

    //     this.setState({ current: photos[i] })

    //     if (i < photos.length - 1) {
    //         i++;
    //     } else {
    //         i = 0;
    //     }
    //     setTimeout(() => this.changeImg(i), time);
    // }

    render() {
        const { photos } = this.props;
        const carouselOptions = photos.map((pic, i) => {
            return (
                <img src={pic} key={i} alt='breed' style={{maxHeight: '100%', maxWidth: '100%'}}/>
            )
        })
        return (
            <div className='photo-container'>
                <Carousel
                    autoplay={true}
                    cellAlign='center'
                    renderBottomCenterControls={false}
                >
                    {carouselOptions}
                </Carousel>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        photos: state.user.photos,
        loading: state.user.loading
    }
}

export default withRouter(connect(mapStateToProps, null)(Photos));