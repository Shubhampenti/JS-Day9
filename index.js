
//Reverse a String
const str = "Hello";
const reversedStr = str.split('').reverse().join('');
console.log("Reversed String:", reversedStr);

//Iterate Object Values and Keys
const obj = { name: "Alice", age: 25, city: "New York" };

for (const [key, value] of Object.entries(obj)) {
    console.log(`Key: ${key}, Value: ${value}`);
}
