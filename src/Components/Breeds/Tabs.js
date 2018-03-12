import React, { Component } from 'react';
import { Tab, Progress } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Tabs extends Component {
    render() {
        const { apartment, cat, dog, child, exercise, grooming, shedding, health, intelligence, affection, barking, playful } = this.props;

        const panes = [
            {
                menuItem: 'Characteristics', render: () =>
                    <Tab.Pane attached={false}>
                        <h3>Intelligence</h3>
                        <Progress percent={intelligence || 0} color='yellow' progress />
                        <h3>Affection Level</h3>
                        <Progress percent={affection || 0} color='yellow' progress />
                        <h3>Barking Tendencies</h3>
                        <Progress percent={barking || 0} color='yellow' progress />
                        <h3>Playfulness</h3>
                        <Progress percent={playful || 0} color='yellow' progress />
                    </Tab.Pane>
            },

            {
                menuItem: 'Adaptability', render: () =>
                    <Tab.Pane attached={false}>
                        <h3>Apartment Friendly</h3>
                        <Progress percent={apartment || 0} color='blue' progress />
                        <h3>Cat Friendly</h3>
                        <Progress percent={cat || 0} color='blue' progress />
                        <h3>Dog Friendly</h3>
                        <Progress percent={dog || 0} color='blue' progress />
                        <h3>Child Friendly</h3>
                        <Progress percent={child || 0} color='blue' progress />
                    </Tab.Pane>
            },

            {
                menuItem: 'Needs', render: () =>
                    <Tab.Pane attached={false}>
                        <h3>Exercise Need</h3>
                        <Progress percent={exercise || 0} color='green' progress />
                        <h3>Grooming Needs</h3>
                        <Progress percent={grooming || 0} color='green' progress />
                        <h3>Shedding Level</h3>
                        <Progress percent={shedding || 0} color='green' progress />
                        <h3>General Health</h3>
                        <Progress percent={health || 0} color='green' progress />
                    </Tab.Pane>
            }
        ]
        return (
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
    }
}

var mapStateToProps = (state) => {
    return {
        apartment: state.frontEndReducer.currentBreed.apartment,
        dog: state.frontEndReducer.currentBreed.dog,
        cat: state.frontEndReducer.currentBreed.cat,
        child: state.frontEndReducer.currentBreed.child,
        exercise: state.frontEndReducer.currentBreed.exercise,
        shedding: state.frontEndReducer.currentBreed.shedding,
        grooming: state.frontEndReducer.currentBreed.grooming,
        health: state.frontEndReducer.currentBreed.health,
        intelligence: state.frontEndReducer.currentBreed.intelligence,
        barking: state.frontEndReducer.currentBreed.barking,
        affection: state.frontEndReducer.currentBreed.affection,
        playful: state.frontEndReducer.currentBreed.playful
    }
}

export default connect(mapStateToProps, {})(Tabs);