import React from 'react';

class AddWorkout extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.sectionTitle}</h3>
                <p>List workouts here</p>
            </div>
            
        )
    }
}

export default AddWorkout;