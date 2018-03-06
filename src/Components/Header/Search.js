import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import axios from 'axios';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            options: []
        }
    }

    componentDidMount(){
        axios.get('/api/breedList').then(res => {
            this.setState({ options: res.data})
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <VirtualizedSelect 
                    options={this.state.options}
                    onChange={(selectValue) => this.setState({ selectValue})}
                    value={this.state.selectValue}
                />
            </div>
        )
    }
}