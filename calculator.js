/* const chalk = require("chalk"); */

/* const numbers = process.argv.slice(2); */

/* const firstNumber = +numbers[0];
const secondNumber = +numbers[1]; */

const addition = (number1, number2) => number1 + number2;
const substraction = (number1, number2) => number1 - number2;
const multiplication = (number1, number2) => number1 * number2;
const division = (number1, number2) => number1 / number2;

/* const calculator = (number1, number2) => {
  if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    const added = addition(number1, number2);
    const substracted = substraction(number1, number2);
    const multiplied = multiplication(number1, number2);
    const divided = division(number1, number2);

    console.log(
      chalk.blue(
        `Resultados: 
    ${number1}+${number2} = ${chalk.magenta(added)}, 
    ${number1}-${number2} = ${chalk.yellow(substracted)}, 
    ${number1}*${number2} = ${chalk.red(multiplied)}, 
    ${number1}/${number2} = ${chalk.green(divided)}`
      )
    );
  }
  console.log(chalk.red("Error! Please enter a valid something."));
  process.exit(9);
}; */

module.exports = { addition, substraction, multiplication, division };
