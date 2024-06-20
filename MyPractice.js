//<----------- /* OOPS */-------->
// //Class is a template of properties ,we can reuse this

// class User {
//   static numberOfUsers = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     User.numberOfUsers++;
//   }

//   logIn() {
//     console.log("welcome Name", this.name);
//   }
//   logOut() {
//     console.log(" see you later", this.age);
//   }
//   static totalUser() {
//     console.log(" number of user", this.numberOfUsers++);
//   }
// }
// //Creating new user   like this we can store more user without repeating code
// const userOne = new User("abi", 21);
// const userTwo = new User("ammu", 22);
// //console.log(userTwo.logIn());
// //static{with static we can write  decalare an  static variable}

// //So what if i need to use this same class of another set of users like for  Paid Users we can do that with inheritance
// class PaidUser extends User {
//   message() {
//     console.log("you are an paid user", this.name);
//   }
// }
// // const premiumUser = new PaidUser("Arjun", 33);
// // console.log(premiumUser.age);
// // console.log(premiumUser.logIn());
// // console.log(premiumUser.message()); //now this class can acess user and paid user
// // PaidUser.totalUser();

// class Cars {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   logIn() {
//     return `hai car user`;
//   }
//   getCarName() {
//     return `this is car model ${this.model} this is car color ${this.color}`;
//   }
// }
// class PremiumCars extends Cars {
//   constructor(color, model, price) {
//     super(color, model, price);
//     this.price = price;
//   }
//   priceRange() {
//     return `this car price range is high${this.price} `;
//   }
//   //Overriding..
//   logIn() {
//     return `hai car Premium car user`;
//   }
// }

// const maruthi = new Cars("green", "maruthi");
// const swift = new Cars("red", "swift");
// const gWagon = new PremiumCars("blue", "gwagon", "582000");

// // console.log(maruthi.getCarName());
// //console.log(swift.getCarName());
// console.log(swift.logIn());

//<----------- /*call, apply, and bind */-------->

//Call
//`call` is a method that allows you to call a function and explicitly set the value of `this` inside that function.
//It takes the function's context (the value of `this`) as its first argument and any additional arguments as separate parameters.

// let person = {
//   name: "Tom",
//   age: 52,
//   toConsole: function (place, job) {
//     console.log(
//       `my name is ${this.name} and my age is ${this.age} from${place} my job is ${job}`
//     );
//   },
// };
// let person1 = {
//   name: "Rahul",
//   age: 22,
// };
// let person2 = {
//   name: "Athul",
//   age: 25,
// };

// person.toConsole.call(person2, "Delhi", "developer");
// //Apply
// // - `Apply` is similar to `call`, but it takes the function's context as its first argument and an array of additional arguments.
// // - This is useful when you have a function that accepts an array of arguments.
// person.toConsole.apply(person, ["Delhi", "developer"]);
// //Bind
// // - It doesn't immediately execute the function but instead returns a new function with the desired context and arguments.
// let personDetails = person.toConsole.bind(person2, "tvm", "mechanic");
// console.log(personDetails());

//<----------- /*Spread operator and Rest operator */-------->

//rest operator
// function myFun([a, b, ...manyMoreArgs]) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("rest", manyMoreArgs);
// }

// myFun(["one", "two", "three", "four", "five", "six"]);
//spread operator

// function myFun({ ...manyMoreArgs }) {
//   console.log("spread", manyMoreArgs);
// }
// myFun(["one", "two", "three", "four", "five", "six"]);

//<----------- /*high order function */-------->

//A higher-order function is a function that either takes another function as an argument or returns a function as its result. These functions can work with functions, just like regular data..

// function operations(a, b, operatorion) {
//   return operatorion(a, b);
// }
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }

// console.log(operations(5, 4, add));

//<----------- /*Call back function */-------->

// function greet(sayGoodbye) {
//   setTimeout(() => {
//     sayGoodbye(); // This is where the callback function gets called.
//   }, 3000);
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet(sayGoodbye); // Pass the sayGoodbye function as a callback.

//<----------- /*Promises */-------->

// function createOrder(orderId) {
//   const promise = new Promise((resolve, reject) => {
//     if (!orderId) {
//       const err = new Error("no orderId is aavailable ");
//       return reject(err);
//     } else {
//       const data = { message: "data is here" };
//       return resolve(data);
//     }
//   });

//   return promise;
// }

// createOrder(true)
//   .then((result) => {
//     console.log(result.message);
//   })
//   .catch((err) => console.log(err));

//<----------- /*Promise chaining*/-------->

// function createOrder(order) {
//   return new Promise((resolve, reject) => {
//     if (order === "125") {
//       resolve(`your order id is ${order}`);
//     } else {
//       const err = new Error("order not created");
//       reject(err);
//     }
//   });
// }

// function cart(res) {
//   return new Promise((resolve, reject) => {
//     if (res) {
//       resolve(`final ressss ${res}`);
//     } else {
//       const err = new Error("final not created");
//       reject(err);
//     }
//   });
// }

// function finalPayment(final) {
//   return new Promise((resolve, reject) => {
//     if (final) {
//       resolve(`cart ressss ${final}`);
//     } else {
//       const err = new Error("final not created");
//       reject(err);
//     }
//   });
// }

// createOrder("125")
//   .then((res) => cart(res))
//   .then((cartresponse) => finalPayment(cartresponse))
//   .then((payment) => console.log(payment, "payment"))
//   .catch((err) => console.log(err));

//<----------- /*Promise.all*/-------->

// let p1 = new Promise((resolve, reject) => {
//   //API..
//   setTimeout(() => resolve("hai"), 3000);
// });
// let p2 = new Promise((resolve, reject) => {
//   //API..
//   resolve("hai");
// });
// let p3 = new Promise((resolve, reject) => {
//   //API..
//   setTimeout(() => resolve("hai"), 1000);
// });

// Promise.all([p1, p2, p3]).then((res) => console.log(res));
// Promise.race([p1, p2, p3]).then((res) => console.log(res));
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// Promise.any([p1, p2, p3]).then((res) => console.log(res));

// function PV(rate, periods, payment, future, type) {
//   // Initialize type
//   var type = typeof type === "undefined" ? 0 : type;

//   // Evaluate rate and periods (TODO: replace with secure expression evaluator)
//   rate = eval(rate);
//   periods = eval(periods);

//   // Return present value
//   if (rate === 0) {
//     return -payment * periods - future;
//   } else {
//     return (
//       (((1 - Math.pow(1 + rate, periods)) / rate) *
//         payment *
//         (1 + rate * type) -
//         future) /
//       Math.pow(1 + rate, periods)
//     );
//   }
// }
// console.log(PV(0.05, 120, 700515.64, 0, 1));

function PV(rate, nper, pmt) {
  return (pmt / rate) * (1 - Math.pow(1 + rate, -nper));
}

console.log(PV(0.05, 120, 1510000));
