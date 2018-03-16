import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExplore } from '../Redux/User';
import Header from './Header/Header';
import { Icon } from 'semantic-ui-react';

class Explore extends Component {
    constructor() {
        super();

        this.state = {
            breedExplore: [],
            showFilters: false,
            attributes: [
                { value: 'affection', label: 'Affection Level' },
                { value: 'apartment', label: 'Apartment Friendly' },
                { value: 'cat', label: 'Cat Friendly' },
                { value: 'dog', label: 'Dog Friendly' },
                { value: 'energy', label: 'Energy Level' },
                { value: 'exercise', label: 'Exercise Needs' },
                { value: 'grooming', label: 'Grooming Needs' },
                { value: 'health', label: 'General Health' },
                // { value: 'height', label: 'Height' },
                // { value: 'hypoallergenic', label: 'Hypoallergenic' },
                { value: 'intelligence', label: 'Intelligence' },
                { value: 'playful', label: 'Playfulness' },
                { value: 'shedding', label: 'Shedding Level' },
                { value: 'train', label: 'Trainability' },
                // { value: 'weight', label: 'Weight' },
                { value: 'barking', label: 'Barking Tendencies' },
                { value: 'child', label: 'Kid Friendly' },
            ],
            selected: null
        }
    }

    componentDidMount() {
        this.props.getExplore();
        this.setState({breedExplore: this.props.breedExplore})
    }

    // filterBreeds(value){
    //     this.props.filterBreeds
    // }

    render() {
        const { showFilters, attributes } = this.state;
        console.log(this.state)

        const options = attributes.map((option, i) => {
            return (
                <option key={i} value={option.value}>{option.label}</option>
            )
        })

        return (
            <div>
                <Header />
                <div className='explore-header'>
                    <div className='filter-header'>
                        {/* <span>{breedExplore.length} results</span> */}
                        <span>Advanced Filters <Icon name='filter' onClick={() => this.setState({ showFilters: !this.state.showFilters })} /></span>
                    </div>
                    <div className={showFilters ? 'filter-container' : 'hidden'}>
                        <h3>Filter By</h3>
                        <div>
                            <select onChange={(e) => console.log(e.target.value)}>
                                {options}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='explore-results'>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        breedExplore: state.user.breedExplore
    }
}

export default connect(mapStateToProps, { getExplore })(Explore);