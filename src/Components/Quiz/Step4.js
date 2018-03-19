import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Step4 extends Component {
    render() {
        return (
            <div>
                <h1>Find Your Perfect Breed</h1>
                <h3>On a scale of 1 to 5 (ex: 1 is less; 5 is more), rate your desired level of the following characteristics.</h3>

                <h4>Energy Level</h4>
                <div>
                    <h4>No</h4>
                    <Radio
                        onChange={() => updateApartment()}
                        toggle
                        value={'apartment'}
                    />
                    <h4>Yes</h4>
                </div>
                <h4>Affection Level</h4>
                <h4>Shedding Level</h4>
                <Link to='/quiz/results'>
                    <Button>Next Step</Button>
                </Link>
            </div>
        )
    }
}

export default connect(null, {})(Step4);