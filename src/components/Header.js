import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <h1>Workout Randomizer</h1>
                <p>{this.props.tagline}</p>
            </header>
        )
    }
}

export default Header;