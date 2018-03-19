import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Step3 extends Component {
    render() {
        return (
            <div>
                <h1>Find Your Perfect Breed</h1>
                <h3>Do you live in an apartment?</h3>
                <h3>Will your dog be around cats?</h3>
                <h3>Will your dog be around other dogs?</h3>
                <h3>Will your dog be around children?</h3>
                <Link to='/quiz/step4'>
                    <Button>Next Step</Button>
                </Link>
            </div>
        )
    }
}