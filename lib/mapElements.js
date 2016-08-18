'use strict';

module.exports = (window, args) => new Promise((resolve, reject) => {
  const els = window.document.querySelectorAll(args.nodeName || '*');
  const elems = [].slice.call(els);
  const data = !args.attr ? elems.length : elems.map(e => e.getAttribute(args.attr));
  resolve(data);
});