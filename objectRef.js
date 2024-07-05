const obj1 = {
  name: "kalyan",
};
console.log(obj1.name);
const obj2 = obj1;
obj2.name = "Ram";
console.log(obj1.name);
let obj3 = obj1;
obj3 = {
  name: "Ravi",
};

console.log(obj1.name);
console.log(obj2.name);
console.log(obj3.name);
