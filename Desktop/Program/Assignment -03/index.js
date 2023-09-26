const obj1 = { name:"Person 1", age:5 }
console.log(JSON.stringify(obj1));
const obj2 = { age:5, name:"Person 1" }
console.log(JSON.stringify(obj2));
if (JSON.stringify(obj1) == JSON.stringify(obj2))
{
console.log("Equal");
} else{
console.log("Not Equal");
}
