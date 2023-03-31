// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

const { array } = require("prop-types");
const { func } = require("prop-types");

//   push(element) {
//     this.items[this.count] = element;
//     console.log(element, this.count);
//     this.count++;

//     return this.count - 1;
//   }

//   pop() {
//     if (this.count === 0) return undefined;
//     let deleteItem = this.items[this.count - 1];
//     this.count--;
//     console.log(`${deleteItem} remved`);
//     return deleteItem;
//   }

//   peek() {
//     return this.items[this.count - 1];
//   }

//   isEmpty() {
//     console.log(this.count === 0 ? "STACK IS EMPTY" : "NOT EMPTY");
//     return this.count == 0;
//   }

//   size() {
//     return this.count;
//   }

//   checkBracket(arg) {
//     for (let i = 0; i < arg.length; i++) {
//       if (
//         arg.charAt(i) === "{" ||
//         arg.charAt(i) === "(" ||
//         arg.charAt(i) === "["
//       ) {
//         console.log("push here");
//         this.push(arg.charAt(i));
//       } else {
//         console.log("pop here");
//         if (
//           (arg.charAt(i) === "}" && this.pop() !== "{") ||
//           (arg.charAt(i) === ")" && this.pop() !== "(") ||
//           (arg.charAt(i) === "]" && this.pop() !== "[")
//         ) {
//           return false;
//         }
//       }
//     }

//     if (this.count > 0) {
//       return false;
//     }

//     return true;
//   }

//   print() {
//     let str = "";
//     for (let i = 0; i < this.count; i++) {
//       str += this.items[i] + " ";
//     }
//     return str;
//   }

//   clear() {
//     this.items = [];
//     this.count = 0;
//     return this.items;
//   }
// }

// const stack = new Stack();

// class CarClass{
//   constructor (){
//     this.name = []

//   }

//   typeOfVehicle(){
//     console.log(this.location)
//   }
// }
// let carObj = new CarClass('ola')
// console.log(carObj)

// function User(name){
//   this.name = name
// }

// let user = new User('ola')
// console.log(user)

// class Stack {
//   constructor() {
//     this.stackItems = [];
//   }

//   insert(element) {
//     return this.stackItems.push(element);
//   }

//   getTopMostItemAndDelete() {
//     if (this.stackItems.length === 0) return "Underflow";
//     return this.stackItems.pop();
//   }

//   getTopMostElement() {
//     return this.stackItems[this.stackItems.length - 1];
//   }

//   isEmpty() {
//     return this.stackItems.length === 0 ? "It is Empty" : "Not empty";
//   }

//   search(element) {
//     let copiedStack = this.stackItems.slice();

//     while (copiedStack.length !== 0) {
//       if (copiedStack.pop() === element) {
//         return true;
//       }
//     }
//     return false;
//   }

//   getAllItems() {
//     let str = "";
//     for (let index = 0; index < this.stackItems.length; index++) {
//       str += this.stackItems[index] + " ";
//     }
//     return str;
//   }
// }

function Stack(array) {
  if (array) this.array = array;
}

Stack.prototype.insert = function (value) {
  return this.array.push(value);
};

Stack.prototype.delete = function () {
  return this.array.pop();
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

Stack.prototype.search = function (item) {
  let copiedStack = this.array.slice();

  while (copiedStack.length) {
    if (copiedStack.pop() === item) {
      return true;
    }
  }
  return false;
};

Stack.prototype.searchIndex = function (index) {
  let startIndex = this.array.length - 1;
  let copiedStack = this.array.slice();
  if (index < 0 || this.array.length < 0)
    return "index or array length is less than 0";

  while (copiedStack.length) {
    if (startIndex === index) {
      return this.array[startIndex];
    }
    startIndex--;
    copiedStack.pop();
  }

  return "index out of reach";
};

// const reverseString = (str) => {
//   let newArrStr = str.split("");
//   let reverseWord = "";
//   while (newArrStr.length) {
//     reverseWord = reverseWord + newArrStr.pop() + " ";
//   }
//   return reverseWord;
// };

// // console.log(reverseString("orange"));
// let x = [];
// const stack = new Stack(x);
// stack.insert(1);
// stack.insert(2);
// stack.insert(3);
// stack.insert(4);
// // console.log(stack.peek());
// //stack.delete();
// console.log(stack);
// console.log(stack.searchIndex(3))

// function Queue(array) {
//   if (array) this.array = array;
// }
// Queue.prototype.insert = function (item) {
//   return this.array.push(item);
// };
// Queue.prototype.delete = function () {
//   return this.array.shift();
// };
// Queue.prototype.search = function (item) {
//   let copiedQueue = this.array.slice();

//   while (copiedQueue.length) {
//     if (copiedQueue.shift() === item) {
//       return true;
//     }
//   }
//   return false;
// };
// Queue.prototype.peek = function(){
//   return this.array[0]
// }
// let y = [];
// const queue = new Queue(y);
// queue.insert(1);
// queue.insert(2);
// queue.insert(3);
// console.log(queue.peek())
// queue.delete();
// console.log(queue.search(3))
// console.log(queue);

// DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLES FOOD
// ORDERING ON A FIRST-COME, FIRST-SERVED BASIS

// class CustomerOrder {
//   constructor(orders) {
//     this.orders = orders;
//   }

//   enqueue(customer) {
//     return this.orders.push(customer);
//   }
//   numberOfOrders() {
//     return this.orders.length;
//   }
//   dequeue() {
//     return this.orders.shift();
//     // let copiedOrders = this.orders.slice();

//     // let newArray = [];
//     // let orderRank = 1;
//     // while (copiedOrders.length) {
//     //   let value = copiedOrders.shift();
//     //   value.orderRank = orderRank;
//     //   newArray.push(value);
//     //   orderRank++;
//     // }

//     // return newArray;
//   }
// }

function c(v) {
  console.log(v);
}

// let orders = new CustomerOrder([]);
// let customer1 = orders.enqueue({ name: "bisi", food: "rice" });
// let customer2 = orders.enqueue({ name: "fola", food: "beans" });
// let customer3 = orders.enqueue({ name: "remi", food: "noodles" });
// console.log(customer1)
// console.log(orders.dequeue());
// console.log(orders.dequeue());

// let names = [{ name: "ola" }, { name: "fola" }];
// names[0].orderRank = 1;

// c(names);

class Customer {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }

  printCustomerInfo() {
    return `the name of customer is ${this.name}, and its order is ${this.order}`;
  }
}

