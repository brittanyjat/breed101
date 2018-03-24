import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { connect } from 'react-redux';
import { breedDetail, getPhotos } from '../../Redux/User';
import { withRouter } from 'react-router';

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
        const { breedDetail, history, getPhotos } = this.props;
        getPhotos(selectedOption.value)
        breedDetail(selectedOption.value);
        history.push(`/breed/${selectedOption.value}`);
        window.scrollTo(0,250);
    }

    componentDidMount() {
        axios.get('/api/breedList').then(res => {
            this.setState({ options: res.data })
        })
    }

    render() {
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

export default withRouter(connect(null, { breedDetail, getPhotos })(Search));
