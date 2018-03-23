import React, { Component } from 'react';
import AllTable from './AllTable';

export default class AdminHome extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2 className='breed-table-title' style={{ height: '100px', width: '100%', backgroundColor: '#E9C22D' }}>Welcome Admin</h2>
                    <AllTable />
                </div>
            </div>
        )
    }
}