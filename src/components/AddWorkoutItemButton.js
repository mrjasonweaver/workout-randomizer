import React from 'react';

class AddWorkoutItemButton extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log('Added Workout Item. This is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
        Add
        </button>
      );
    }
  }

  export default AddWorkoutItemButton;