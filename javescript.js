// var n = 1024;
// console.log(typeof n);
//
// var x;
// x1 = parseInt("015", 10);
// x2 = parseInt("015", 10);
// x3 = parseFloat(15.99, 10);
// console.log(x3);
// var tamil = "This is Code";
// console.log(tamil.charAt(1));
// console.log(typeof tamil.charAt(0));
//
// var Stringi = "Hello";
// console.log(Stringi.length);
//
// var u;
// console.log(u, typeof u);   // undefined 'undefined'
//
// var u = 2;
// console.log(u, typeof u);   // 2, 'Number'
//
// var v = 500;
// console.log(v.nonExistentProperty, typeof v.nonExistentProperty); // undefined 'undefined'
//
// var w = null;
// console.log(w, typeof w);      // null 'object'
//
// var otherNames = new Array();
// otherNames[0] = "Julie";
// otherNames[1] = "Vincent";
// otherNames[2] = 0;
//
// console.log(otherNames[1], typeof otherNames[1]);
//
// var fruits = ['Apple', 'Banana'];
// console.log(fruits.length);
//
// fruits.forEach(function (item, index, array) {
//     console.log(item, index)
// });
//
// var newLength = fruits.push('Orange');
// console.log(fruits)// ["Apple", "Banana", "Orange"]
// console.log(newLength);
//
// var pop = fruits.pop();
// console.log(fruits);
//
//
// var beitrag = {
//     Titel: "TRIP",
//     Name: "David",
//     Nummer: "0123-456789"
// };
// console.log(beitrag);
// console.log('The information of the post: ', beitrag.Titel, beitrag.Name, beitrag.Nummer);
// console.dir(beitrag);
//
// var phonebookEntry2 = {
//     firstName: 'Hans',
//     lastName: 'Wurst',
//     number: '0123456789',
//     print: function () {
//         console.log("%s, %s: %d",
//             this.firstName,
//             this.lastName,
//             this.number);
//     }
// };
// phonebookEntry2.print();
//
//
// //////////////////////
//
// var Color = {
//     RED: 0,
//     GREEN: 1,
//     BLUE: 2
// };
// console.log(Color.RED); /// 0 int
// var color = Color.BLUE; //2 int
// console.log(color === Color.GREEN);
// var Color2 = {
//     RED: "RED",
//     GREEN: "GREEN",
//     BLUE: "BLUE"
// };
// console.log(Color2.RED);
// var Color3 = {
//     RED: 0xFF0000, GREEN: 0x00FF00, BLUE: 0x0000FF
// };
// console.log(Color3.RED);
//
// var hexa = 0XFF1788;
// console.log(hexa);
//
//
// function addition(x, y) {
//
//     return x + y;
//
// }
//
// console.log(addition(3, 4));
//
//
// // function add2(arg1, arg2) {
// //     if (typeof (arg1) !== "number" || typeof (arg2) !== "number") {
// //         throw new TypeError('Arguments of "add" must be of type "number"');
// //     }
// //     return arg1 + arg2;
// // }
// //
// // console.log(add2("Hello", "World")); // TypeError
// //
// //
// function check(txt) {
//     if (txt.length > 10) {
//         throw new TypeError("The Letter is more than 10 Charechter")
//     }
//     return txt;
//
//
// }
//
// console.log(check("Hello"));
//
//
// function createPow(exponent) {
//     return function (x) {
//         var result = x;
//         for (var i = 1; i < exponent;
//              i++) {
//             result *= x;
//         }
//         return result;
//     };
// }
//
// console.log(createPow(3)(2));
//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function isEven(element, index, array) {
//     return element % 2 === 0;
// }
//
//
// console.log(numbers.every(isEven));   //sind alle Elemente %2===0?
// console.log(numbers.filter(isEven)); // show me the %2===0 Elements
// console.log(numbers.map(isEven));   // check alle Elemente in the Array
// console.log(numbers.some(isEven)); // sind manche Elemente %2 true?
// console.log(numbers.reduce(isEven)); // KA
//
//
// function sum() {
//     var result = 0;
//     for (var i = 0; i < arguments.length; i++) { //lg=3 re=1 res=1 res=3
//         result += arguments[i];
//     }
//
//
//     return result;
// }
//
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));
//
//
// function add4(a, b, log) {
//     var result = a + b;
//     if (log) {              //es ist immer true
//         console.log(result);
//     }
//     return result;
// }
//
// add4(5, 2, true);   //weil wir true gegeben haben
// add4(5, 2, false);  //weil wir false gegeben dann wird if(log) nicht ausgefuehrt
// add4(5, 2);             // 7 // //
//
//
// function getName() {
//     return this.name;
// }
//
// var heinz = {
//     name: "Heinz",
//     getName: getName
// };
// var anna = {
//     name: "Anna",
//     getName: getName
// };
// console.log(getName());
// name = "Michael";   // globale Variable // ?
// console.log(getName());
// console.log(heinz.getName());
// console.log(anna.getName());
// // ?
//
// // ?
// // ?
//
//
// var button = {
//     onClick: null,
//     click: function () {
//         if (typeof this.onClick === "function") {
//             this.onClick();
//         }
//     }
// };
// var handler = {
//     name: "MyClickHandler",
//     onClick: function () {
//         console.log("Click handled by: %s", this.name);
//     }
// };
// button.onClick = handler.onClick;
// button.click(); // Click handled by: undefined
//
//
// var h = new Date().getHours()
// var m = new Date().getMinutes()
// var s = new Date().getSeconds();
// console.log("Time is:  %d", h, ':', m, ':', s);         //Time
//
// if (h < 11) {
//     console.log("Morgen")
// } else {
//     console.log('Schoenen Tag');
// }
//
//
// console.log(new Date());                       // Date
//
//
// function log(msg) {
//     if (msg !== undefined && msg !== null && msg.length !== 0) {
//         console.log(msg);
//     }
// }
//
// function log2(msg) {
//     if (msg && msg.length) {
//         console.log(msg);
//     }
// }
//
// log(undefined);
// log(null);
// log("");
// log("Hello");
// //
// // Hello
//
//
// var month = new Date().getMonth() + 1;
// switch (month) {
//     case 3:
//     case 4:
//     case 5:
//         console.log("Frühling");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Sommer");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Herbst");
//         break;
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;
//     default:
//         console.error("WTF?!");
// }
//
// var month = new Date().getMonth() + 1;
// console.log(month)
//
// var i = 0;
// while (i <= 50) {
//     console.log(i)
//     i++
// }
//
// for (var i = 1; i <= 10; i++) {
//     var line = "";
//     for (var j = 1; j <= 10; j++) {
//         line += ((j * i) + "\t");
//     }
//     console.log(line);
// }
//
// var a = ["a", "b", "c", "d", "e"];
// for (var m = 0, length = a.length; m < length; m++) {
//     console.log(a[m]);
// }
//
// var pbEntry = {
//     firstName: "Hans",
//     lastName: "Wurst",
//     number: "0123-456789",
//     print: function () {
//
//     }
// };
//
// for (var key in pbEntry) {
//     console.log("%s: %s (%s)", key, pbEntry[key], typeof pbEntry[key]);
// }
//
//
// function search(haystack, needle) {
//     var found = false;
//     for (var i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle) {
//             found = true;
//             break;
//         }
//     }
//     return found;
// }
//
// console.log(search([1, 2, 3, 4, 5], 3));
//
// try {
// // do something that may
// // throw an error, e.g.
//     var x = 1, y = 2;
//     var result = x + y;
//     // var i = 42; console.log(i.toUpperCase());
//     console.log(result.toUpperCase());
// } catch (error) {
//     console.error("Unable to print i:", error.message);
// } finally {
//     console.log("Done.");
// }
//
// var p1 = {
//     firstName: "Max",
//     lastName: "Mustermann",
//     print: function () {
//         console.log("%s %s", this.firstName, this.lastName);
//     }
// };
//
//
// var p2 = {
//     firstName: "Hans",
//     lastName: "Wurst",
//     car: {
//         manufacturer: "ACME",
//         model: "Pinky"
//     },
//
//     print: function () {
//         console.log("%s %s (Car: %s %s)",
//             this.firstName,
//             this.lastName,
//             this.car.manufacturer,
//             this.car.model);
//     }
//
// };
//
// p1.print();
// p2.print();
// console.log('+++++++++++++++++++++++++++++')
//
//
// var Person = {
//     firstName: null,
//     lastName: null,
//     print: function () {
//         console.log("%s %s", this.firstName, this.lastName);
//     },
//     init: function (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         return this;
//     }
// };
// var p3 = Object.create(Person);
// p3.print();
//
// console.log('+++++++++++++++++++++++++++++')
//
// var p4 = Object.create(Person);
// p4.firstName = "Max";
// p4.lastName = "Mustermann";
// p4.print();
//
// console.log('+++++++++++++++++++++++++++++')
// var p5 = Object.create(Person, {firstName: {value: "John"}, lastName: {value: "Smith"}});
// p5.print();
// console.log('+++++++++++++++++++++++++++++')
// var p6 = Object.create(Person);
// p6.firstName = "Christian";
// p6.lastName = "Bettinger";
// p6.age = 40; // dynamically added property
// console.dir(p6);
// p6.print();
//
//
// var p7 = Object.create(Person).init("Jane", "Doe");
// p7.print();

