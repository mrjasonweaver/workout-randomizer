import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <div className="wrap">
                    <h1>{this.props.siteTitle}</h1>
                    <p>{this.props.tagline}</p>
                </div>
            </header>
        )
    }
}

export default Header;