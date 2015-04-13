
describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Sayings.Greeter('John');
        expect(greeter.greet()).toBe('Hello, John');
    });
});