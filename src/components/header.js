import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <div className="header-centerizing">
        <h1 className="header-name">Anna Tillack</h1>
        <nav>
            <ul className="navigation">
                <a href={this.props.about}><li className="navigation--about">About</li></a>
                <a href={this.props.work}><li className="navigation--work">Work</li></a>
                <a href={this.props.contact}><li className="navigation--contact">Contact</li></a>
            </ul>
        </nav>
        </div>
      </div>
    );
  }
}

export default Header;
