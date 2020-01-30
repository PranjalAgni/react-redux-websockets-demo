import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import {
  searchRequestStart,
  updateSearchTerm,
  serachRequestDone
} from '../../actions/search';
import { filterGifs } from '../../selectors/search';
import './Search.css';

const Gif = Loadable({
  loader: () => import('../Gif/Gif'),
  loading() {
    return <h3>Loading...</h3>;
  }
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Submitted...', this.props.gifs);
    if (!this.props.gifs.status) {
      this.props.searchRequestStart(this.props.searchTerm);
    }
  }

  onChangeSearchTerm(event) {
    this.props.updateSearchTerm(event.target.value);
  }

  render() {
    const { searchTerm, loading, gifs } = this.props;
    return (
      <div className="root">
        <form>
          <input
            type="text"
            placeholder="Enter search term"
            onChange={this.onChangeSearchTerm}
            value={searchTerm}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        {loading && (
          <img
            className="spinner"
            alt="loading"
            src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
          />
        )}

        <Gif data={gifs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.search.loading,
  searchTerm: state.search.searchTerm,
  gifs: filterGifs(state)
});

const mapDispatchToProps = {
  searchRequestStart,
  updateSearchTerm,
  serachRequestDone
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
