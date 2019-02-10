const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
    it('should replace any number divisible by 3 and 5 with the word fizz-buzz', function(){
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 3, expected: 'fizz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });
    it('should raise an error if 3,5,15 do not return fizzbuzz', function(){
        const badInputs = [
            ['a'],
            ['false'],
        ];
        badInputs.forEach(function(input){
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});