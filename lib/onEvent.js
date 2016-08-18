'use strict';

module.exports = (window, args) => new Promise((resolve, reject) => {
  window.addEventListener(args.ev || 'click', (e) => {
    resolve( !args.prop ? e : e[args.prop] );
  });
});