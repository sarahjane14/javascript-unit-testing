var chai = require('chai');
var compare = require('./compare');

describe('Compare', function() {
    it('It should compare choice1 and choice2', function() {
        chai.expect(compare("Test", "Test")).to.be.true;
    });
});
