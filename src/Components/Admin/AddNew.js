import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { update, clearState } from '../../Redux/adminReducer';
import axios from 'axios';


class Admin extends Component {

    componentWillMount() {
        this.props.clearState();
    }

    submitBreed() {
        let body = {
            name: this.props.name,
            photo: this.props.photo,
            ceo: this.props.ceo,
            description: this.props.description,
            hypoallergenic: this.props.hypoallergenic,
            trait1: this.props.trait1,
            trait2: this.props.trait2,
            trait3: this.props.trait3,
            weight: this.props.weight,
            height: this.props.height,
            energy: this.props.energy,
            expected: this.props.expected,
            barking: this.props.barking,
            intelligence: this.props.intelligence,
            playful: this.props.playful,
            affection: this.props.affection,
            train: this.props.train,
            apartment: this.props.apartment,
            cat: this.props.cat,
            dog: this.props.dog,
            child: this.props.child,
            exercise: this.props.exercise,
            health: this.props.health,
            grooming: this.props.grooming,
            shedding: this.props.shedding
        }
        axios.post('/api/new', body).then(res => {
            console.log(res)
        })

    }

    render() {
        const { update } = this.props;

        var styles = {
            width: '50%',
            margin: 'auto'
        }

        var imgStyle = {
            height: '200px',
            width: '200px'
        }
        return (
            <div style={styles}>
                <div>
                    <img src={this.props.photo} alt='preview' style={imgStyle} />
                    <Button type='submit' onClick={() => this.submitBreed()} >Submit</Button>
                </div>

                <div>
                    <Form className='all-forms'>
                        <div>
                            <h1>MAIN</h1>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='First Name' onChange={(e) => update('name', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Photo</label>
                                <input placeholder='Photo' onChange={(e) => update('photo', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Dog CEO URL</label>
                                <input placeholder='Dog CEO URL' onChange={(e) => update('ceo', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Description</label>
                                <input placeholder='Description' onChange={(e) => update('description', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>HypoAllergenic</label>
                                <input placeholder='HypoAllergenic' onChange={(e) => update('hypoallergenic', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>YouTube URL</label>
                                <input placeholder='YouTube URL' onChange={(e) => update('youtube', e.target.value)} />
                            </Form.Field>
                        </div>

                        <div>
                            <h1>TRAITS</h1>
                            <Form.Field>
                                <label>Trait 1</label>
                                <input placeholder='Trait 1' onChange={(e) => update('trait1', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Trait 2</label>
                                <input placeholder='Trait 2' onChange={(e) => update('trait2', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Trait 3</label>
                                <input placeholder='Trait 3' onChange={(e) => update('trait3', e.target.value)} />
                            </Form.Field>
                        </div>

                        <div>
                            <h1>Genetics</h1>
                            <Form.Field>
                                <label>Weight</label>
                                <input placeholder='Weight' onChange={(e) => update('weight', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Height</label>
                                <input placeholder='Height' onChange={(e) => update('height', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Energy</label>
                                <input placeholder='Energy' onChange={(e) => update('energy', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Life Expectancy</label>
                                <input placeholder='Life Expectancy' onChange={(e) => update('expected', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Barking</label>
                                <input placeholder='Barking' onChange={(e) => update('barking', e.target.value)} />
                            </Form.Field>
                        </div>

                        <div>
                            <h1>Main</h1>
                            <Form.Field>
                                <label>Intelligence</label>
                                <input placeholder='Intelligence' onChange={(e) => update('intelligence', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Playful</label>
                                <input placeholder='Playful' onChange={(e) => update('playful', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Affection Level</label>
                                <input placeholder='Affection Level' onChange={(e) => update('affection', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Training</label>
                                <input placeholder='Training' onChange={(e) => update('train', e.target.value)} />
                            </Form.Field>
                        </div>

                        <div>
                            <h1>Adaptability</h1>
                            <Form.Field>
                                <label>Apartment</label>
                                <input placeholder='Apartment' onChange={(e) => update('apartment', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Cat Friendly</label>
                                <input placeholder='Cat Friendly' onChange={(e) => update('cat', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Dog Friendly</label>
                                <input placeholder='Dog Friendly' onChange={(e) => update('dog', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Child Friendly</label>
                                <input placeholder='Child Friendly' onChange={(e) => update('child', e.target.value)} />
                            </Form.Field>
                        </div>

                        <div>
                            <h1>Needs</h1>
                            <Form.Field>
                                <label>Exercise</label>
                                <input placeholder='Exercise' onChange={(e) => update('exercise', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Health</label>
                                <input placeholder='Health' onChange={(e) => update('health', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Grooming Needs</label>
                                <input placeholder='Grooming Needs' onChange={(e) => update('grooming', e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>Shedding Level</label>
                                <input placeholder='Shedding Level' onChange={(e) => update('shedding', e.target.value)} />
                            </Form.Field>
                        </div>

                    </Form>
                </div>
            </div>
        )
    }
}
var mapStateToProps = (state) => {
    return {
        name: state.adminReducer.name,
        photo: state.adminReducer.photo,
        ceo: state.adminReducer.ceo,
        description: state.adminReducer.description,
        hypoallergenic: state.adminReducer.hypoallergenic,
        trait1: state.adminReducer.trait1,
        trait2: state.adminReducer.trait2,
        trait3: state.adminReducer.trait3,
        weight: state.adminReducer.weight,
        height: state.adminReducer.height,
        energy: state.adminReducer.energy,
        expected: state.adminReducer.expected,
        barking: state.adminReducer.barking,
        intelligence: state.adminReducer.intelligence,
        playful: state.adminReducer.playful,
        affection: state.adminReducer.affection,
        train: state.adminReducer.train,
        apartment: state.adminReducer.apartment,
        cat: state.adminReducer.cat,
        dog: state.adminReducer.dog,
        child: state.adminReducer.child,
        exercise: state.adminReducer.exercise,
        health: state.adminReducer.health,
        grooming: state.adminReducer.grooming,
        shedding: state.adminReducer.shedding,
        youtube: state.adminReducer.youtube
    }
}

export default connect(mapStateToProps, { update, clearState })(Admin);