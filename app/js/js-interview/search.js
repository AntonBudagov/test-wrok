(function (app) {
	'use strict';

	var veryBigArray = [], i = 0;

	while (veryBigArray.length < 20000000) {
		veryBigArray.push(i+=2);
	}

	//change only this function. Array from search - static data
	function quickSearch (searchElement) {
		for(var i = 0; i < veryBigArray.length; i++){
      if(veryBigArray[i] == searchElement)
      	return i;
    } return -1;
	};

	app.quickSearch = quickSearch;

})(window);

/**
 * I'm trying to use this function in code:
 *
 * console.time('search1');
 * console.log(quickSearch(19999998));
 * console.timeEnd('search1');
 *
 * console.time('search2');
 * console.log(quickSearch(346));
 * console.timeEnd('search2');
 *
 * console.time('search3');
 * console.log(quickSearch(5994382));
 * console.timeEnd('search3');
 *
 * ...and getting:
 * 9999998
 * search1: 64.187ms
 * 172
 * search2: 0.533ms
 * 2997190
 * search3: 20.186ms
 *
 * t's so sad. Write a function quickSearch that will return results faster.
 *
 */