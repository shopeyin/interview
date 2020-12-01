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

  searchNode(data) {
    let currentHead = this.head;
    while (currentHead) {
      if (currentHead.data === data) {
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
          currentHead = currentHead.address;
          break;
        } else {
          prevHead = currentHead;
          currentHead = currentHead.address;
        }
      }
    }

    this.length--;
  }

  // reverseLinkedList() {
  //   let currentHead = this.head;

  //   let prev = null;
  //   let next = null;

  //   while (currentHead) {
  //     next = currentHead.address;

  //     currentHead.address = prev;

  //     prev = currentHead;

  //     currentHead = next;
  //   }

  //   return prev;
  // }

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
// ;
// ll.insertNodeByIndex(1, 3);
// ll.getAllNodeData()
// ll.deleteNodeByValue(6);
//ll.insertNodeByIndex(10, 20);

// console.log(ll.reverseLinkedList());
//  console.log(ll);

// let arr = [1, 2, 3, 4];
// let arr = [
//   {
//     id: 1,
//     name: "ola",
//   },
//   {
//     id: 2,
//     name: "femia",
//   },
// ];
// let j = arr.map((a) => {
//   ll.insertFirstNode(a);
// });

// //ll.deleteNodeByValue(3);
// //ll.getAllNodeData();

// arr.map((i) => {
//   let x = ll.searchNode(i);
//   console.log();
// });
// console.log(ll);

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
// 	// method that inserts Node object
//   insertFirstNode(data) {
//     this.head = new Node(data, this.head);
//     this.length++;
//   }

// method that deletes a Node object
// deleteNodeByValue(data) {
//   if (this.head.data === data) {
//     this.head = this.head.next;
//   } else {
//     let prevHead = this.head;
//     let currentHead = prevHead.next;

//     while (currentHead) {
//       if (currentHead.data === data) {
//         prevHead.next = currentHead.next;
//         currentHead = currentHead.next;
//         break;
//       } else {
//         prevHead = currentHead;
//         currentHead = currentHead.next;
//       }
//     }
//   }

//   this.length--;
// }



// search for Node data in the list, return true if found
//    searchNode(data) {
//     let currentHead = this.head;
//     while (currentHead) {
//       if (currentHead.data === data) {
//         return true;
//       }
//       currentHead = currentHead.next;
//     }

//     return false;
//   }

//  // get all the node data
//   getAllNodeData() {
//     let currentHead = this.head;
//     while (currentHead) {
//       console.log(currentHead.data);
//       currentHead = currentHead.next;
//     }
//   }
// }

// let linkedL = new SinglyLinkedList()
// linkedL.insertFirstNode(1); //linked list is now:1 -> null
// linkedL.insertFirstNode(2); //linked list is now:2 -> 1 -> null
// linkedL.insertFirstNode(3); //linked list is now:3 -> 2 -> 1 -> null

// linkedL.searchNode(1); // returns true because 1 is in the linkedlist
// linkedL.getAllNodeData(); 3,2,1 // get all node data

// linkedL.deleteNodeByValue(2)
// linkedL.getAllNodeData(); 3,1 // get all node data after deletion


class Noda{
  constructor(data,next=null){
    this.data = data
    this.next = next
  }
}




class SinglyLinkedListt{
    constructor(){
      this.head = null
      this.size = 0
    }

    insertFirstNode(data){
      this.head = new Noda(data,this.head)
      this.size++
    }


    insertLastNode(data){
      let node = new Noda(data)
      if(!this.head){
        this.head=node
      }else{
        let currentHead = this.head
        while(currentHead.next){
          
          currentHead = currentHead.next
        }
      
        currentHead.next = node
      }

      this.size++
    }


    searchNoda(data){
      let currentHead = this.head
      while(currentHead){
        if(currentHead.data === data){
          return true
        }
         else{
          currentHead = currentHead.next
         }

        
      }
      return false
    }



    deleteNodeByValue(data){
       if(this.head.data === data){
         this.head = this.head.next
       }else{
         let prevHead = this.head
         let currentHead = prevHead.next

         while(currentHead){
           if(currentHead.data === data){
                prevHead.next = currentHead.next
                currentHead = currentHead.next
                break
           }else{
             prevHead = currentHead
             currentHead = currentHead.next
           }
         }
       }
       this.size--
    }


    reverseNoda(){
      let currentHead = this.head; 
      let prev = null;  
      let next

      while(currentHead){
        next = currentHead.next
        currentHead.next = prev
        prev = currentHead
        currentHead = next
        
      }
    
      return prev
    }

    insertNodeByIndex(index,value){
      let node = new Noda(value)
      if(index === 0 ){
        this.insertFirstNode(value)
        return
      }

      if(index > this.size){
        this.insertLastNode(value)
        return
      }

      let count = 0
      let prevHead
      let currentHead = this.head

      while(count < index){
        prevHead = currentHead
        currentHead = currentHead.next
        count++
       
      }
      console.log(`here ${prevHead.data}`)
      prevHead.next = node
      node.next = currentHead

      this.size++
    }

