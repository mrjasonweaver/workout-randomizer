import React from 'react';

class AddWorkout extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <form className="add-workout">
                        <h3>{this.props.sectionTitle}</h3>
                        <input placeholder="workout name"/><button>Add</button>
                        <input hidden placeholder="workout item"/><button hidden>Add</button>
                    </form>
                    <p>List workouts here</p>
                </div>
            </div>
            
        )
    }
}

export default AddWorkout;