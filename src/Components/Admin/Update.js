import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateBreed, updateSelected } from '../../Redux/adminReducer';
import axios from 'axios';

class Update extends Component {
    constructor() {
        super();

        this.state = {
            updates: []
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/update/${id}`).then(res => {
            this.setState({ updates: res.data })
        });
    }


    handleInput(prop, value) {
        this.setState(prevState => ({
            updates: {
                ...prevState.updates,
                [prop]: value
            }
        }))
    }

    submitChange() {
        const { id } = this.props.match.params;
        const { updates } = this.state;

        axios.put(`/api/breed/${id}`, updates).then(res => {
            this.props.updateSelected(null);
            this.props.history.push('/admin');
        })
    }

    render() {
        const { affection, apartment, barking, cat, ceo, child, trait1, trait2, trait3, youtube, description, dog, energy, exercise, expectancy, grooming, health, height, intelligence, name, photo, playful, shedding, train, weight } = this.state.updates;
        return (
            <div className='update-container'>
                <div>
                    <h1>Update {name}</h1>
                    <Table compact celled size='small' striped={true}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Property</Table.HeaderCell>
                                <Table.HeaderCell >Value</Table.HeaderCell>
                                <Table.HeaderCell>New Value</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Name</Table.Cell>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell children={<input type='text' onChange={(e) => this.handleInput('name', e.target.value)}></input>}></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Affection</Table.Cell>
                                <Table.Cell>{affection}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('affection', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Apartment Friendly</Table.Cell>
                                <Table.Cell>{apartment}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('apartment', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Barking Tendencies</Table.Cell>
                                <Table.Cell>{barking}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('barking', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Cat Friendly</Table.Cell>
                                <Table.Cell>{cat}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('cat', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>CEO Link</Table.Cell>
                                <Table.Cell>{ceo}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('ceo', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Child Friendly</Table.Cell>
                                <Table.Cell>{child}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('child', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Description</Table.Cell>
                                <Table.Cell>{description}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('description', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Dog Friendly</Table.Cell>
                                <Table.Cell>{dog}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('dog', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Energy Level</Table.Cell>
                                <Table.Cell>{energy}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('energy', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>exercise</Table.Cell>
                                <Table.Cell>{exercise}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('exercise', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Expectancy</Table.Cell>
                                <Table.Cell>{expectancy}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('expectancy', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Grooming Needs</Table.Cell>
                                <Table.Cell>{grooming}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('grooming', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>General Health</Table.Cell>
                                <Table.Cell>{health}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('health', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Height</Table.Cell>
                                <Table.Cell>{height}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('height', e.target.value)}></input></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Intelligence</Table.Cell>
                                <Table.Cell>{intelligence}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('intelligence', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Photo URL</Table.Cell>
                                <Table.Cell>{photo}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('photo', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Playful</Table.Cell>
                                <Table.Cell>{playful}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('playful', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Shedding Level</Table.Cell>
                                <Table.Cell>{shedding}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('shedding', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Trainability</Table.Cell>
                                <Table.Cell>{train}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('train', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Weight</Table.Cell>
                                <Table.Cell>{weight}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('weight', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Trait 1</Table.Cell>
                                <Table.Cell>{trait1}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('trait1', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Trait 2</Table.Cell>
                                <Table.Cell>{trait2}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('trait2', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Trait 3</Table.Cell>
                                <Table.Cell>{trait3}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('trait3', e.target.value)}></input></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>YouTube</Table.Cell>
                                <Table.Cell>{youtube}</Table.Cell>
                                <Table.Cell><input type='text' onChange={(e) => this.handleInput('youtube', e.target.value)}></input></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <button onClick={() => this.submitChange()}>Submit Change</button>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        breedUpdate: state.adminReducer.breedUpdate
    }
}

export default connect(mapStateToProps, { updateBreed, updateSelected })(Update);