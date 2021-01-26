let rowNumber = window.prompt("Insert number of rows!");
let columnNumber = window.prompt("Insert number of columns!");

function createTable() {
 for(let row= 0; row < parseInt(rowNumber); row++)
  {
   let x=document.getElementById('myTable').insertRow(row);
   for(let col= 0; col < parseInt(columnNumber); col++)  
    {
     let y= x.insertCell(col);
     y.innerHTML= "Row-" + row + " Column-" + col; 
    }
   }
}