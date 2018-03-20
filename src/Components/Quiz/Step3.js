import React, { Component } from 'react';
import { Button, Radio } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateApartment, updateCats, updateChildren, updateDogs } from '../../Redux/quiz';

class Step3 extends Component {
    render() {
        const { updateApartment, updateCats, updateDogs, updateChildren } = this.props;

        return (
            <div className='quiz-container'>
                <h1>Find Your Perfect Breed</h1>
                
                <div className='question-container'>
                    <span className='h3'>Do you live in an apartment?</span>
                    <div className='radio-container'>
                        <span>No</span>
                        <Radio
                            style={{ margin: 'auto' }}
                            onChange={() => updateApartment()}
                            toggle
                            value={'apartment'} />
                        <span>Yes</span>
                    </div>
                </div>

                <div className='question-container'>
                    <span className='h3'>Will your dog be around cats?</span>
                    <div className='radio-container'>
                        <span>No</span>
                        <Radio
                            style={{ margin: 'auto' }}
                            onChange={() => updateCats()}
                            toggle
                            value={'cats'}
                        />
                        <span>Yes</span>
                    </div>
                </div>

                <div className='question-container'>
                    <span className='h3'>Will your dog be around other dogs?</span>
                    <div className='radio-container'>
                        <span>No</span>
                        <Radio
                            style={{ margin: 'auto' }}
                            onChange={() => updateDogs()}
                            toggle
                            value={'dogs'}
                        />
                        <span>Yes</span>
                    </div>
                </div>
                <div className='question-container'>
                    <span className='h3'>Will your dog be around children?</span>
                    <div className='radio-container'>
                        <span>No</span>
                        <Radio
                            style={{ margin: 'auto' }}
                            onChange={() => updateChildren()}
                            toggle
                            value={'children'}
                        />
                        <span>Yes</span>
                    </div>
                </div>

                <Link to='/quiz/step4'>
                    <Button style={{ marginTop: '20px' }} >Next Step</Button>
                </Link>
            </div>
        )
    }
}

export default connect(null, { updateApartment, updateCats, updateDogs, updateChildren })(Step3);