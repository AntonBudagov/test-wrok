(function (app) {

	'use strict';

	app.localFoo = function () {

		foo = 3;

    app.foo = foo;

		var foo = function () {
			return 7;
		};

    var some_value = foo();

    app.some_value = some_value;

		return some_value;

    return foo;

	};

  app.localFoo = localFoo;

})(window);


// Change the code so that expectations correspond to the facts.
// --------------------||-----fact-------------------------------||---expect----
//console.log(foo); //        undefined                                undefined
// console.log(localFoo());    //exception
//                        //(TypeError: number is not a function)            7
// console.log(foo); //        undefined                                    3
