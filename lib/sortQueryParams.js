'use strict';

const key = (s) => s.charAt(0).toLowerCase().charCodeAt();

module.exports = (window, args) => new Promise((resolve, reject) => {
  const params = window
    .location
    .href
    .split('?')
    .pop()
    .split('&')
    .map(str => {
      let split = str.split('=');
      return { key: split.shift(), value: split.shift() };
    });
  if (args.isSorted)
    resolve(params.sort((a, b) => {
      return key(a) - key(b);
    }));
  else
    resolve(params);
});