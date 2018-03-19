import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {
    render() {
        const { matched } = this.props;
        const matches = matched.map((breed, i) => {
            return (
                <div key={i}>
                    <h1>{breed.name}</h1>
                </div>
            )
        })
        return (
            <div>{matches}</div>
        )
    }
}

var mapStateToProps = (state) => {
    return { matched: state.quiz.matched }
}

export default connect(mapStateToProps, null)(Results)