import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Results extends Component {
    render() {
        const { matched } = this.props;
        console.log(matched)
        const matches = matched.map((breed, i) => {
            return (
                <Link to={`/breed/${breed.id}`} key={i} >
                    <div className='breed-explore-card'>
                        <div className='explore-img' style={{ backgroundImage: `url(${breed.photo})` }}></div>
                        <div className='explore-name'><h3>{breed.name}</h3></div>
                    </div>
                </Link>
            )
        })

        return (
            <div className='quiz-container results-container'>
                <h1>Quiz Results</h1>
                <div className='breed-container'>
                    {matches}
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return { matched: state.quiz.matched }
}

export default connect(mapStateToProps, null)(Results)