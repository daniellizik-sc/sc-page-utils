module.exports = (window, nodeName, attr) => new Promise((resolve, reject) => {
  const els = window.document.querySelectorAll(nodeName);
  const elems = [].slice.call(els);
  const data = !attr ? elems : elems.map(e => e.getAttribute(attr));
  resolve(data);
});