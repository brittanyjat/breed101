import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Step1 extends Component {
    render() {
        return (
            <div>
                <h1>Find Your Perfect Breed</h1>
                <h3>Take our quiz to learn which breed is right for you!</h3>
                <Link to='/quiz/step2'>
                    <Button>Start</Button>
                </Link>
            </div>
        )
    }
}