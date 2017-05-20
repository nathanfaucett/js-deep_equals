deep_equals [![Build Status](https://travis-ci.org/nathanfaucett/js-deep_equals.svg?branch=master)](https://travis-ci.org/nathanfaucett/js-deep_equals)
=======

deep check for equality

```javascript
var deepEquals = require("@nathanfaucett/deep_equals");


deepEquals(0, 0) === true;
deepEquals(0, 1) === false;

deepEquals("string", "string") === true;
deepEquals("string", "diff_string") === false;

deepEquals([0, 1, 2], [0, 1, 2]) === true;
deepEquals([0, 1, 2], [0, 1, 2, 3]) === false;
deepEquals([0, 1, 2], [0, 1]) === false;

deepEquals({a: 0, b: 1}, {a: 0, b: 1}) === true;
deepEquals({a: 0, b: 1}, {a: 0, b: 1, c: 2}) === false;
deepEquals({a: 0, b: 1}, {a: 0})
```
