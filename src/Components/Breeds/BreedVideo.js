import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class BreedVideo extends Component {
    render() {
        const opts = {
            // height: '390',
            // width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        const videoid = this.props.vid;
        return (
            <div className='breed-video-container'>
                <YouTube
                    className='video-player'
                    videoId={videoid}
                    opts={opts}
                />
            </div>
        )
    }
}