import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <p>"I am the Header component"</p>
            </div>
        )
    };
};

export default Header;