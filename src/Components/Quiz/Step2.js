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
            <div className='step-2'>
                <h1>Find Your Perfect Breed</h1>
                <h3>What size dog would you like? Select all that apply.</h3>
                <img src={small_dog} alt='small-dog' onClick={() => sizeSelector(25)} />
                <img src={dog} alt='dog' onClick={() => sizeSelector(50)} />
                <img src={larg_dog} alt='large-dog' style={{ transform: 'scaleX(-1)' }} onClick={() => sizeSelector(250)} />
                <Link to='/quiz/step3' >
                    <Button>Next Step</Button>
                </Link>
            </div>
        )
    }
}


export default connect(null, { quizMatch, sizeSelector })(Step2);