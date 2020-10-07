// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   //INSERT FIRST DATA
//   insertFirstNode(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   //INSERT DATA INTO THE LAST POSITION
//   insertLastNode(data) {
//     let node = new Node(data);
//     let current;

//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }

//       current.next = node;
//     }

//     this.size++;
//   }

//   //INSERT AT INDEX
//   insertAtIndex(data, index) {
//     if (index > 0 && index > this.size) {
//       this.insertLastNode(data);
//       return;
//     }

//     if (index === 0) {
//       this.insertFirstNode(data);
//       return;
//     }

//     const node = new Node(data);
//     let current, previous;

//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current; //data before index
//       count++;
//       current = current.next;
//     }
//     node.next = current;
//     previous.next = node;
//     this.size++;
//   }

//   // GET VALUE WITH INDEX
//   getValueWithIndex(index) {
//     let current = this.head;
//     let count = 0;

//     while (current) {
//       if (count === index) {
//         console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }

//     return null;
//   }

//   // REMOVE AT INDEX
//   removeWithIndex(index) {
//     if (index > 0 && index > this.size) {
//       return console.log("Index out of range");
//     }

//     let current = this.head;
//     let previous;
//     let count = 0;

//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }

//       previous.next = current.next;
//     }

//     this.size--;
//   }

//   searchData(value) {
//     let current = this.head;

//     while (current.next) {
//       if (current.data === value) {
//         return true;
//       }
//       current = current.next;
//     }

//     return false;
//   }

//   //   #PRINT ALL DATA
//   printListData() {
//     let current = this.head;

//     while (current) {
//       console.log(current.data);

//       current = current.next;
//     }
//   }

//   clearData() {
//     this.head = null;
//     this.size = 0;
//   }
// }

// const ll = new LinkedList();
// //ll.insertLastNode(2);
// // ll.insertFirstNode(3);
// // ll.insertFirstNode(5);
// // ll.insertFirstNode(1);
// // ll.insertAtIndex(4, 50);
// // ll.removeWithIndex(1);
// // ll.clearData();
// console.log(ll);
// //console.log(ll.printListData());
// // ll.getValueWithIndex(6);

// // class Node {
// //   constructor(data, next = null, prev = null) {
// //     this.data = data;
// //     this.next = next;
// //     this.prev = prev;
// //   }
// // }

// // class DoublyLinkedList {
// //   constructor() {
// //     this.head = null;
// //     this.tail = null;
// //     this.size = 0;
// //   }

// //   insertFirstNode(value) {
// //     let node = new Node(value);
// //     if (!this.head) {
// //       this.head = node;
// //       this.tail = this.head;
// //     } else {
// //       let temp = node;
// //       temp.next = this.head;
// //       this.head.prev = temp;
// //       this.head = temp;
// //     }

// //     this.size++;
// //     return this;
// //   }
// // }

// // dl = new DoublyLinkedList();
// // dl.insertFirstNode(1);
// // dl.insertFirstNode(2);
// // // dl.insertFirstNode(20);
// // console.log(dl);

class Node {
  constructor(data, address = null) {
    this.data = data;
    this.address = address;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  insertLastNode(data) {
    let node = new Node(data);
    let currentHead;
    if (!this.head) {
      this.head = node;
    } else {
      currentHead = this.head;

      while (currentHead.address) {
        currentHead = currentHead.address;
      }
      currentHead.address = node;
    }

    this.length++;
  }

  insertNodeByIndex(data, index) {
    if (index > this.length && index > 0) {
      this.insertLastNode(data);
      console.log(this.length);
      return;
    }

    if (index === 0) {
      this.insertFirstNode(data);
      return;
    }
    //track the index by counting each head before inserted index
    let node = new Node(data);
    let count = 0;
    let previous, currentHead;
    currentHead = this.head;
    while (count < index) {
      count++;
      previous = currentHead;
      currentHead = currentHead.address;
    }

    previous.address = node;
    node.address = currentHead;

    this.length++;
  }

  // searchNode(data) {
  //   let currentHead = this.head;
  //   while (currentHead) {
  //     if (currentHead.data === data) {
  //       return true;
  //     }
  //     currentHead = currentHead.address;
  //   }

  //   return false;
  // }
  searchNode(data) {
    let currentHead = this.head;
    while (currentHead) {
      if (currentHead.data.id === data.id) {
        return true;
      }
      currentHead = currentHead.address;
    }

    return false;
  }

  deleteNodeByValue(data) {
    if (this.head.data === data) {
      this.head = this.head.address;
    } else {
      let prevHead = this.head;
      let currentHead = prevHead.address;

      while (currentHead) {
        if (currentHead.data === data) {
          prevHead.address = currentHead.address;
          currentHead = currentHead.next;
          break;
        } else {
          prevHead = currentHead;
          currentHead = currentHead.address;
        }
      }
    }

    this.length--;
  }

  reverseLinkedList() {
    let currentHead = this.head;

    let prev = null;
    let next = null;

    while (currentHead) {
      next = currentHead.address;

      currentHead.address = prev;

      prev = currentHead;

      currentHead = next;
    }

    return prev;
  }

  getAllNodeData() {
    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.data);
      currentHead = currentHead.address;
    }
  }
}

ll = new LinkedList();
// ll.insertLastNode(6);

// ll.insertFirstNode(1);
// ll.insertFirstNode(2);
// // ll.insertFirstNode;
// // ll.insertFirstNode(3);

// ll.deleteNodeByValue(6);
// // ll.insertNodeByIndex(10, 20);

// // console.log(ll.reverseLinkedList());
// console.log(ll);

// let arr = [1, 2, 3, 4];
let arr = [
  {
    id: 1,
    name: "ola",
  },
  {
    id: 2,
    name: "femia",
  },
];
let j = arr.map((a) => {
  ll.insertFirstNode(a);
});

//ll.deleteNodeByValue(3);
//ll.getAllNodeData();

arr.map((i) => {
  let x = ll.searchNode(i);
  console.log();
});
console.log(ll);
