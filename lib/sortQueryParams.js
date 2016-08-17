module.exports = (window) => new Promise((resolve, reject) => {
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
  resolve(params);
});