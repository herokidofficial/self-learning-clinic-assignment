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

	aritGeo: function() {
		switch(arr) {
			case 'arr[i + 1] - arr[i] !== diff':
				return "Arithmetic";
				break;
			case 'arr[i + 1] / arr[i] !== ratio':
				return "Geometric";
				break;
			case 'arr[i + 1] - arr[i] !== diff && arr[i + 1] / arr[i] !== ratio':
				return -1;
			case 'arr = []':
				return 0;
		}
	}
}
	}