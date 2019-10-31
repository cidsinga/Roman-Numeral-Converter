//Business Logic
function romanNumeral(){
  if(numeralInput > 3999){
    alert('Roman Numerals only go up to 3,999, please enter a smaller number');
  } else if () {
    //How many times divisible?
    //Multiple that number by M
  }
}

//Front End Logic
$(document).ready(function(){
  $('#romanNumeralForm').submit(function(event){
  event.preventDefault();
  let numeralInput = parseInt($('input#numberInput').val());
  let numeralConverter = romanNumeral(numberInput, );
  });
});
