var chai = require('chai');
var add = require('./add-nt');

describe('Add', function() {
    it('should add num1 and num2', function() {
        chai.expect(add(2, 3)).equal(5);
    });
});
