"use strict";
const assert = require('assert');

console.log(Symbol());

console.log(Symbol("foo"));

assert(Symbol("foo").toString() === "Symbol(foo)")

const myObj = {};
const otherSym = Symbol("foo");
myObj[otherSym] = "foo";
