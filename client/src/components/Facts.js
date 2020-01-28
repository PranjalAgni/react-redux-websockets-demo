import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'react-jss';
import { requestStart, addFact } from '../actions/base';
//import socketIOClient from 'socket.io-client';

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
      endpoint: 'ws://localhost:4040',
      disconnect: false
    };
  }

  componentDidMount() {
    const endpoint = this.state.endpoint;
    // const socket = socketIOClient(endpoint);
    // socket.on('random', fact => {
    //   //console.log('Hey check this: ', [fact.data]);
    //   // action dispatch
    //   //this.props.addFact([fact.data]);
    // });

    // setTimeout(() => {
    //   this.setState({
    //     socket,
    //     disconnect: true
    //   });
    // }, 10000);
  }

  render() {
    const { classes } = this.props;

    // if (this.props.isRequesting) {
    //   this.state.socket.disconnect();
    //   console.log('Disconnected....');
    // }

    return (
      <div className={classes.root}>
        <div>{this.props.isRequesting}</div>
        <h1>Facts here....</h1>
        {this.props.facts.map(fact => (
          <li className={classes.listItems}>{fact}</li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  facts: state.base.facts,
  isRequesting: state.base.isRequesting
});

const mapDispatchToProps = {
  requestStart,
  addFact
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Facts)
);
