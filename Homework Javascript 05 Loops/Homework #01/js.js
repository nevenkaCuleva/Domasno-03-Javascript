// Homework #1

let inputArray = [];
let insertedNumber = parseInt(prompt("Please insert the number of words."));

while(isNaN(insertedNumber)){
    alert("You didn't insert a number, please try again.");
}

for(let i = 0; i < insertedNumber; i++){
    let word = prompt(`Please insert the ${i+1}-st word!`);
    if(word == null){
        break;
    }
    inputArray[i] = word;
}
if(inputArray.length > 0){
    let finalSentence = getSentence(inputArray);
    alert(finalSentence);
}
else{
    alert("You didn't enter any word.");
}

function getSentence(inputArray){
    let sentence = "";
    for(let j = 0; j < inputArray.length; j++){
        if(j == inputArray.length - 1){
            sentence = sentence + inputArray[j] + "!";
            continue;
        }
        sentence = sentence + inputArray[j] + " ";
        console.log(sentence);
    }
    return sentence;
}