//
// var Person = {
//     firstName: null, lastName: null, print: function () {
//         console.log("%s %s", this.firstName, this.lastName);
//     }
// };
// var p = Object.create(Person);
// console.log(Object.getPrototypeOf(p));
//

// var Person = {
//     firstName: null, lastName: null, print: function () {
//         console.log("%s %s", this.firstName, this.lastName)
//     }
// };
//
// var p1 = Object.create(Person);
// p1.firstName = "John";
// p1.lastName = "Smith";
// p1.print();
//
// // inherited object
// var Employee = Object.create(Person);
// // new property with default value
// Employee.salary = 48000;
// Employee.Age = 29;
// // override method
// Employee.print = function () {
//     Person.print.call(this);
//     console.log(this.Age);
// };
//
// var e1 = Object.create(Employee);
// e1.firstName = "Jane";
// e1.lastName = "Doe";
// // e1.salary = 55000;
// e1.print();
//
// var p1 = Object.create(Person);
// p1.firstName = "John";
// p1.lastName = "Smith";
// p1.print();

//
// let name = "Heinz";
// let age = 42;
//
// function getRandomName() {
//     let names = ["Jane", "John", "Max"];
//     return names[Math.floor(Math.random()
//         * names.length)];
// }
//
// let text = `Hello ${getRandomName()}. My name is ${name} and I'm ${age} years old.`;
// console.log(text);
//


