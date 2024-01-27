/* OOPS */
//Class is a template of properties ,we can reuse this

class User {
  static numberOfUsers = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.numberOfUsers++;
  }

  logIn() {
    console.log("welcome Name", this.name);
  }
  logOut() {
    console.log(" see you later", this.age);
  }
  static totalUser() {
    console.log(" number of user", this.numberOfUsers++);
  }
}
//Creating new user   like this we can store more user without repeating code
const userOne = new User("abi", 21);
const userTwo = new User("ammu", 22);
// console.log(userOne.name);
// console.log(userTwo.name);
//static{with static we can write  decalare an  static variable}
User.totalUser();
//So what if i need to use this same class of another set of users like for  Paid Users we can do that with inheritance
class PaidUser extends User {
  message() {
    console.log("you are an paid user", this.name);
  }
}

const premiumUser = new PaidUser("Arjun", 33);
console.log(premiumUser.age);
console.log(premiumUser.logIn());
console.log(premiumUser.message()); //now this class can acess user and paid user
PaidUser.totalUser();
