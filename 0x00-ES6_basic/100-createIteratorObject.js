export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let employes = [];

      for (const value of Object.values(report.allEmployees)) {
        employes = [...employes, ...value];
      }
      let index = 0;

      return {
        next() {
          return {
            value: employes[index++],
            done: index > employes.length,
          };
        },
      };
    },
  };
}
