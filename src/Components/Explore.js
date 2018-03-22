import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExplore, filter, resetFilter, sort } from '../Redux/exploreReducer';
import MainHeader from './Header/Header';
import { Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Explore extends Component {
    constructor() {
        super();

        this.state = {
            showFilters: false,
            attributes: [
                { value: 'affection', label: 'Affection Level', icon: 'heart' },
                { value: 'apartment', label: 'Apartment Friendly', icon: 'building outline' },
                { value: 'cat', label: 'Cat Friendly', icon: 'paw' },
                { value: 'dog', label: 'Dog Friendly', icon: 'paw' },
                { value: 'energy', label: 'Energy Level', icon: 'battery full' },
                { value: 'exercise', label: 'Exercise Needs', icon: 'certificate' },
                { value: 'grooming', label: 'Grooming Needs', icon: 'bath' },
                { value: 'health', label: 'General Health', icon: 'first aid' },
                { value: 'hypoallergenic', label: 'Hypoallergenic', icon: 'leaf' },
                { value: 'intelligence', label: 'Intelligence', icon: 'idea' },
                { value: 'playful', label: 'Playfulness', icon: 'smile' },
                { value: 'shedding', label: 'Shedding Level', icon: 'trash' },
                { value: 'train', label: 'Trainability', icon: 'student' },
                { value: 'barking', label: 'Barking Tendencies', icon: 'volume up' },
                { value: 'child', label: 'Kid Friendly', icon: 'child' },
            ]
        }
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.props.getExplore();
    }

    reset() {
        this.props.resetFilter();
        this.props.getExplore();
    }

    render() {
        const { showFilters, attributes } = this.state;
        const { breedExplore, filter, filteredValues, sort } = this.props;
        const buttons = attributes.map((x, i) => {
            return (
                <Button key={i} style={{ margin: '3px' }} icon labelPosition='left' size='mini'
                    onClick={(e) => filter(x.value)}
                    color={filteredValues.includes(x.value) ? 'yellow' : null}>
                    <Icon name={x.icon} />
                    {x.label}
                </Button>
            )
        })

        const sortOptions = attributes.map((x, i) => {
            return (
                <option key={i} value={x.value}>{x.label}</option>
            )
        })

        const breeds = breedExplore.map((breed, i) => {
            return (
                <Link to={`/breed/${breed.id}`} key={i} >
                    <div className='breed-explore-card'>
                        <div className='explore-img' style={{ backgroundImage: `url(${breed.photo})` }}></div>
                        <div className='explore-name'><h3>{breed.name}</h3></div>
                    </div>
                </Link>
            )
        })

        return (
            <div>
                <MainHeader />
                <div className='explore-header'>
                    <div className='filter-header'>
                        <span>{breedExplore.length} results</span>
                        <span>Advanced Filters <Icon name='filter' onClick={() => this.setState({ showFilters: !this.state.showFilters })} /></span>
                    </div>
                    <div className={showFilters ? 'filter-container' : 'hidden'}>
                        <h3>Filter By</h3>
                        <div className='filter-button-container'>
                            {buttons}
                        </div>
                        <Button style={{ width: '100px', margin: 'auto', marginBottom: '10px' }} color='green' onClick={() => this.reset()}>RESET</Button>
                    </div>
                </div>

                <div className='sort-container'>
                    <h1>Results</h1>
                    <div className='sortby-container'>
                        <span>Sort by:</span>
                        <select onChange={(e) => sort(e.target.value)}>
                            <option default>---Select---</option>
                            {sortOptions}
                            <option value='weight'>Weight</option>
                            <option value='height'>Height</option>
                        </select>
                        <Icon name='sort content descending' size='large' />
                    </div>
                </div>

                <div className='breed-container'>
                    {breeds}
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        breedExplore: state.exploreReducer.breedExplore,
        filteredValues: state.exploreReducer.filteredValues
    }
}

export default connect(mapStateToProps, { getExplore, filter, resetFilter, sort })(Explore);