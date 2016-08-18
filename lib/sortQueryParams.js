'use strict';

module.exports = (window) => new Promise((resolve, reject) => {
  const params = window
    .location
    .href
    .split('?')
    .pop()
    .split('&')
    .map(str => {
      const split = str.split('=');
      return { key: split.shift(), value: split.shift() };
    });
  resolve(params);
});