    getAllNodeData(){
      let currentHead = this.head

      while(currentHead){
        console.log(currentHead.data)
        currentHead=currentHead.next
      }
    }

    // reverse(){
    //   let nodes = []

    //   let currentHead = this.head

    //   while(currentHead){
    //     nodes.push(currentHead.data)
    //     currentHead = currentHead.next
    //   }

    

    //   let i = 0

    //   while(i <  nodes.length){
    //      console.log(nodes.pop(),i)
    //     console.log(`length ${nodes.length}`)
    //     i++
    //   }
    //   // while(nodes.length){
    //   //   console.log(nodes.pop())
    //   // }

    // }


    deleteNodeByIndex(index){
      
      if(index === 1){
        this.head = this.head.next
        this.size--
        return
      }

      let count = 1
      let prevHead;
      let currentHead = this.head
      
      while(count < index){
      
        prevHead = currentHead
        
        currentHead = currentHead.next
       
        count++
      }

      prevHead.next = currentHead.next

      this.size--
    
    }


    removeNthNodefrmBck(n){
      let head = this.head
      if (n <= 0) {
        return head;
      }
    
      // Moves frontPointer forward by n-1 nodes.  If frontPointer lands on null,
      // that means n is larger than the list's length.  Leave the linked list
      // untouched in that case.
      let frontPointer = head;
      for (let i = 1; i <= n-1; i++) {
       
        frontPointer = frontPointer.next;
        if (frontPointer == null) {
          return head;
        }
      }
     
      let backPointer = null;
    
      // Moves both pointers forward till we reach the last node.
      while (frontPointer.next != null) {
        frontPointer = frontPointer.next;
        if(backPointer==null){
           backPointer = head
         }else{
              backPointer = backPointer.next
        }   
        
      }
    
      // Removes the node.  
     console.log(`back ${backPointer}`)
      if (backPointer == null) {
        head = head.next
        return head ;
      }

     
      backPointer.next = backPointer.next.next;
      this.size--
      return head;
    }

}

let jb = new SinglyLinkedListt()
let jn = new SinglyLinkedListt()
let js = new SinglyLinkedListt()
let pp = new SinglyLinkedListt()
jb.insertLastNode(1)
jb.insertLastNode(2)
jb.insertLastNode(4)
jb.reverse()
// jb.insertFirstNode(2)
// jb.insertFirstNode(1)
// jn.insertLastNode(1)
// jn.insertLastNode(3)
// jn.insertLastNode(4)

// pp.insertLastNode('m')
// pp.insertLastNode('a')
// pp.insertLastNode('d')
// pp.insertLastNode('a')
// pp.insertLastNode('m')

// console.log(jb.getAllNodeData())



// jb.insertFirstNode('d')
// jb.insertFirstNode('c')
// jb.insertFirstNode('b')
// jb.insertFirstNode('a')
// jb.removeNthNodefrmBck(6)
//jb.insertLastNode('z')
// jb.insertFirstNode('a')
//jb.deleteNodeByIndex(1)
//jb.insertNodeByIndex(1,3)
// jb.insertFirstNode(3)
// jb.deleteNodeByValue(1)
//console.log(jb.searchNoda(1))
//console.log(jb.reverseNoda())
  //console.log(jb.getAllNodeData())
// console.log(jb)

 //console.log(jn.getAllNodeData())
// console.log(jn)

// function mergeList(l1,l2) {
 
//   let dummyHead = new Noda(0)
 
//   let currentHead=dummyHead
  
  
//   let headA = l1.head
//   let headB = l2.head
//   while(headA && headB){

//     // console.log(headA.data,headB.data)
//     if(headA.data < headB.data){
//       currentHead.next = headA
//       headA = headA.next
//     }else{
//       currentHead.next = headB
//       headB = headB.next
//     }
   
    
//    currentHead = currentHead.next
//   }
//   if(headA){
//     currentHead.next = headA
//   }else{
//     currentHead.next = headB
//   }

  
//   let newH = dummyHead.next

//   while(newH){
//     console.log(newH.data)
//     newH = newH.next
//   }
//   return dummyHead.next
// }

// mergeList(jb,jn)

// function ins(index,value,array) {
//   let count = 0;
//   let nextIndex = 1;
//   let temp;
  
//   // while (count < index) { 
//   //   nextIndex++
//   //   count++
//   // }

//   // console.log(array[count])
//   // temp = array[count]
//   // array[count] = value
//   // array[nextIndex] = temp 

//   while(count < index){
//     count++
//     console.log(count)
//   }
//   console.log(count)
//   temp = array[count]
//   array[count] = value
//   array[count+1] = temp
 
//   console.log(array)
// }

let bz = ['a','b','d']
// ins(2,'c',bz)


// let count = 0 
// let index = 2

// while(count < index){


// console.log(bz[count])
// count++
// }

//console.log(bz[count])

