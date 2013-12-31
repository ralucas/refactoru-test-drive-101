Test Drive 101
--------------
####Objective
Implement a pure splice function using test-driven development...

####Resources
* [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Jasmine (docs)](http://pivotal.github.io/jasmine/)
* [How Do I Jasmine (tutorial)](http://evanhahn.com/how-do-i-jasmine/)
* [Unit Testing (Raine's Presentation)](http://slid.es/rainelourie/unit-testing/fullscreen)

####Requirements
######Part I
1. Download or clone the test-drive-101 files from the exercise-starters repo.
1. Open test-runner.html in your browser. Open the dev tools console. See the errors that say FAIL? Congratulations, you're already through the "red" phase of test-drive development!
1. Open spec.js in your editor. Implement the splice method so the accompanying tests all pass. You are not allowed to use the built-in splice method in your function; you are reproducing its functionality from scratch in a functional style.

  > Tip: Look over the included assert functions which serve as a barebones testing framework. Look over the unit tests at the end (where assert is called) to see the kinds of things that are being tested for. You will get to write your own unit tests soon!

######Part II
1. Read the How Do I Jasmine tutorial.
1. Clone or download the jasmine boilerplate from the student-sample-code repo. Save this into the local repo you will be submitting for this exercise.
1. Copy your splice function into a new javascript file and modify SpecRunner.html to include it.
1. Open SpecRunner.html in your browser to see the initial (failing) test suite being invoked.
1. Rewrite the unit tests from Part I using Jasmine-style unit tests. Write these in spec/my-spec.js which is already being included by SpecRunner.html. Make sure that the tests all pass, and that they cover all the cases originally covered in Part I.
