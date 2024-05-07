export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, _] of array.entries()) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
