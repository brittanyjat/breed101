import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import windowSize from 'react-window-size';
import Select from 'react-select';

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
        const { history } = this.props;
        history.push(`/breed/${selectedOption.value}`)
    }

    componentDidMount() {
        axios.get('/api/breedList').then(res => {
            this.setState({ options: res.data })
        })
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className='search'>
                {/* <div>
                    <Icon name='content' size='large' color='grey' />
                </div> */}

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

export default withRouter(Search);
