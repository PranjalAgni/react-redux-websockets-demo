import React, { Component } from 'react';
import { serachRequestStart } from '../../actions/search';
import { connect } from 'react-redux';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Submit clicked....');
    this.props.serachRequestStart(this.state.searchVal);
  }

  onChangeSearchTerm(event) {
    this.setState({
      searchVal: event.target.value
    });
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter search term"
            onChange={this.onChangeSearchTerm}
            value={this.state.searchVal}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        {loading ? <h4>Searching......</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.search.loading
});

const mapDispatchToProps = {
  serachRequestStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
