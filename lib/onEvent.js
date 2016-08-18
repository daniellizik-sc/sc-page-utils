'use strict';

module.exports = (window, ev, cb, prop) => new Promise((resolve, reject) => {
  window.addEventListener(ev, (e) => {
    resolve( !prop ? cb(e) : cb(e[prop]) );
  })
});