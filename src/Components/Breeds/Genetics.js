import React from 'react';

export default function Genetics(props) {
    const {weight, height, energy, expected, bark } = props.props;
    return (
        <div id='genetic-main'>
            <div className="child">
                <div className="pill label">
                    <span>Weight: {weight} lbs</span>
                </div>
                <div className={`${weight < 25 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Small</span>
                    <span>{'<'} 25 lbs</span>
                </div>
                <div className={`${weight > 25 && weight < 50 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Medium</span>
                    <span>25 in - 50 lbs</span>
                </div>
                <div className={`${weight >= 50 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>Large</span>
                    <span>{'>'} 50 lbs</span>
                </div>
            </div>
            <div className="child">
                <div className="pill label">
                    <span>Height: {height}"</span>
                </div>
                <div className={`${height < 14 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Small</span>
                    <span>{'<'} 14 in</span>
                </div>
                <div className={`${height > 13 && height <= 20 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Medium</span>
                    <span>14 in - 20 in</span>
                </div>
                <div className={`${height > 20 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>Large</span>
                    <span>{'>'} 20 in</span>
                </div>
            </div>

            <div className="child">
                <div className="pill label">
                    <span>Energy Level: {energy}</span>
                </div>
                <div className={`${energy < 33 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Low</span>
                </div>
                <div className={`${energy < 66 && energy >= 33 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Moderate</span>
                </div>
                <div className={`${energy > 65 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>High</span>
                </div>
            </div>

            <div className="child">
                <div className="pill label">
                    <span>Life Span: {expected} years</span>
                </div>
                <div className={`${expected < 10 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Low</span>
                    <span>{'<'} 10 years</span>
                </div>
                <div className={`${expected >= 10 && expected <= 13 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Average</span>
                    <span>10 years - 13 years</span>
                </div>
                <div className={`${expected > 13 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>High</span>
                    <span>{'>'} 13 years</span>
                </div>
            </div>

            <div className="child">
                <div className="pill label">
                    <span>Barking Tendencies</span>
                </div>
                <div className={`${bark < 33 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Minimal</span>
                </div>
                <div className={`${bark < 66 && bark >= 33 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Average</span>
                </div>
                <div className={`${bark >= 66 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>High</span>
                </div>
            </div>
        </div>
    )
}