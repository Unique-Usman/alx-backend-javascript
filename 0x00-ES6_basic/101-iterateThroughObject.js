export default function iterateThroughObject (reportWithIterator) {
  const ans = [];

  const iterate = reportWithIterator[Symbol.iterator]();
  let get = iterate.next();

  while (get.done !== true) {
    ans.push(get.value);
    get = iterate.next();
  }
  return ans.join(' | ');
}
