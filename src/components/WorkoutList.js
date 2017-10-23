import React from 'react';
import { formattedDateTime } from '../helpers';

const WorkoutList = (props) => {
    const workouts = props.workouts;
    const workoutItems = workouts.map((workout) =>
    <li key={workout.workout_id} className={`show-${workout.workout_id} saved-${workout.is_saved ? 'yes' : 'no'}`}>
      <ul className="workout-info">
        <li>{workout.workout_name}</li>
        <li>{workout.workout_items}</li>
        <li>{formattedDateTime(workout.date)}</li>
      </ul>
    </li>
  );
  return (
    <ul className="workoutlist">{workoutItems}</ul>
  );
}

export default WorkoutList;