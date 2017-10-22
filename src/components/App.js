import React from 'react';
import Header from './Header';
import Workout from './Workout';
import AddWorkout from './AddWorkout';

class App extends React.Component {
    render() {
        return (
            <div className="workout-radomizer">
                <Header siteTitle="Workout Randomizer" tagline="Build and randomize your workouts"/>
                <Workout randomTitle="Back and Core"/>
                <AddWorkout sectionTitle="Add workout"/>
            </div>
        )
    }
}

export default App;