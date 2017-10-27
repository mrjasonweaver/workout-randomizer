import React from 'react';
import WorkoutList from './WorkoutList';
import AddWorkoutForm from './AddWorkoutForm';
import workouts from '../data.js'

class AddWorkout extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="add-workout-form-wrapper">
                        <h3>{this.props.sectionTitle}</h3>
                        <AddWorkoutForm />
                    </div>
                    <WorkoutList workouts={workouts}/>
                </div>
            </div>
            
        )
    }
}

export default AddWorkout;