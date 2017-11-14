// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```
let stars = [];

let i = 1;
while (i <= 5) {
  stars.push("*");
  console.log(stars.join(""));
  i = i + 1;
};
