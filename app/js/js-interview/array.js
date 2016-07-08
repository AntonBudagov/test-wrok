(function (app) {
	'use strict';

	/*
	 * I'm using onlyDoubledOdds function in the following code:
	 *
	 * var myArr = [1, 2, 3, 6, 7, 13, 349, 3483, 5432];
	 *
	 * var doubledOdds = onlyDoubledOdds(myArr);
	 *
	 * console.log(doubledOdds.length);
	 * console.log(doubledOdds);
	 *
	 * if (doubledOdds === myArr ) {
	 * 	console.log('WTF?!');
	 * } else {
	 * 	console.log('Ok');
	 * }
	 *
	 * In console I see:
	 *  9
	 * [ undefined, 4, undefined, 12, undefined, 26, undefined, 6966, undefined ]
	 *  WTF?!
	 *
	 * I expect to see:
	 *  6
	 * [ 2, 6, 14, 26, 698, 6966 ]
	 *  Ok
	 *
	 *
	 */

	function onlyDoubledOdds (sourceArray) {
		var result = sourceArray;
		for (var i = 0; i < result.length; i++) {
			if (result[i]%2 == 0) {
				delete result[i];
			} else {
				result[i] *= 2;
			}
		}
		delete result.pop();

		return result = result.filter(function( element ) {
      return element !== undefined;
    });
	}

	app.onlyDoubledOdds = onlyDoubledOdds;

})(window);
