console.log(global);

global.setTimeout(() => {
  console.log("hello");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the Interval");
}, 1000);

console.log(__dirname);
console.log(__filename);