// let name="Mohammad";
// let Age = "29";
//
// function getLeuteNames (){
//     let leute= ["Keti", "Ramiz", "Saad", "Abo"];
//     return leute[Math.floor(Math.random()* leute.length)];
// }
// let txt= `Hello ${getLeuteNames()}. My name is ${name} and i am ${Age} years old;
// console.log(txt);

// function createRandomPassword() {
//     return 'mmhhjjkk%'
// }

// function createUser(name, password, admin = false) {
//     console.log("Created user:", admin ? " admin" : "", name);
//     console.log(password);
// }
// createUser('bettingc', "1234");
// createUser("admin", "h o ch s chu l e t rie r", true);
//
//

// function createUser(name, pass, admin = false) {
//     console.log("Created User: ", name, "Password: ", pass, admin ? "Admin" : "");
// }
//
// createUser("Mohammad", "DDDKKK");
//
// createUser("Anna", "JJJJJ", true)
// createUser("doejane");


// function log(message, data = null) {
//     console.log(message);
//     if (data) {
//         console.dir(data);
//     }
// }
//
// log("Simple log message");
// log("Log message with payload", {error: false, line: 42});


// function createUser(name, password, admin = false) {
//    console.log("The User name is:%s  The Password is: %s", name,password, admin ? "The Account is an admin" : "not Admin" )
// }
//
// let user = ["Keti", "h o ch s chu l e t rie r", false];
// createUser(user[0], user[1], user[2]);
//
//


// let a1 = [1, 2, 3];
// let a2 = [...a1];
// a2.push(4);
// console.log(a2);
// Array(3) [1, 2, 3]
// Array(4) [1, 2, 3, 4]


// let returnTrue = () => true;
// console.log(returnTrue());


// let pow2 = x => Math.pow(x, 2);
// console.log(pow2(4));


function Button(onClick = null) {
    this.onClick = onClick;
}

Button.prototype.click = function () {
    if (typeof this.onClick === "function") {
        this.onClick();
    }
};
// (function () {
//     this.name = "main";
//let button = new Button(function () {
// console.log("Click handled by: %s", this.name);
//     //});    // Click handled by: undefined
//     let button = new Button(() => console.log("Click handled by: %s", this.name));
//     button.click();
// })();
// Click handled by: main

//
// let salaries = new Map([["Jane Doe", 55000], ["Hans Wurst", 32000], ["Max Mustermann", 44000]
// ]);
// for (let name of salaries.keys()) {
//     console.log(name);
// }
// for (let salary of salaries.values()) {
//     console.log(salary);
// }
// for (let employee of salaries.entries()) {
//     console.log("%s: %d", employee[0], employee[1]);
// }

//
// let salaries = new Map([]);
// let names = ["Jane Doe", "Hans Wurst", "Max Mustermann"];
// let employees = new Set(names);
// for (let employee of salaries) {
//     console.log(employee);
// }
//
//
// function asyncA(callback) {
//     asyncA((error, result) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(result);
//         }
//     });
// // do something long lasting, e.g. read // a file, do a HTTP request or just
// // wait for 100 milliseconds
//     let value = Math.random();
//     if (value < 0.1) {
// // something wrong happens
//         callback(value, null);
//     } else {
// // everything is fine, we're done
//         callback(null, value);
//     }
// }
// let doSomething = new Promise(result);
// var button = document.getElementById("okButton"); button.addEventListener("click", () => {
//     button.disabled = true;
//     doSomething.then(() => { console.log("yay");
//     }).catch(() => { console.error("oops");
//     }).finally(() => { button.disabled = false;
//     }); });


function asyncA() {
    return new Promise((resolve, reject) => {
        let value = Math.random();
        if (value < 0.1) {
            reject(value);
        } else {
            resolve(value);
        }
    });
}