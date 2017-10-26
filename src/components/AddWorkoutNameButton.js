import React from 'react';

class AddWorkoutNameButton extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log('Added Workout Name. This is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
        Add
        </button>
      );
    }
  }

  export default AddWorkoutNameButton;