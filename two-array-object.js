// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  let index = 0;
  let obj = {};
  for (let key of keys) {
    if (!values[index]) {
      obj[key] = null;
    } else {
      obj[key] = values[index];
    }
    index++;
  }
  return obj;
}
