///////////////////////////
///////////////////////////
//////// variables ////////
///////////////////////////
///////////////////////////

let result = document.getElementById('result');
let input = document.getElementById('num');
let indexCheckbox = document.getElementById('index-zero');
let waiter = null;
let compare = null;

window.addEventListener('focus', function () {
  input.focus();
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    input.blur();
  } else {
    input.focus();
  }
});

result.innerHTML = "let's go!";
input.focus();

///////////////////////////
///////////////////////////
//////// functions ////////
///////////////////////////
///////////////////////////

// set value before keyUp to compare to
function setCompare() {
  compare = input.value;
}

// whenever the input is focused, highlight the contents
function highlight() {
  input.select();
}

// function to only get the number after 500ms of inactivity
// in other words, wait until the user is done typing before executing
function waitFirst() {
  clearTimeout(waiter);
  waiter = setTimeout(() => {
    validateInput();
  }, 500);
}

// validate the input
function validateInput() {
  if (input.value !== compare) {
    if (input.value > 0 && input.value <= 100) {
      calculate();
    } else if (input.value.length === 0) {
      result.innerHTML = "let's go!";
    } else if (
      result.innerHTML ===
        `<span id="shoulder-1">¯\\_</span><span id="head">(ツ)</span><span id="shoulder-2">_/¯</span>` ||
      result.innerHTML === `¯\\_(ツ)_/¯`
    ) {
      console.warn(`input received: ${input.value} -- invalid input!`);
      result.innerHTML = `<span id="shoulder-1">¯\\_</span><span id="head">(ツ)</span><span id="shoulder-2">_/¯</span>`;
      input.select();
    } else {
      console.warn(`input received: ${input.value} -- invalid input!`);
      result.innerHTML = `¯\\_(ツ)_/¯`;
      input.select();
    }
  }
}

// calculate the nth fibonacci number
function calculate() {
  const iterations = input.value;

  let dis = 1;
  let dat = 0;

  if (iterations < 3) {
    result.innerHTML = iterations - 1;
  } else {
    for (let i = 2; i < iterations; i++) {
      dis = dis + dat;
      dat = dis - dat;
    }
    result.innerHTML = dis.toLocaleString('en-US');
  }

  input.select();
}

// placeholder for feature not made yet
function inProgress() {
  alert("this feature isn't ready yet...");
  indexCheckbox.checked = true;
}
