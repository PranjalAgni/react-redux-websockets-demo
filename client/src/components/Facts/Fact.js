import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Fact.css';
export class Fact extends Component {
  render() {
    return (
      <div className="root">
        {this.props.facts.map((f, idx) => (
          <li className="listItems" key={idx}>
            {f}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ facts }) => ({
  facts: facts.facts
});

export default connect(mapStateToProps)(Fact);
