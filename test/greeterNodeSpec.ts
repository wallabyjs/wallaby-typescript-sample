import Greeter = require('../src/greeterNode');

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());
    });
});
