
// FIRST EXERCISE

let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
let namesLengthArray = [];

function mapToArrayElementsLength(){
    for (i = 0; i < namesArray.length; i++)
    namesLengthArray.push(namesArray[i]);
    console.log(namesLengthArray);
}

mapToArrayElementsLength();




// SECOND EXERCISE 

let num = 100;
let emptyArray = [];


function getDividableNumbers() {
    for (let i = 0; i < num; i++) {
        if ((i % 7 === 0 ) && (i % 3 === 0))
            emptyArray.push(i);
        }
        console.log(emptyArray);
}

getDividableNumbers();





    