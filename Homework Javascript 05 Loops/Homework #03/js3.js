// Homework #3


let numberArray = [50, 32, 14, 100, 45];

console.log(`In the array: ${numberArray}`);

let max = -Infinity;
let min = +Infinity;
let sum;

for(let i = 0; i <= numberArray.length - 1; i++){
    if(numberArray[i] > max){
        max = numberArray[i];
    }
    if(numberArray[i] < min){
        min = numberArray[i];
    }
}
sum = max + min;

console.log(`Max number is: ${max}`);
console.log(`Min number is: ${min}`);
console.log(`Sum is: ${sum}`);






// Bonus


// randomArray = ["river", "mask", 39, 18, 70, "12", 2, true, 56];
// max = -Infinity;
// min = +Infinity;
// sum = 0;

// console.log(`In the array: ${randomArray}`);

// for(let i = 0; i <= randomArray.length - 1; i++){
//     if(typeof randomArray[i] === 'string' || typeof randomArray[i] === 'boolean' || typeof randomArray[i] === 'object'){
//         continue;
//     }
//     if(randomArray[i] > max){
//         max = randomArray[i];
//     }
//     if(randomArray[i] < min){
//         min = randomArray[i];
//     }
// }
// sum = max + min;

// console.log(`Max number is: ${max}`);
// console.log(`Min number is: ${min}`);
// console.log(`Sum is: ${sum}`);
