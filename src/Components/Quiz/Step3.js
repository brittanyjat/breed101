import React, { Component } from 'react';
import { Button, Radio, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateApartment, updateCats, updateChildren, updateDogs } from '../../Redux/quiz';

class Step3 extends Component {
    render() {
        const { updateApartment, updateCats, updateDogs, updateChildren } = this.props;

        return (
            <div>
                <h1>Find Your Perfect Breed</h1>
                <h3>Do you live in an apartment?</h3>
                <div>
                    <h4>No</h4>
                    <Radio
                        onChange={() => updateApartment()}
                        toggle
                        value={'apartment'}
                    />
                    <h4>Yes</h4>
                </div>

                <h3>Will your dog be around cats?</h3>
                <div>
                    <h4>No</h4>
                    <Radio
                        onChange={() => updateCats()}
                        toggle
                        value={'cats'}
                    />
                    <h4>Yes</h4>
                </div>

                <h3>Will your dog be around other dogs?</h3>
                <div>
                    <h4>No</h4>
                    <Radio
                        onChange={() => updateDogs()}
                        toggle
                        value={'dogs'}
                    />
                    <h4>Yes</h4>
                </div>

                <h3>Will your dog be around children?</h3>
                <div>
                    <h4>No</h4>
                    <Radio
                        onChange={() => updateChildren()}
                        toggle
                        value={'children'}
                    />
                    <h4>Yes</h4>
                </div>

                <Link to='/quiz/step4'>
                    <Button>Next Step</Button>
                </Link>
            </div>
        )
    }
}

export default connect(null, { updateApartment, updateCats, updateDogs, updateChildren })(Step3);