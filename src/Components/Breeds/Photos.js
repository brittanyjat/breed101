import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Photos extends Component {
    constructor() {
        super();

        this.state = {
            pics: []
        }
    }

    // componentDidMount(){
    //     const {id} = this.props.match.params;

    // }

    render() {
        // console.log(this.props)
        return (
            <div>photos</div>
        )
    }
}


export default withRouter(connect(null, {})(Photos));