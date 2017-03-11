//test codes go here
'use strict';
var jasmine = require('jasmine');

var myApp = require('../app/index.js');

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });
    it('should return [-5, 50] for [0, 5, -5, 18, 50, 25, 49]', function() {
      expect(myApp.findMinMax([0, 5, -5, 18, 50, 25, 49])).toEqual([-5, 50]);
    });
    it('should not return [0, 49] for [0, 5, -5, 18, 50, 25, 49]', function() {
      expect(myApp.findMinMax([0, 5, -5, 18, 50, 25, 49])).not.toBe([0, 49]);
    });
    it('should return [3, 31] for [15, 25, 3, 31]', function() {
      expect(myApp.findMinMax([15, 25, 3, 31])).toEqual([3, 31]);
    });
    it('should not return [1, 3] for [1, -1, 2, -2, 3, -3, 4]', function(){
      expect(myApp.findMinMax([1, -1, 2, -2, 3, -3, 4])).not.toBe([1, 3]);
    });
    it('should return [0, 100] for [0, 5, 25, 50, 75, 100]', function() {
      expect(myApp.findMinMax([0, 5, 25, 50, 75, 100])).toEqual([0, 100]);
    });
    it('should not return [-6, 5] for [1, -1, 2, -2, 3, -3, 4]', function(){
      expect(myApp.findMinMax([-6, -7, 4, 3, 2, 1, 7, 6])).not.toBe([-6, 6]);
    });
  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

  });

});


describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).toBe(101);
  });
  it("should return 1 for 1 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(1)).toBe(1);
  });
  it("should return `Fizz` for 9 since its divisible by 3", function() {
    expect(myApp.fizzBuzz(9)).toBe('Fizz');
  });

});


describe("Determine the sequence of an array of numbers: ", function() {

  describe("Case for an empty array", function() {

    it("should return 0 for an empty array", function() {
      expect(myApp.aritGeo([])).toEqual(0);
    });

  });

  describe("Case for an arithmetic sequence", function() {

    it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
      expect(myApp.aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
    });

    it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
      expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
    });

    it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
      expect(myApp.aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
    });

  });

  describe("Case for a geometric sequence", function() {

    it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
      expect(myApp.aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
    });

    it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
      expect(myApp.aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
    });

    it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
      expect(myApp.aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
    });

  });

  describe("Case for neither arithmetic nor geometric sequence", function() {

    it("should return -1 for [1, 2, 3, 5, 8]", function() {
      expect(myApp.aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
    });

    it("should return -1 for [1, 3, 6, 10, 15]", function() {
      expect(myApp.aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
    });

    it("should return -1 for [1, 8, 27, 64, 125]", function() {
      expect(myApp.aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
    });
      
  });
});