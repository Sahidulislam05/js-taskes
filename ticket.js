// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk


let age = 50;

let isStudent = true;

let price = 800;

if (age < 10) {
  console.log(" You can go for free");
}

else if (isStudent && age > 10 && age <60 ) {
  price = (price * 50) / 100;
  console.log(price);
} 

else if (age >= 60) {
  price = (price * 15) / 100;
  console.log(price);
} 

else {
  console.log(price);
}




// let age = 70;

// let isStudent = true;

// let price = 800;

// if (age < 10) {
//   console.log(" You can go for free");
// } 

// else if (isStudent) {
//   price = (price * 50) / 100;
//   console.log(price);
// } 

// else if (age >= 60) {
//   price = (price * 15) / 100;
//   console.log(price);
// } 

// else {
//   console.log(price);
// }
