import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(val) {
    if (typeof val !== 'number') throw new TypeError('The amount should be of type number');
    this._amount = val;
  }

  get amount() {
    return this._amount;
  }

  set currency(val) {
    if (!(val instanceof Currency)) throw new TypeError('The length should be of type number');

    this._currency = val;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
