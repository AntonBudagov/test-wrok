(function (app) {
	'use strict';

	function closure () {
		var foo = 'some',
		// definitions
			bar = function () {
				return foo;
			};
		// end of definitions
		foo += 'thing wrong';

		app.foo = foo;

		foo = 'some';

		return bar;
	}

	app.closure = closure;



})(window);

// Change definitions so that expectations correspond to the facts.
// -----------------------||-----fact---------||---expect--------
// var some = closure();
// console.log(some());       //something wrong        some
// console.log(foo);         //something wrong        something wrong