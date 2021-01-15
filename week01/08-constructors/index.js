// scoping: global scopes and local scopes (function) -> variable access
// hoisting: declaration of variables (and function declarations) are processed first / moved to the top.

/*var sarah = {
    first: "Sarah",
    facts: [
        "ran NYC Marathon",
        "Dieter Zetsche is my godfather",
        "yoga teacher",
    ],
};
var kelly = {
    firstname: "Kelly",
    facts: ["love running", "love cooking", "like samba music"],
};
var denis = {
    firstName: "Denis",
    facts: ["DJ", "driving motorcross", "like baking"],
};*/

var johannes = {
    name: "Johannes",
    facts: ["fitness trainer licence", "love cooking", "really good at chess"],
};

// important: constructor functions are always uppercased
function Person(firstname, facts) {
    // "this" references the object being created by the Person constructor
    this.first = firstname;
    this.facts = facts;
}

// Putting functions on the prototype of our constructor,
// will make that function accessible on all objects created by that constructor.
// We are sharing the very same sleep function for all our Person objects.
Person.prototype.sleep = function () {
    // the object that "this" is refering to is based on the context
    console.log(this.first, "😴💤");

    // WAY 1 to preserve context:
    /*// "that" is a new reference to the current object to preserve the context
    var that = this;
    // inside our callback function, "this" no longer references the current object,
    // because our callback function runs in a different context (the context of setTimeout).
    setTimeout(function () {
        console.log(this.first, "feeling refreshed 💪"); // this.first is undefined
        console.log(that.first, "feeling refreshed 💪");
    }, 2000);*/

    // WAY 2 to preserve context:
    setTimeout(
        function () {
            console.log(this.first, "feeling refreshed 💪"); // this.first works again
        }.bind(this), // preserving context of sleep function
        2000
    );
};

var denis = new Person("Denis", ["DJ", "driving motorcross", "like baking"]);

// implicit binding
//denis.sleep(); // calling sleep() on denis -> context inside the sleep function will reference denis

var kelly = new Person("Kelly", [
    "love running",
    "love cooking",
    "like samba music",
]);

//kelly.sleep();

/*
var sarah = new Person("Sarah", [
    "ran NYC Marathon",
    "Dieter Zetsche is my godfather",
    "yoga teacher",
]);
sarah.sleep();
var johannes = new Person("Johannes", [
    "fitness trainer licence",
    "love cooking",
    "really good at chess",
]);
//johannes.sleep();
// we can't see the sleep fn when we log the object,
// because we added the sleep fn to the prototype of the object.
// And by default when you log an object to the console, you won't see the prototype.
console.log(kelly);
// But you can look at the prototype with the __proto__ property that exists on all objects.
// And you are going to see the sleep fn there.
console.log(kelly.__proto__);
// The in operator will give you true for all properties on the prototype as well.
console.log("sleep" in kelly); // true
console.log(kelly instanceof Person); // true, because we created that object with the Person constructor
console.log(johannes instanceof Person); // false, because we created that object by hand
console.log(denis);
console.log(sarah);
console.log(johannes);*/

var cohort = {
    name: "Tonkabohne",
    logName: function () {
        console.log(this.name);
    },
};

cohort.logName(); // implicit binding

setTimeout(cohort.logName.bind(cohort), 2000); // explicit binding

// exercises:
// 2: invert case character by character
// invertCase("Hello"); // "hELLO"

// you can access individual characters on a string like you access elements in arrays
var str = "Hello";

console.log(str[1]); // second character -> e
