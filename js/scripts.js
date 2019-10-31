//Business Logic
const thousands = ['M'];
const hundreds = ['C', 'D'];
const tens = ['L', 'X'];
const ones = ['I', 'V'];
function romanNumeral(number){
  let stringNumber = number.toString().split('');
  console.log("split: ", stringNumber);
  if(number > 3999){
    alert('Roman Numerals only go up to 3,999, please enter a smaller number');
  } else if (number.length){
    console.log('Else');
    //How many times divisible?
    //Multiple that number by M
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
