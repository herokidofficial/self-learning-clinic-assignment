'use strict'

module.exports = {
	/* fizzBuzz funtion */
	fizzBuzz: function(num) {
		if (num % 5 === 0 && num % 3 === 0) {
			return "FizzBuzz";
		} else if (num % 5 === 0) {
			return "Buzz";
		} else if (num % 3 === 0) {
			return "Fizz";
		} else {
			return num;
		}
	},

	/*find minimum and maximum values */

	findMinMax: function(arr) {
		var min = Math.min.apply(Math, arr);
		var max = Math.max.apply(Math, arr);
		if (min === max) {
			return min;
		} else {
			return [min, max];
		}
	},

	/*check if arithmetic, geometric progression*/

	aritGeo: function(arr) {
    	var len = arr.length;
    	var diff1 = arr[1] - arr[0];
    	var diff2 = arr[len - 1] - arr[len -2];
    	var ratio1 = arr[1] / arr[0];
    	var ratio2 = arr[len - 1] / arr[len -2];
    	if (len === 0) {
      		return 0;
    	} else if (diff1 === diff2) {
      		return "Arithmetic";
    	} else if (ratio1 === ratio2) {
      		return "Geometric";
    	} else {
      		return -1;
    	}
  }
}
