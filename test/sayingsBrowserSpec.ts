///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../src/sayingsBrowser.ts"/>

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Sayings.Greeter('John');
        expect(greeter.greet()).toBe('Hello, John');
    });
});
