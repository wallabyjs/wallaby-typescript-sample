/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Greeter from '../src/greeterNode';

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());
    });
});
