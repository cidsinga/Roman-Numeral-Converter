//Business Logic
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const numberalMatch = ['M', 'CM', 'D', 'CD', 'C', 'LC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function romanNumeral(numInput){
  for(var i = 0; i<numbers.length; i++){
    // console.log(i);
    console.log('numbers[i]', numbers[i]);
    while(numInput%numbers[i] <numInput){
      console.log('i: ', i);
    }
  }
}


//Front End Logic
$(document).ready(function(){
  $('#romanNumeralForm').submit(function(event){
  event.preventDefault();
  let numeralInput = parseInt($('input#numberInput').val());
  let numeralConverter = romanNumeral(numeralInput);
  });
});

//Creating an array that's always 4 indices long
// if(numArr.length < 4){
// 	for(var i = 0; i < 3; i++){
// 		numArr.unshift('0');
// 	}
// }
// let slicedArray = numArr.slice(-4);


//If/Else index check
// if(slicedArray[0] === "0"){
//   console.log("slicedArray[i] 0 branch", slicedArray[i]);
//   slicedArray.splice(0,1);
//   console.log("Splice: ", slicedArray);
// } else if(slicedArray[i] === "1"){
//   console.log("Index is 1!");
// } else if(slicedArray[i] === "2"){
//   console.log("Index is 2!");
// }else if(slicedArray[i] === "3"){
//   console.log("Index is 3!");
// }else if(slicedArray[i] === "4"){
//   console.log("Index is 4!");
// }else if(slicedArray[i] === "5"){
//   console.log("Index is 5!");
// }else if(slicedArray[i] === "6"){
//   console.log("Index is 6!");
// }else if(slicedArray[i] === "7"){
//   console.log("Index is 7!");
// }else if(slicedArray[i] === "8"){
//   console.log("Index is 8!");
// }else if(slicedArray[i] === "9"){
//   console.log("Index is 9!");
// }
