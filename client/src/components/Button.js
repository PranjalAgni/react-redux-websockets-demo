import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStart } from '../actions/base';
import { withStyles } from 'react-jss';
import Facts from './Facts';

const styles = {
  root: {
    fontFamily: 'Anonymous Pro'
  },

  fButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
};

class Button extends Component {
  render() {
    const { classes, isRequesting } = this.props;

    console.log('**** Request State **** : ', isRequesting);

    return (
      <div className={classes.root}>
        <h3>Button Component</h3>
        {isRequesting ? (
          'Loading....'
        ) : (
          <button
            className={classes.fButton}
            onClick={() => this.props.requestStart(5)}
          >
            Fire Request Soon
          </button>
        )}
        <h1>{this.props.isRequesting}</h1>
        <Facts />
      </div>
    );
  }
}

const mapStateToProps = ({ base }) => ({
  isRequesting: base.isRequesting
});

const mapDispatchToProps = {
  requestStart
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Button)
);
