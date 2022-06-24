const sum = (a, b) => {
  const result = a + b;
  console.log(`Sum of ${a} ,${b} = ${result}`);
};

const sub = (a, b) => {
  const result = a - b;
  console.log(`sub of ${a} ,${b} = ${result}`);
};

module.exports = { sum, sub };
// export { sum, sub }
