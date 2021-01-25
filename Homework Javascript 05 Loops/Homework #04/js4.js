// Homework #4

let firstNames = ["Bob", "Jill", "John", "Ben", "Harry"];
let lastNames = ["Bobsky", "Jillsky", "Doe", "Ten", "Potter"];
let fullNames = [];

for(let i = 0; i < firstNames.length; i++){
    let fullName = (i+1) + ". " + firstNames[i] + " " + lastNames[i];
    fullNames.push(fullName);
}
console.log(fullNames);