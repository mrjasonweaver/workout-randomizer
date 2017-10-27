import React from 'react';
import WorkoutList from './WorkoutList';
import AddWorkoutNameButton from './AddWorkoutNameButton';
import AddWorkoutItemButton from './AddWorkoutItemButton';
import workouts from '../data.js'

class AddWorkout extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <form className="add-workout">
                        <h3>{this.props.sectionTitle}</h3>
                        <input placeholder="workout name"/><AddWorkoutNameButton />
                        <input placeholder="workout item"/><AddWorkoutItemButton />
                    </form>
                    <WorkoutList workouts={workouts}/>
                </div>
            </div>
            
        )
    }
}

export default AddWorkout;