//Business Logic
const thousands = ['M'];
const hundreds = ['C', 'D'];
const tens = ['L', 'X'];
const ones = ['I', 'V'];
function romanNumeral(number){
  let numArr = [];
  let stringNumber = number.toString().split('');
  // console.log("split: ", stringNumber);
  if(number > 3999){
    alert('Roman Numerals only go up to 3,999, please enter a smaller number');
  } else if(stringNumber.length < 5){
  	for(var i = 0; i <= 4; i++){
  		stringNumber.unshift('0');
      let slicedArray = stringNumber.slice(-4);
      console.log("slicedArray: ", slicedArray);
      console.log("slicedArray[i]", slicedArray[i]);
      if(slicedArray[0] === "0"){
        console.log("slicedArray[i] 0 branch", slicedArray[i]);
        slicedArray.splice(0,1);
        console.log("Splice: ", slicedArray);
      } else if(slicedArray[i] === "1"){
        console.log("Index is 1!");
      } else if(slicedArray[i] === "2"){
        console.log("Index is 2!");
      }else if(slicedArray[i] === "3"){
        console.log("Index is 3!");
      }else if(slicedArray[i] === "4"){
        console.log("Index is 4!");
      }else if(slicedArray[i] === "5"){
        console.log("Index is 5!");
      }else if(slicedArray[i] === "6"){
        console.log("Index is 6!");
      }else if(slicedArray[i] === "7"){
        console.log("Index is 7!");
      }else if(slicedArray[i] === "8"){
        console.log("Index is 8!");
      }else if(slicedArray[i] === "9"){
        console.log("Index is 9!");
      }
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




// Checking Thousands up to 4
// for(var i = 1; i <= number[0]; i++){
// 	replace(M)
// }
