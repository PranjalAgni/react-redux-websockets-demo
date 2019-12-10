import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'react-jss';
import { requestStart } from '../actions/base';
import socketIOClient from 'socket.io-client';

const styles = {
  root: {
    margin: '1em',
    fontSize: '22px'
  },
  listItems: {
    margin: '0 0 10px 0'
  }
};

class Facts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: props.facts,
      endpoint: 'ws://localhost:4040'
    };
  }

  componentDidMount() {
    const endpoint = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    socket.on('random', data => {
      console.log('Hey check this: ', data);
    });
  }

  render() {
    const { classes } = this.props;
    console.log('Facts Rendering.....');

    return (
      <div className={classes.root}>
        {this.state.facts.map(fact => (
          <li className={classes.listItems}>{fact}</li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ base }) => {
  return {
    facts: base.facts,
    isRequesting: base.isRequesting
  };
};

const mapDisspatchToProps = {
  requestStart
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDisspatchToProps)(Facts)
);
