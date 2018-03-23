import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { connect } from 'react-redux';
import { breedDetail } from '../../Redux/User';

import 'react-select/dist/react-select.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            selectedOption: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selectedOption) {
        const { breedDetail } = this.props;
        breedDetail(selectedOption.value)
    }

    componentDidMount() {
        axios.get('/api/breedList').then(res => {
            this.setState({ options: res.data })
        })
    }

    render() {
        console.log(this.props.history)
        const { selectedOption } = this.state;
        return (
            <div style={{ width: '250px' }} className='search-main'>
                <Select
                    name='breed-search'
                    value={selectedOption.value}
                    options={this.state.options}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default connect(null, { breedDetail })(Search);
