export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('The name should of string type');
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val !== 'string') throw new TypeError('The code should of string type');
    this._code = val;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
