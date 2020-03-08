const assert = require('chai').assert;
const fizzBuzzApp = require("../app");

result = fizzBuzzApp();

describe("App", function(){
    it("App should return an Array", function(){
        assert(Array.isArray(result), 'FizzBuzz returns an Array');
    });
    it("First item of Array should be 1", function(){
        assert(result[0] == 1, 'First item in 1');
    });
    it("All Multiples of 3 that aren't multiples of 5 are Fizz", function(){
        for(let i = 1; i<result.length; i++){
            if(i % 3 === 0 && i % 5 !== 0){
                assert.include(result[i-1], "Fizz", 'All Multiples of 3 that arent multiples of 5 are Fizz');
                assert.notInclude(result[i-1], "Buzz", 'All Multiples of 3 that arent multiples of 5 dont have Buzz');
            }
        }
    });
    it("All Multiples of 5 that aren't multiples of 3 are Buzz", function(){
        for(let i = 1; i<result.length; i++){
            if(i % 3 !== 0 && i % 5 === 0){
                assert.include(result[i-1], "Buzz", 'All Multiples of 5 that arent multiples of 3 are Buzz');
                assert.notInclude(result[i-1], "Fizz", 'All Multiples of 5 that arent multiples of 3 dont have Fizz');
            }
        }
    });
    it("All Multiples of 3 and 5 are FizzBuzz", function(){
        for(let i = 1; i<result.length; i++){
            if(i % 3 === 0 && i % 5 === 0) assert.include(result[i-1], "FizzBuzz", 'All Multiples of 3 And 5 are FizzBuzz');
        }
    });
    it("All Non Multiples of 3 or 5 are numbers", function(){
        for(let i = 1; i<result.length; i++){
            if(i % 3 !== 0 && i % 5 !== 0) assert.isNumber(result[i-1], 'All Non Multiples of 3 or 5 are numbers');
        }
    });
})