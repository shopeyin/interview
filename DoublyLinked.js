function c(v) {
  console.log(v);
}

class DoublyNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
let j = new DoublyNode(5);
c(j);

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirstNode(data) {
    if (!this.head) {
      this.head = new DoublyNode(data);
      this.tail = this.head;
    } else {
      let temp = new DoublyNode(data);
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }

    this.length++;
  }

  insertLastNode(data) {
    if (!this.head) {
      this.insertFirstNode(data);
      return;
    } else {
      let node = new DoublyNode(data);
      let currentHead = this.head;
      while (currentHead.next) {
        currentHead = currentHead.next;
      }
      currentHead.next = node;
      node.prev = currentHead;
    }

    this.length++;
  }

  deleteFirstNode() {
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
  }

  deleteLastNode() {
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      console.log(`${this.tail.prev.data} and ${this.tail.next}`);
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }
  searchNodeByValue(value) {
    let currentHead = this.head;
    while (currentHead) {
      if (currentHead.data === value) {
        return true;
      }
      currentHead = currentHead.next;
    }

    return false;
  }

  reverseNodeList() {}

  insertNodeByIndex() {}

  getAllNodeData() {
    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
    console.log(`sizee ${this.length}`);
  }
}

dl = new DoublyLinkedList();
// dl.insertFirstNode(9);
// dl.insertFirstNode(5);
// dl.insertFirstNode(2);
// dl.deleteLastNode();
// dl.searchNodeByValue(5);
// c(dl.searchNodeByValue(7));
// //dl.deleteFirstNode();
// //dl.insertLastNode(1);
// dl.getAllNodeData();
// c(dl);

let arr = [
  {
    id: 1,
    name: "ola",
  },
  {
    id: 2,
    name: "femia",
  },
  {
    id: 3,
    name: "uyo",
  },
];
let u = arr.map((a) => {
  dl.insertFirstNode(a.name);
});

c(dl);
