import React, { Component } from 'react';
import { Tab, Progress } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Tabs extends Component {
    render() {
        const { apartment, cat, dog, child, exercise, grooming, shedding, health, intelligence, affection, train, playful } = this.props;

        const panes = [
            {
                menuItem: 'Characteristics', render: () =>
                    <Tab.Pane attached={false}>
                        <h3>Intelligence</h3>
                        <Progress percent={intelligence || 0} color='orange' progress />
                        <h3>Affection Level</h3>
                        <Progress percent={affection || 0} color='orange' progress />
                        <h3>Trainability</h3>
                        <Progress percent={train || 0} color='orange' progress />
                        <h3>Playfulness</h3>
                        <Progress percent={playful || 0} color='orange' progress />
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
        apartment: state.user.currentBreed.apartment,
        dog: state.user.currentBreed.dog,
        cat: state.user.currentBreed.cat,
        child: state.user.currentBreed.child,
        exercise: state.user.currentBreed.exercise,
        shedding: state.user.currentBreed.shedding,
        grooming: state.user.currentBreed.grooming,
        health: state.user.currentBreed.health,
        intelligence: state.user.currentBreed.intelligence,
        barking: state.user.currentBreed.barking,
        affection: state.user.currentBreed.affection,
        playful: state.user.currentBreed.playful,
        train: state.user.currentBreed.train
    }
}

export default connect(mapStateToProps, {})(Tabs);