var tape = require("tape"),
    deepEquals = require("..");


tape("deepEquals", function(assert) {

    assert.equals(deepEquals(0, 0), true);
    assert.equals(deepEquals(0, 1), false);

    assert.equals(deepEquals("string", "string"), true);
    assert.equals(deepEquals("string", "diff_string"), false);

    assert.equals(deepEquals([0, 1, 2], [0, 1, 2]), true);
    assert.equals(deepEquals([0, 1, 2], [0, 1, 2, 3]), false);
    assert.equals(deepEquals([0, 1, 2], [0, 1]), false);

    assert.equals(deepEquals({
        a: 0,
        b: 1
    }, {
        a: 0,
        b: 1
    }), true);
    assert.equals(deepEquals({
        a: 0,
        b: 1
    }, {
        a: 0,
        b: 1,
        c: 2
    }), false);
    assert.equals(deepEquals({
        a: 0,
        b: 1
    }, {
        a: 0
    }), false);

    assert.equals(deepEquals({
        a: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }],
        b: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }]
    }, {
        a: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }],
        b: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }]
    }), true);
    assert.equals(deepEquals({
        a: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }],
        b: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }]
    }, {
        a: [{
            a: 0,
            b: 1
        }, {
            a: 0,
            b: 1
        }],
        b: [{
            a: 0
        }, {
            a: 0,
            b: 1,
            c: 2
        }]
    }), false);

    var a = {
            a: 0,
            b: 1
        },
        b = {
            a: 0,
            b: 1
        },
        c = {
            a: a,
            b: b
        },
        d = {},
        e = {};

    d.a = a;
    d.b = b;
    d.c = c;
    d.d = d;

    e.a = a;
    e.b = b;
    e.c = c;
    e.d = d;

    assert.equals(deepEquals(d, e), true);

    assert.end();
});