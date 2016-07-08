(function (app) {
	'use strict';

	// definitions
	function Foo () {
		this.name = '';
		this.children = [];
	}

	Foo.prototype = {
		getName: function () {
			return 'my name is ' + this.name;
		},
		getChildren: function () {
			return this.children.join(', ')
		}
	};

	function Bar () {
		Foo.call(this);
	}

	Bar.prototype = Object.create(Foo.prototype);
	// end of definitions

	app.Foo = Foo;
	app.Bar = Bar;

})(window);

// using
/*
 var firstBar = new Bar(), secondBar = new Bar();

 firstBar.name = 'first bar';
 firstBar.children.push(123);
 firstBar.someValue = 3;

 // change definitions so that expectations correspond to the facts
 // ------------------------------||----------fact-------------||---expect---------------
 console.log(firstBar.getName()); //      my name is first bar      my name is first bar
 console.log(firstBar.someValue); //      3                         3
 console.log(firstBar.getChildren()); //  123                       123

 console.log(secondBar.getName()); //     my name is Foo            my name is
 console.log(secondBar.getChildren()); // 123                       [empty string]
 console.log(secondBar.someValue); //     1                         undefined
