class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }

  findMinimumNode() {
    let currentRoot = this.root;
    if (currentRoot === null) {
      return -1;
    }

    while (currentRoot.left) {
      currentRoot = currentRoot.left;
    }
    return currentRoot.data;
  }

  findMaxNode(root) {
    let currentRoot = root;
    if (currentRoot === null) {
      return -1;
    }

    while (currentRoot.right) {
      currentRoot = currentRoot.right;
    }
    return currentRoot.data;
  }

  findTreeHeight(root) {
    if (root === null) {
      return -1;
    } else {
      let leftHeight = this.findTreeHeight(root.left);
      let rightHeight = this.findTreeHeight(root.right);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }
  }

  levelOrder() {
    let currentRoot = this.root;

    if (!root) return;
    let queue = [],
      visited = [];

    queue.push(currentRoot);

    while (queue.length) {
      var temp = queue.shift();

      visited.push(temp.data);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }

    return visited;
  }
}

let b = new BinarySearchTree();
b.insert(5);
b.insert(8);
b.insert(2);
b.insert(10);
b.insert(6);
b.insert(4);
b.insert(1);
//b.insert(39);
// b.remove(5);

//b.preorder(b.getRootNode());
// console.log("-----------------");
b.inorder(b.getRootNode());
// console.log("-----------------");
//b.postorder(b.getRootNode());
// console.log(b.search(b.getRootNode(), 9));
// console.log(b.findMinNode());
let r = b.getRootNode();
console.log(r);
console.log(b.levelOrder());
// console.log(b.findTreeHeight(b.getRootNode()));
// console.log(b.findMaxNode(b.getRootNode()));
