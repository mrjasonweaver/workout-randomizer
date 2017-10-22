import React from 'react';

class Workout extends React.Component {
    render() {
        return (
            <div className="app-workout">
                <div className="wrap">
                    <h3>{this.props.content}</h3>
                    <ul>
                        <li>Run 1 mile</li>
                        <li>Deadlifts 3x12</li>
                        <li>Pushups 3x12</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Workout;