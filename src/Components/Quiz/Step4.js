import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEnergy, updateAffection, updateShedding, quizMatch } from '../../Redux/quiz';

class Step4 extends Component {

    render() {
        const { energy, affection, shedding, updateEnergy, updateAffection, updateShedding, quizMatch, apartment, cats, dogs, children, size } = this.props;
        return (
            <div className='quiz-container'>
                <h1>Find Your Perfect Breed</h1>
                <span className='h3'>Rate your desired level of the following characteristics.</span>

                <div className='question-container'>
                    <span className='h3'>Maximum Energy Level</span>
                        <div>{energy}</div>
                        <input type='range' min={0} max={100} value={energy} onChange={(e) => updateEnergy(e.target.value)} />
                        <br />
                </div>

                <div className='question-container'>
                    <span className='h3'>Minimum Affection Level</span>
                    <div>{affection}</div>
                    <input type='range' min={0} max={100} value={affection} onChange={(e) => updateAffection(e.target.value)} />
                    <br />
                </div>

                <div className='question-container'>
                    <span className='h3'>Maximum Shedding Level</span>
                    <div>{shedding}</div>
                    <input type='range' min={0} max={100} value={shedding} onChange={(e) => updateShedding(e.target.value)} />
                    <br />
                </div>

                <Link to='/quiz/results' onClick={() => quizMatch({ energy, affection, shedding, apartment, cats, dogs, children, size })}>
                    <Button style={{ marginTop: '20px' }} >Results</Button>
                </Link>
            </div >
        )
    }
}

var mapStateToProps = (state) => {
    return {
        energy: state.quiz.energy,
        affection: state.quiz.affection,
        shedding: state.quiz.shedding,
        apartment: state.quiz.apartment,
        cats: state.quiz.cats,
        dogs: state.quiz.dogs,
        children: state.quiz.children,
        size: state.quiz.size
    }
}

export default connect(mapStateToProps, { updateEnergy, updateAffection, updateShedding, quizMatch })(Step4);