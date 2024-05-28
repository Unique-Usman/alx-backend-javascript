export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.evacuationWarningMessage === undefined) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  set sqft(val) {
    if (typeof val !== 'number') { throw new TypeError('The value of sqrt has to be of type number'); }
    this._sqft = val;
  }

  get sqft() {
    return this._sqft;
  }
}
