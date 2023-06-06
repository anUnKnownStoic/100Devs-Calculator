// Required function
// Accept inputs
// Should accept decimal numbers
// store inputs
// Recognize input and Perform calculations
// return results

// Optional features
// Accept longer arithmetics
// Display all inputs as it is being entered
// Store previous total as start of next operation
// Clear all entries using AC button
// Should prevent invalid inputs(operators next to each other, two decimal points)

const keys = document.querySelector('.calculatorButtons');
keys.addEventListener('click', event => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return;
  } else {
    calculator.parseInput(value);
  }
});

const calculator = {
  displayText: '0',
  prevResult: null,

  parseInput(value) {
    switch (value) {
      case '=':
        // calculateAnswer
        this.calcAnswer(this.displayText);
        break;
      case 'AC':
        // clear screen and stored values
        break;
      case '.':
        if (this.displayText === '0') {
          this.addText('0.');
          // pass '0'  into add text method
        } else {
          // add value to tex string
          this.addText(value);
        }
        break;

      default:
        // add value to text string
        this.addText(value);

        break;
    }
  },
  addText(value) {
    if (this.displayText === '0') {
      this.displayText = '';
    } else if (this.prevResult !== null) {
      this.displayText = this.prevResult;
      this.prevResult = null;
    }
    // if user has entered an invalid sequence don't proceed
    // check whether the last char in displayText and entered text aren't  numbers.
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
      // if user has entered an invalid sequence don't proceed
      // check whether the last char in displayText and entered text aren't  numbers.
    }
    this.displayText += value;
    this.outputText(this.displayText);
  },
  outputText(text) {
    document.querySelector('.calculatorScreen').value = text;
  },
  calcAnswer(equ) {
    const result = Function("return "+equ)()
    this.outputText(result);
    this.displayText= result;
  },
};
