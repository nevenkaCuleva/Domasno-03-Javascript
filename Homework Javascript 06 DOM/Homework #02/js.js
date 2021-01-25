let numberArray= [5, 10, 2, 8, 5];   


function printingArray(){
    for(i= 0; i < numberArray.length; i++){
        document.write(`<li> ${numberArray[i]} </li>`);
    }
}

printingArray();

function printingSum(){
    let sum = 0;  

    for (i = 0; i < numberArray.length; i++) {   
        sum = sum + numberArray[i];  
    }    

    document.write(`Sum of all elements in the array: ${sum}`);  
}

printingSum();


// BONUS VERSION


// function mathematicalOrder(){

//     let sum = 0;

//     for (i = 0; i < numberArray.length; i++) {   
//         sum = sum + numberArray[i]
//     }
//     document.write( `Sum of all elements in the array is: 
//     (${numberArray[0]} + ${numberArray[1]} + ${numberArray[2]} + ${numberArray[3]} + ${numberArray[4]} = ${sum})`);

// }

// mathematicalOrder();