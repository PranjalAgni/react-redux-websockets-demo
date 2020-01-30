import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStart } from '../../actions/facts';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';
import './Button.css';
const Fact = Loadable({
  loader: () => import('../Facts/Fact'),
  loading() {
    return null;
  }
});

export class Button extends Component {
  render() {
    const { isRequesting } = this.props;
    console.log('Render triggered....');
    const todaysDate = new Intl.DateTimeFormat().format(new Date());
    return (
      <div className="broot">
        <h3>{`Fetch Facts - ${todaysDate}`}</h3>
        {isRequesting ? (
          <p>Loading...</p>
        ) : (
          <button
            className="fButton"
            onClick={() => this.props.requestStart(5)}
          >
            Show Facts
          </button>
        )}
        <Fact />
        <Link to="/find">SEARCH</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ facts }) => ({
  isRequesting: facts.isRequesting
});

const mapDispatchToProps = {
  requestStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
