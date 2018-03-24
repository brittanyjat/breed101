import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { quizMatch, sizeSelector } from '../../Redux/quiz';
import small_dog from '../../assets/small_dog.svg';
import dog from '../../assets/dog.svg';
import larg_dog from '../../assets/large_dog.svg';

class Step2 extends Component {
    render() {
        const { sizeSelector, size } = this.props;
        return (
            <div className='quiz-container step-2'>
                <h1>Find Your Perfect Breed</h1>
                <h4>Select the largest ideal size.</h4>
                <div className='size-select-container'>
                    <img src={small_dog} 
                        alt='small-dog'
                        className={size === 25 ? 'selected-size' : ''}
                        onClick={() => sizeSelector(25)} />
                    <div />

                    <img src={dog} 
                        alt='dog'
                        className={size === 50 ? 'selected-size' : ''}
                        onClick={() => sizeSelector(50)} />
                    <div />
                    
                    <img src={larg_dog}
                        alt='large-dog'
                        className={size === 250 ? 'selected-size' : ''}
                        style={{ transform: 'scaleX(-1)', marginTop: '20px' }}
                        onClick={() => sizeSelector(250)} />
                </div>
                <Link to='/quiz/step3' >
                    <Button style={{ marginTop: '20px' }} size='huge'>Next Step</Button>
                </Link>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        size: state.quiz.size
    }
}


export default connect(mapStateToProps, { quizMatch, sizeSelector })(Step2);