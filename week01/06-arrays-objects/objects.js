// properties: name, students...
// each property is a key value pair
// key (name): value
var cohort = {
    name: "Tonkabohne",
    students: ["Kelly", "Sarah", "Denis"],
    location: {
        city: "Stuttgart",
        country: "Germany",
    },
    excitement: 100,
    graduated: false,
    spiritAnimal: undefined,
};

for (var key in cohort) {
    console.log(key);
}

var obj1 = {};
var obj2 = {};

var cohort2 = cohort; // does NOT create a copy, just references the very same object

console.log(obj1 === obj2); // false, compared by reference
console.log(cohort === cohort2); // true, because both variable reference the very same object

console.log(cohort.name);
console.log(cohort.location.country);
console.log(cohort.students.length);

cohort.excitement = 105;

cohort.location.city = "Stuttgart-Mitte";

cohort.secret = "being in homeoffice";

console.log("BEFORE delete", cohort);

delete cohort.secret;

console.log("AFTER delete", cohort);

console.log(cohort.secret, "secret" in cohort); // undefined, false
console.log(cohort.spiritAnimal, "spiritAnimal" in cohort); // undefined, true

// other way to create new objects
var proto = {
    x: 1,
    y: true,
    z: function () {
        console.log("HELLO FROM OBJECT");
    },
};

// console.log(proto.z());

// we are using proto as a prototype for the new obj we are creating.
// That means, all the properties of proto are inherited to obj.
var obj = Object.create(proto);

// we can access x, y and z ob obj, because of the prototype
console.log(obj.x, obj.y); // 1 true

obj.z();
