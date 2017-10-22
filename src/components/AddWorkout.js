import React from 'react';

class AddWorkout extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <form className="add-workout">
                        <h3>{this.props.sectionTitle}</h3>
                        
                    </form>
                    <p>List workouts here</p>
                </div>
            </div>
            
        )
    }
}

export default AddWorkout;