// ## A simple line of 10 stars
//
// ```
// **********
// ```
let stars = [];

let i = 1;
while (i <= 10) {
  stars.push("*");
  i = i + 1;
};
console.log(stars.join(""));
