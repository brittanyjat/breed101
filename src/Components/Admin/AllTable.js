import React, { Component } from 'react';
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getAll, updateSelected, deleteBreed } from '../../Redux/reducer';
import axios from 'axios';
import { withRouter } from 'react-router';

class AllTable extends Component {

    componentDidMount() {
        const { getAll } = this.props;
        axios.get('/api/all').then(response => {
            getAll(response.data)
        });
    }

    handleSelect(id) {
        this.props.updateSelected(id)
    }

    render() {
        const {deleteBreed, breedList, selected } = this.props;
        const breedTable = breedList.map((breed, i) => {
            return (
                <Table.Row key={i}>
                    <Table.Cell collapsing>
                        <Checkbox slider 
                            onChange={() => this.handleSelect(breed.id)} 
                            checked={selected === breed.id}
                        />
                    </Table.Cell>
                    <Table.Cell>{breed.id}</Table.Cell>
                    <Table.Cell>{breed.name}</Table.Cell>
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
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {breedTable}
                        </Table.Body>

                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='4'>
                                    <Button floated='right' icon labelPosition='left' primary size='small' onClick={() => this.props.history.push('/add')}>
                                        <Icon name='paw' /> Add New Breed
                                    </Button>
                                    <Button size='small' color='olive'>Update</Button>
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
        selected: state.selected,
        breedList: state.breedList
    }
}

export default withRouter(connect(mapStateToProps, { getAll, updateSelected, deleteBreed })(AllTable));
