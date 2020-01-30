import { createSelector } from 'reselect';

const searchTerm = ({ search }) => search.searchTerm;
const searchDatabase = ({ search }) => search.database;

const makeFilterStatus = (status, searchTerm, images) => {
  return {
    status,
    searchTerm,
    images
  };
};

export const filterGifs = createSelector(
  [searchDatabase, searchTerm],
  (data, search) => {
    if (!search) return makeFilterStatus(false, search, []);
    const result = data.find(gif => {
      console.log(gif);
      return search === gif.key;
    });

    if (!result) return makeFilterStatus(false, search, []);
    return makeFilterStatus(true, search, result.images);
  }
);
