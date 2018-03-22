import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Step1 extends Component {
    render() {
        return (
            <div className='quiz-container'>
                <h1>Find Your Perfect Breed</h1>
                <h4>Take our quiz to learn which breed is right for you!</h4>
                <Link to='/quiz/step2'>
                    <Button style={{marginTop: '20px'}} size='huge'>Start</Button>
                </Link>
            </div>
        )
    }
}