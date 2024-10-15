// object oriented javascript sample code, creating a Map class
const map = new Map();
map.set("name", "Ayush");
map.set("age", 21);
map.set("city", "Delhi");

const firstName = map.get("name");
const age = map.get("age");
const city = map.get("city");

console.log(`${firstName} is a ${age} years old boy who lives in ${city}.`);
