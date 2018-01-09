function prefill(n = 0, v) {
  const length = parseFloat(n);
  if (length < 0 || !Number.isInteger(length)) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array(length).fill(v);
}
