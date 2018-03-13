import React, { Component } from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateBreed } from '../../Redux/adminReducer';
import axios from 'axios';


class Update extends Component {
    constructor() {
        super();

        this.state = {
            updateValue: '',
            newValue: ''
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.updateBreed(id);
    }

    handleCheck(prop) {
        if (this.state.updateValue === '') {
            this.setState({ updateValue: prop })
        } else {
            this.setState({ updateValue: '' })
        }
    }

    submitChange() {
        const { id } = this.props.match.params;
        const { updateValue, newValue } = this.state
        axios.put(`/api/breed/${id}?value=${updateValue}&new=${newValue}`).then(res => {
            console.log(res)
        })
    }

    render() {
        // console.log(this.state.updateValue)
        const { affection, apartment, barking, cat, ceo, child, trait1, trait2, trait3, description, dog, energy, exercise, expectancy, grooming, health, height, hypoallergenic, intelligence, name, photo, playful, shedding, train, weight } = this.props.breedUpdate;

        return (
            <div>
                <h1>Update {name}</h1>
                <div>
                    <Table compact celled definition size='small'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Property</Table.HeaderCell>
                                <Table.HeaderCell>Value</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('name')} />
                                </Table.Cell>
                                <Table.Cell>Name</Table.Cell>
                                <Table.Cell>{name}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('affection')} />
                                </Table.Cell>
                                <Table.Cell>Affection</Table.Cell>
                                <Table.Cell>{affection}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('apartment')} />
                                </Table.Cell>
                                <Table.Cell>Apartment Friendly</Table.Cell>
                                <Table.Cell>{apartment}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('barking')} />
                                </Table.Cell>
                                <Table.Cell>Barking Tendencies</Table.Cell>
                                <Table.Cell>{barking}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('cat')} />
                                </Table.Cell>
                                <Table.Cell>Cat Friendly</Table.Cell>
                                <Table.Cell>{cat}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('ceo')} />
                                </Table.Cell>
                                <Table.Cell>CEO Link</Table.Cell>
                                <Table.Cell>{ceo}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('child')} />
                                </Table.Cell>
                                <Table.Cell>Child Friendly</Table.Cell>
                                <Table.Cell>{child}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('description')} />
                                </Table.Cell>
                                <Table.Cell>Description</Table.Cell>
                                <Table.Cell>{description}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('dog')} />
                                </Table.Cell>
                                <Table.Cell>Dog Friendly</Table.Cell>
                                <Table.Cell>{dog}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('energy')} />
                                </Table.Cell>
                                <Table.Cell>Energy Level</Table.Cell>
                                <Table.Cell>{energy}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('exercise')} />
                                </Table.Cell>
                                <Table.Cell>exercise</Table.Cell>
                                <Table.Cell>{exercise}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('expectancy')} />
                                </Table.Cell>
                                <Table.Cell>Expectancy</Table.Cell>
                                <Table.Cell>{expectancy}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('grooming')} />
                                </Table.Cell>
                                <Table.Cell>Grooming Needs</Table.Cell>
                                <Table.Cell>{grooming}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('health')} />
                                </Table.Cell>
                                <Table.Cell>General Health</Table.Cell>
                                <Table.Cell>{health}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('height')} />
                                </Table.Cell>
                                <Table.Cell>Height</Table.Cell>
                                <Table.Cell>{height}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('hypoallergenic')} />
                                </Table.Cell>
                                <Table.Cell>Hypoallergenic</Table.Cell>
                                <Table.Cell>{hypoallergenic}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('intelligence')} />
                                </Table.Cell>
                                <Table.Cell>Intelligence</Table.Cell>
                                <Table.Cell>{intelligence}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('photo')} />
                                </Table.Cell>
                                <Table.Cell>Photo URL</Table.Cell>
                                <Table.Cell>{photo}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('playful')} />
                                </Table.Cell>
                                <Table.Cell>Playful</Table.Cell>
                                <Table.Cell>{playful}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('shedding')} />
                                </Table.Cell>
                                <Table.Cell>Shedding Level</Table.Cell>
                                <Table.Cell>{shedding}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('train')} />
                                </Table.Cell>
                                <Table.Cell>Trainability</Table.Cell>
                                <Table.Cell>{train}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('weight')} />
                                </Table.Cell>
                                <Table.Cell>Weight</Table.Cell>
                                <Table.Cell>{weight}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('trait1')} />
                                </Table.Cell>
                                <Table.Cell>Trait 1</Table.Cell>
                                <Table.Cell>{trait1}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('trait2')} />
                                </Table.Cell>
                                <Table.Cell>Trait 2</Table.Cell>
                                <Table.Cell>{trait2}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider onChange={() => this.handleCheck('trait3')} />
                                </Table.Cell>
                                <Table.Cell>Trait 3</Table.Cell>
                                <Table.Cell>{trait3}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div>
                    <h2>Update {this.state.updateValue}</h2>
                    <input
                        type='text'
                        onChange={(e) => this.setState({ newValue: e.target.value })}
                    />
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

export default connect(mapStateToProps, { updateBreed })(Update);