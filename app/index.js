'use strict'

module.exports = {
	/* fizzBuzz funtion */
	fizzBuzz: function(num) {
		for (var i = 1; i <= num; i++) {
			if (i % 5 === 0 && i % 3 === 0) {
				return "FizzBuzz";
			} else if (i % 5 === 0) {
				return "Buzz";
			} else if (i % 3 === 0) {
				return "Fizz";
			} else {
				return i;
			}
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

	aritGeo: function() {
		var arr = new Array();
		var arith = true;
		var geo = false;
		if (arr === []) {
			return 0;
		}
		var diff = arr[1] - arr[0];
		var ratio = arr[1] / arr[0];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i + 1] - arr[i] !== diff) {
				arith = false;
			}
			if (arr[i + 1] / arr[i] !== diff ) {
				geo = false;
			}
		}
		if (arith === true) {
			return "Arithmetic";
		} else if (geo === true) {
			return "Geometric";
		} else {
			return -1;
		}
	}
}
