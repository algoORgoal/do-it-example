const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, x);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));

// console.log(
//   [multiplyTwo, multiplyThree, addFour].reduce(
//     function (prevFunc, nextFunc) {
//       return function (value) {
//         return nextFunc(prevFunc(value));
//       };
//     },
//     function (k) {
//       return k;
//     },
//   )(1),
// );

// function compose(funcArr) {
//   return funcArr.reduce(
//     function (prevFunc, nextFunc) {
//       return function (value) {
//         return nextFunc(prevFunc(value));
//       };
//     },
//     function (k) {
//       return k;
//     },
//   );
// }

// const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);
// console.log(formulaWithCompose(1));

// function compose() {
//   const funcArr = Array.prototype.slice.call(arguments);
//   return funcArr.reduce(
//     function (prevFunc, nextFunc) {
//       return function (value) {
//         return nextFunc(prevFunc(value));
//       };
//     },
//     function (k) {
//       return k;
//     },
//   );
// }

// const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);
// console.log(formulaWithCompose(1));

// function compose() {
//   const funcArr = Array.prototype.slice.call(arguments);
//   return funcArr.reduce(
//     function (prevFunc, nextFunc) {
//       return function () {
//         const args = Array.prototype.slice.call(arguments);
//         return nextFunc(prevFunc.apply(null, args));
//       };
//     },
//     function (k) {
//       return k;
//     },
//   );
// }

// const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);
// console.log(formulaWithCompose(1));

function compose(...funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);
const x = 1;
console.log(formulaWithCompose(x));