let customer1 = new Customer("ola", "rice");
let customer2 = new Customer("ben", "rice");

class Cashier {
  constructor() {
    this.orders = [];
  }

  addCustomerOrder(customer) {
    return this.orders.push(customer);
  }

  deliverOrder() {
    return this.orders.shift();
  }
}

// let cashier = new Cashier();
// cashier.addCustomerOrder(customer1);
// cashier.addCustomerOrder(customer2);

// c(cashier.deliverOrder())
// c(cashier.deliverOrder())

function isValid(s) {
  let stack = [];
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in pairs) {
      stack.push(s[i]);
    } else if (!(s[i] in pairs)) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== getKeyByValue(pairs, s[i])
      ) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

//c(isValid("[[]]"))
// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// } c(isValid("(([]))"));

// function MyQueue(array) {
//   if (array) {
//     this.array = array;
//   }
// }

// MyQueue.prototype.insert = function (item) {
//   return this.array.push(item);
// };
function Queue(array) {
  if (array) this.array = array;
}
Queue.prototype.enqueue = function (item) {
  return this.array.push(item);
};
0;

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0 ? "its empty" : "not empty";
};

// let queue = new Queue([]);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

// c(queue.isEmpty());

function MyStack() {
  this.queue1 = [];
  this.queue2 = [];
}
MyStack.prototype.push = function (x) {
  return this.queue1.push(x);
};
MyStack.prototype.pop = function () {
  // for (let i = this.queue1.length - 1; i >= 0; i--) {
  //   this.queue2.push(this.queue1[i]);
  // }
  // return this.queue2.shift();
};
MyStack.prototype.top = function () {
  for (let i = this.queue1.length - 1; i >= 0; i--) {
    this.queue2.push(this.queue1[i]);
  }
  return this.queue2[0];
};

MyStack.prototype.empty = function () {
  return this.queue2.length === 0 && this.queue1.length === 0 ? true : false;
};

// let stack = new MyStack();
// stack.push("MyStack");
// stack.push(2);
// c(stack);
//  c(stack.top());
// c(stack.pop());
//  c(stack.empty());

// const updateItem = (id, name) => {
//   // Find the index of the item to update
//   const index = items.findIndex(item => item.id === id);
//   // Create a new copy of the items array
//   const newItems = [...items];
//   // Update the name of the item at the specified index
//   newItems[index] = { ...newItems[index], name };
//   // Set the state with the updated items array
//   setItems(newItems);
// }

const items = [
  { id: 1, name: "b" },
  { id: 2, name: "c" },
  { id: 3, name: "a" },
];

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.name > b.name ? 1 : -1);

c(users)

// const updatedItems = items.map(item => {
//   if (item.id === 2) {
//     return { ...item, name: 'New Item 2' };
//   }
//   return item;
// });

// function firstNonRepeatingChar(str) {
//   let charCount = new Map();
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount.has(char)) {
//       charCount.set(char, charCount.get(char) + 1);
//     } else {
//       charCount.set(char, 1);
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount.get(char) === 1) {
//       return char;
//     }
//   }
//   return null;
// }
// c(firstNonRepeatingChar("hello world hi hey"))


