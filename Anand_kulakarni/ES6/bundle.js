/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var testConstant = __webpack_require__(1);
	var testScope = __webpack_require__(2);
	var testEnhancer = __webpack_require__(3);
	var testArrows = __webpack_require__(4);
	var testExtpar = __webpack_require__(5);
	var testTempl = __webpack_require__(6);
	var testDest = __webpack_require__(7);

	testConstant();
	testScope();
	testEnhancer();
	testArrows();
	testExtpar();
	testTempl();
	testDest();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function testConstant() {
	    var PI = 3.149;
	    console.log('PI value is', PI);
	    //PI=3.14;
	}

	module.exports = testConstant;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function testScope() {
	    var y = 90;
	    if (y == 90) {
	        var x = 20;
	        //let x=20;
	    }
	    console.log('Var x is', x);
	}

	module.exports = testScope;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function testEnhancer() {
	    var Order = {
	        id: 1,
	        title: "ES",
	        price: 300,

	        printOrder: function printOrder() {
	            console.log("ID is " + this.id + " Title is " + this.title + " Price is " + this.price);
	        },
	        getPrice: function getPrice() {
	            console.log("Order Price is " + this.price);
	        }
	    };

	    Order.printOrder();
	    Order.getPrice();

	    var testOrder = Object.assign({}, Order);
	    console.log(testOrder);
	}
	module.exports = testEnhancer;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function testArrows() {
	    /*var fbUser={
	        "name":"Sravya",
	        "friends":["Tom","Jerry","TOMJERRY"],
	        printFriends(){
	            var currentUser=this.name;
	            this.friends.forEach(function(friend){
	                console.log(currentUser, "is a friend of", friend);
	            });
	        }
	    }
	    
	    var fbUseres6={
	        "name":"Sravya1",
	        "friends":["Tom1","Jerry1","TOMJERRY1"],
	        printFriends(){
	            this.friends.forEach(friend=>{
	                console.log(this.name, "is a friend of", friend);
	            });
	        }
	    }
	    fbUseres6.printFriends();
	    fbUser.printFriends();
	    */

	    var names = ['Tom', 'Ivan', 'Jerry'];
	    var namesObj = names.map(function (name) {
	        return {
	            name: name, length: name.length
	        };
	    });

	    console.log(namesObj);
	}
	module.exports = testArrows;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	function testExtpar() {
	    var add = function add(a) {
	        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	        console.log(a, b);
	    };
	    var userFriends = function userFriends(username) {
	        for (var _len = arguments.length, userfriends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            userfriends[_key - 1] = arguments[_key];
	        }

	        console.log(username, userfriends);
	    };

	    // function printCapitalNames(al){
	    //     var ac = al.map(v=> {return v.toUpperCase()});
	    //     return ac;
	    // }

	    function printCapitalNames(p, q, r, s, t) {
	        console.log(p.toUpperCase());
	        console.log(q.toUpperCase());
	        console.log(r.toUpperCase());
	        console.log(s.toUpperCase());
	        console.log(t.toUpperCase());
	    }

	    var names = ["abc", "def", "ghi", "jkl", "mno"];

	    //console.log(printCapitalNames(names));

	    printCapitalNames.apply(undefined, names);
	    userFriends("Sravya", ["A", "B", "C", "D"]);
	    add(1, 5);
	}

	module.exports = testExtpar;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	function testTempl() {
	    var laptop = {
	        "model": "i710g",
	        "deskno": 12,
	        "name": "sravya",
	        ticket: function ticket() {
	            console.log("Problem with laptop with model " + this.model + ", desk number " + this.deskno + " and My name is " + this.name);
	        }
	    };
	    laptop.ticket();
	}

	module.exports = testTempl;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	function testDest() {
	    var arr = [1, 4, 9, 16];
	    var z = arr[2];

	    console.log("Third value is:", z);

	    var org = {
	        name: "Sravya",
	        address: {
	            city: "Guntur",
	            state: "AP",
	            pincode: 522007
	        } };

	    var pincode = org.address.pincode;

	    console.log("Pincode:", pincode);
	}

	module.exports = testDest;

/***/ }
/******/ ]);