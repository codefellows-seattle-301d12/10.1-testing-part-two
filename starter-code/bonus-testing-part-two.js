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

ateTheCaretaker();

assert(
  typeof(tooHungryDay) === 'number',
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
  'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay)
);

assert(
  tooHungryDay <= mealsPerDay.length,
  'tooHungryDay was a possible day.',
  'tooHungryDay was too high of a number and wasn\'t one of the possible days.'
);
  /* TODO:
     Write a second test asserting that tooHungryDay falls within an acceptable answer
     based on the number of days available in the array. */

function ateTheCaretaker() {
  var mealAverage;
  var eaten = false;
  mealsPerDay.reduce(function(curr, next, idx) {
    mealAverage = (curr + next) / (idx + 1);
    console.log('Day ' + (idx + 1) + ' meal average: ' + mealAverage);
    if (mealAverage < 4 && eaten === false) {
      tooHungryDay = idx + 1;
      eaten = true;
    }
    return curr + next;
  }, 0);
}

  /*
   TODO:
   Cycle through the days in mealsPerDay. Log the cumulative average
   meals/day the lion ate since the new caretaker started.
   tooHungryDay should be equal to the day the lion started
   pondering protein supplements (the first day the average dips below 4
   meals) Remember: humans count days starting at 1!
  */
