import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPhotos } from '../../Redux/User';

class Photos extends Component {
    constructor() {
        super();

        this.state = {
            current: '',
            time: 3000
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPhotos(id);
        this.changeImg();
    }

    changeImg(i = 0) {
        const { current, time } = this.state;
        const { photos } = this.props;

        this.setState({ current: photos[i] })

        if (i < photos.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(() => this.changeImg(i), time);
    }

    render() {
        return (
            <div>
                <img src={this.state.current} />
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        photos: state.user.photos
    }
}

export default withRouter(connect(mapStateToProps, { getPhotos })(Photos));