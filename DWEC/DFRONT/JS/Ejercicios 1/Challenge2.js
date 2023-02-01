/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

function calcTip(payment) {
  let tip = 0;

  if ((payment >= 50) && (payment <= 300)) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  return tip * payment;
}

// // Una forma de simplificar la funcion seria hacer uso de las funciones flecha y el operador ternario.

// const calcTip1 = (payment) => payment >= 50 && payment <= 300 ? 0.15 : 0.20;

const propina = calcTip(100);

console.log(propina);


let bills = [125, 555, 44]
// Hacemos uso del metodo map() para utilizar la funcion calcTip() por cada uno de los elementos del array bills.

const tips = bills.map((x) => calcTip(x))
// Sumamos x al final de aplicar el metodo calcTip() para devolver el valor de la cuenta mas la propina ya añadida.
const billsPlusTips = bills.map((x)=> calcTip(x) + x)

console.log(tips)
console.log(billsPlusTips)


