const { resolve: pathResolve } = require('path');
const { readFile } = require('fs');
const { compose } = require('ramda');

const { sortByProps, sliceSet, filterSet } = require('../utils');

const DB_FILE = 'entries.json';
const DEFAULT_SORT = ['date', 'popularity'];
const DEFAULT_LIMIT = 5;
const DEFAULT_PAGE = 0;
const DEFAULT_FILTER = {};

let db = [];

function find(sortBy = DEFAULT_SORT, limit = DEFAULT_LIMIT, page = DEFAULT_PAGE, filter = DEFAULT_FILTER) {
  let hasMore = false;

  const checkIfResultSetHasMore = data => {
    hasMore = data.length - (page + 1) * limit > 0;
    return data;
  };

  const getDbResult = compose(
    sliceSet(page * limit, (page + 1) * limit),
    sortByProps(...sortBy),
    checkIfResultSetHasMore,
    filterSet(filter)
  );

  return {
    result: getDbResult(db),
    hasMore,
  };
}

const initialize = async () => {
  return new Promise((resolve, reject) => {
    readFile(pathResolve(__dirname, `${DB_FILE}`), (err, res) => {
      if (err) {
        reject(err);
      } else {
        db = JSON.parse(res.toString());
        resolve();
      }
    });
  });
};

module.exports = {
  initialize,
  find,
};
