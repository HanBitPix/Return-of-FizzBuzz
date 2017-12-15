/*

In this challenge, you'll re-implement FizzBuzz. This time you'll create an event listener that 
listens for when a user submits a form indicating how high to count. This event should cause the 
program to create the FizzBuzz sequence up to the number requested by the user.

For each element in the FizzBuzz sequence, your code should insert an element into the .js-results div 
that looks like this:

<div class="fizz-buzz-item">
  <span>1</span>
</div>

<div class="fizz-buzz-item fizz">
  <span>fizz</span>
</div>

<div class="fizz-buzz-item buzz">
  <span>buzz</span>
</div>

<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
</div>
*/


'use strict';

// User type in a positive number
// Results shows the fizzbuzz

// $('.js-results').append('<div class="fizz-buzz-item"><span>1</span></div>');

$(function() {
  $('#number-chooser').submit(function(event){
    // this stops the default form submission behavior
    event.preventDefault();
    // Inputs the value from the user
    const userTextElement = $(event.currentTarget).find('#number-choice');

    // Empty the results
    $('.js-results').empty();

    let userNumber = userTextElement.val();

    //-_- lets see...
    let fizzBuzz = [];

    for (let i = 1; i <= userNumber; i++){
      if (i % 15 === 0){
        fizzBuzz.push($('<div class="fizz-buzz-item"><span>fizzbuzz</span></div>'));
        console.log(fizzBuzz);
      }
      else if (i % 5 === 0){
        fizzBuzz.push($('<div class="fizz-buzz-item"><span>buzz</span></div>'));
        console.log(fizzBuzz);
      }
      else if (i % 3 === 0){
        fizzBuzz.push($('<div class="fizz-buzz-item"><span>fizz</span></div>'));
        console.log(fizzBuzz);
      }
      else {
        fizzBuzz.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
        console.log(fizzBuzz);
      }
    }
    $('.js-results').append(fizzBuzz);
    // Resets the input
    userTextElement.val('');
  });  
});

