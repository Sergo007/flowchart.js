function eqNull(value) {
  return typeof value === 'undefined' || value === null;
}
module.exports = eqNull;