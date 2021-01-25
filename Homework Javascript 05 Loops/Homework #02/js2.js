// Homework #2 

let numberRow = "";

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        numberRow = numberRow + i + " ";
    }
    else{
        numberRow = numberRow + i;
        console.log(numberRow);
        numberRow = "";
    }
}
