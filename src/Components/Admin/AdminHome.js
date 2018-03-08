import React, { Component } from 'react';
import AllTable from './AllTable';

export default class AdminHome extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2 className='breed-table-title'>BREEDS</h2>
                    <AllTable />
                </div>
            </div>
        )
    }
}