import React, { Component } from 'react';
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getAll, updateSelected, deleteBreed } from '../../Redux/adminReducer';
import axios from 'axios';
import { withRouter } from 'react-router';

class AllTable extends Component {

    componentDidMount() {
        this.props.getAll()
    }

    handleSelect(id) {
        this.props.updateSelected(id)
    }

    addSpotlight(selected) {
        var spotlight = null;
        const { breedList } = this.props;
        for (var i = 0; i < breedList.length; i++) {
            if (breedList[i].id === selected) {
                spotlight = breedList[i].spotlight
            }
        }
        axios.put(`/api/spotlight/${selected}`, { spotlight }).then(res => {
            this.props.updateSelected(null)
            this.props.getAll()
        })
    }

    render() {
        const { deleteBreed, breedList, selected, history } = this.props;
        const breedTable = breedList.map((breed, i) => {
            return (
                <Table.Row key={i}>
                    <Table.Cell collapsing>
                        <Checkbox slider
                            onChange={() => this.handleSelect(breed.id)}
                            checked={selected === breed.id} />
                    </Table.Cell>
                    <Table.Cell>{breed.id}</Table.Cell>
                    <Table.Cell>{breed.name}</Table.Cell>
                    <Table.Cell>{breed.spotlight.toString()}</Table.Cell>
                </Table.Row>
            )
        })

        return (
            <div className='breed-table-container'>
                <div>
                    <Table compact celled definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Spotlight</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {breedTable}
                        </Table.Body>

                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='4'>

                                    <Button floated='right' icon labelPosition='left' primary size='small' onClick={() => history.push(`/add`)}>
                                        <Icon name='paw' /> Add New Breed
                                    </Button>

                                    <Button floated='right' color='yellow' icon labelPosition='left' size='small' onClick={() => this.addSpotlight(selected)}>
                                        <Icon name='diamond' />Update Spotlight
                                    </Button>

                                    <Button size='small' color='olive' onClick={() => history.push(`/update/${selected}`)}>Update</Button>

                                    <Button size='small' color='red' onClick={() => deleteBreed(selected)}>Delete</Button>

                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        selected: state.adminReducer.selected,
        breedList: state.adminReducer.breedList
    }
}

export default withRouter(connect(mapStateToProps, { getAll, updateSelected, deleteBreed })(AllTable));
