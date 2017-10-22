import React from 'react';

class Workout extends React.Component {
    render() {
        return (
            <div className="app-workout">
                <div className="wrap">
                    <h3>{this.props.randomTitle}</h3>
                    <ul>
                        <li>Run 1 mile</li>
                        <li>Stretch</li>
                        <li>Deadlifts 3x12</li>
                        <li>Pushups 3x12</li>
                        <li>Crunches 3x30</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Workout;