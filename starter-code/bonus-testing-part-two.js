/* Welcome back to our testing exercise! This practice module
will allow you to become even more familiar with testing
concepts. We test to check the I/O of our apps. That is - we are not
checking for HOW something works, but rather the end RESULT and
state of a particular place in our application.
*/


function assert(expression, successMessage, failureMessage) {
  var green = '  \x1b[32m(test passing):\x1b[m';
  var red = '  \x1b[31m(test failing):\x1b[0m';
  var test = '\x1b[35m' + assert.caller.name + '\x1b[m';
  if (expression) {
    return console.log(test,'\n', green, successMessage);
  }
  console.log(test, '\n', red, failureMessage);
}

// BEGIN WORK BELOW - test code by running `node bonus-testing-part-two.js`
//  in your terminal!

/* ===================================================================
---------------------- Part Two! Hungry Lion ----------------------------
======================================================================
As long as the lion is well-fed, he doesn't care too much of the
humans that pass through. Unfortunately, the new caretaker is a little
absent-minded.

The lion needs 4 meals per day on average to stay happy. You're going to
figure out how many days it took before the lion decided to supplement his
diet with the caretaker.
*/

var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;


/*
DONE:
Cycle through the days in mealsPerDay. Log the cumulative average
meals/day the lion ate since the new caretaker started.
tooHungryDay should be equal to the day the lion started
pondering protein supplements (the first day the average dips below 4
meals) Remember: humans count days starting at 1!
*/
var hungry = function(){
  var avg = 0;
  for(var i = 0; i<mealsPerDay.length; i++){
    avg = ((avg*(i) + mealsPerDay[i]))/(i+1);
    if(avg<4){
      tooHungryDay = i;
      break;
    }
  };
  return tooHungryDay;
};
hungry();
var hungryLion = function(){
  assert(tooHungryDay, 'The lion appears to be too hungry after ' + tooHungryDay + ' days...', tooHungryDay+'- is data type of '+typeof(tooHungryDay));
};
hungryLion();
/* DONE:
Write a second test asserting that tooHungryDay falls within an acceptable answer
based on the number of days available in the array. */
var acceptable_answer = function(){
  assert(
    (tooHungryDay < 10 || tooHungryDay > 0),
    'tooHungryDay is acceptable answer'+ tooHungryDay,
    'tooHungryDay is not a acceptable answer' + tooHungryDay +' and its type is '+ typeof(tooHungryDay)
  );
};
acceptable_answer();
//CHECK DATA TYPE OF tooHungryDay
assert(
typeof(tooHungryDay) === 'number',
'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay)
);
