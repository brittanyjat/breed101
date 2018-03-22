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
        const { sizeSelector } = this.props;
        return (
            <div className='quiz-container step-2'>
                <h1>Find Your Perfect Breed</h1>
                <h4>Select the largest ideal size.</h4>
                <div className='size-select-container'>
                    <img src={small_dog} alt='small-dog' onClick={() => sizeSelector(25)} />
                    <div />
                    <img src={dog} alt='dog' onClick={() => sizeSelector(50)} />
                    <div />
                    <img src={larg_dog} alt='large-dog' style={{ transform: 'scaleX(-1)', marginTop: '20px'}} onClick={() => sizeSelector(250)}/>
                </div>
                <Link to='/quiz/step3' >
                    <Button style={{ marginTop: '20px' }} size='huge'>Next Step</Button>
                </Link>
            </div>
        )
    }
}


export default connect(null, { quizMatch, sizeSelector })(Step2);