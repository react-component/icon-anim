export function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

export function transformArguments(arg, key) {
  let result = arg;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
    });
  }
  return result;
}
