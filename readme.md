## How to make auto typing with js

1- Define the requirements: What are the requirements of the library?
What should the user be able to do with it? Write down a list of requirements to guide the development process.

Ability to automatically type out a string of text, one character at a time, in a specified element on a webpage.
Ability to customize the typing speed, including the delay before typing begins, the speed of typing each character, and the delay between typing each character.
Ability to customize the backspacing speed, including the delay before backspacing begins, the speed of backspacing each character, and the delay between backspacing each character.
Ability to customize the behavior when reaching the end of the string, including whether to start over, stop, or continue blinking the cursor.
Ability to customize the cursor appearance, including the shape, color, and blink rate.
Ability to pause and resume the autotyping animation on demand.
Ability to interrupt the autotyping animation and delete the remaining characters on demand.
Ability to handle HTML tags in the input text, such as <br> or <a>.
Ability to trigger a callback function when the autotyping animation is complete.

- user can toggle between words and sentences per time
- user can add text inputs as he need
- user can choose to autotype per word or char
- user can specify time of
  - time of type speed
  - time of waiting between words
  - time of delete speed
  - time before delete
- INPUT must be

## Algo

- get inputs from user
  - HTML element
  - array of sentences
  - option object (optional)
    - typespeed , delete speed, wait before delete, wait between words, write whole word, stop after complete
- loop through sentences and save sentence and split it to array of chars
