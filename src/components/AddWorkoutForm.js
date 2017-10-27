import React from 'react';

class AddWorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        console.log(`Added Workout Name: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Add workout title" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Add" />
                    </div>
                    <input placeholder="workout item"/>
                </form>
            </div>
        );
    }
  }

  export default AddWorkoutForm;