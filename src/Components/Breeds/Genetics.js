import React from 'react';
import tableBG from '../../assets/circles-light.png';

export default function Genetics(props) {
    console.log(props)
    const {weight, height, energy, expected, bark } = props.props;
    return (
        <div id='genetic-main'style={{ backgroundImage: `${tableBG}`}}>
            <div className="child">
                <div className="pill label">
                    <span>Weight: {weight} lbs</span>
                </div>
                <div className={`${weight < 25 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Small</span>
                </div>
                <div className={`${weight > 25 && weight < 50 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Medium</span>
                </div>
                <div className={`${weight >= 50 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>Large</span>
                </div>
            </div>
            <div className="child">
                <div className="pill label">
                    <span>Height: {height}"</span>
                </div>
                <div className={`${height < 14 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Small</span>
                </div>
                <div className={`${height > 13 && height < 21 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Medium</span>
                </div>
                <div className={`${height > 20 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>Large</span>
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
                    <span>Life Expectancy: {expected} years</span>
                </div>
                <div className={`${expected < 10 ? 'dark pill one' : 'pill one nofill'}`}>
                    <span>Low</span>
                </div>
                <div className={`${expected >= 10 && expected < 14 ? 'dark pill two' : 'pill two nofill'}`}>
                    <span>Average</span>
                </div>
                <div className={`${expected > 13 ? 'dark pill three' : 'pill three nofill'}`}>
                    <span>High</span>
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