import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { update } from '../Redux/reducer';


class Admin extends Component {

    render() {
        const { update } = this.props;
        // console.log(this.props)
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
                <div><img src={this.props.photo} alt='preview' style={imgStyle}/></div>
                <div>
                    <Form>

                        <h1>MAIN</h1>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='First Name' onChange={(e) => update('name', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Photo</label>
                            <input placeholder='Photo' onChange={(e) => update('photo', e.target.value)} />
                        </Form.Field>

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


                        <Button type='submit' >Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
var mapStateToProps = (state) => {
    return {
        name: state.name,
        photo: state.photo,
        trait1: state.trait1,
        trait2: state.trait2,
        trait3: state.trait3,
        weight: state.weight,
        height: state.height,
        energy: state.energy,
        expected: state.expected,
        barking: state.barking,
        intelligence: state.intelligence,
        playful: state.playful,
        affection: state.affection,
        train: state.train,
        apartment: state.apartment,
        cat: state.cat,
        dog: state.dog,
        child: state.child,
        exercise: state.exercise,
        health: state.health,
        grooming: state.grooming,
        shedding: state.shedding
    }
}



export default connect(mapStateToProps, { update })(Admin);

// 9786 South 500 West 6:30 Thursday 