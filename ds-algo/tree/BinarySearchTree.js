/**
 * It creates Binary tree and do different operation against it 
 * it search very fast over a balance tree. it's time complexity of a balance tree is O(log n)
 */

 class BSTNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {

  root = null;
  
  constructor(){
    console.log('BST created')
  };


  //Insert element into a tree
  insert(value) {
    let node = new BSTNode(value, null, null);
    
    if(!this.root){
      this.root = node;
      return;
    } 

    let tempRoot = this.root;

    while(tempRoot) {
      if(value <= tempRoot.value) {

        if(tempRoot.left) tempRoot = tempRoot.left;
        else {
          tempRoot.left = node;
          break;
        } 
      } else {
        if(tempRoot.right) tempRoot = tempRoot.right;
        else {
          tempRoot.right = node;
          break;
        } 
      }
    }
  }

   //search an item and check it is present inside the tree or not.
  contains(value) {
    let tempNode = this.root;

    while(tempNode) {
      if(value === tempNode.value) {
        return true;
      } else if(value< tempNode.value) {
        tempNode = tempNode.left;
      } else {
        tempNode = tempNode.right;
      }
    }
    return false;
  }

  // Depth first traversal
  depthFirstTraversal(type) {
    if(type === 'inOrder')
      this.inOrderTraversal(this.root);
    else if(type === 'preOrder')
      this.preOrderTraversal(this.root);
    else 
      this.postOrderTraversal(this.root);
  }

  inOrderTraversal(node) {
    if(node.left)
      this.inOrderTraversal(node.left);
    console.log(node.value);

    if(node.right)
      this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node) {
    console.log(node.value);

    if(node.left)
      this.preOrderTraversal(node.left);

    if(node.right)
      this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if(node.left)
      this.postOrderTraversal(node.left);
      
    if(node.right)
      this.postOrderTraversal(node.right);

    console.log(node.value);
  }

  breadthFirstTraversal() {
    var queue = this.root ? [this.root] : [];
    while(queue.length>0) {
      let item = queue.shift();
      if(item.left) queue.push(item.left);
      if(item.right) queue.push(item.right);
      console.log(item.value);
    }
  }

  //function get max value
  getMaxVal() {
    let tempNode = this.root;
    while(tempNode) {
      if(tempNode.right){
        tempNode = tempNode.right;
      } else {
        return tempNode.value;
      }
    }
  }

  //function get min value
  getMinVal() {
    let tempNode = this.root;
    while(tempNode) {
      if(tempNode.left){
        tempNode = tempNode.left;
      } else {
        return tempNode.value;
      }
    }
  }

  //Sum of a tree
  getSum() {
    let queue = this.root ? [this.root] : [];
    let sum =0;
    while(queue.length>0) {
      let item = queue.shift();
      if(item.left) queue.push(item.left);
      if(item.right) queue.push(item.right);
      sum+= item.value;
    }

    return sum;
  }

  //get sum of a tree in a recursive manner
  getSumRecursion(node) {
    if(!node) return 0;

    let left = this.getSumRecursion(node.left);
    let right = this.getSumRecursion(node.right);

    return node.value+left+right;
  }



}

// Run the code


let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(7);
tree.insert(11);

// see the tree 
console.log(tree);

//check the item is present or not
console.log('20 is present in tree', tree.contains(20));
console.log('100 is present in tree', tree.contains(100));

//Traversal 

//Preorder
console.log(" Traversal ======> Pre Order")
tree.depthFirstTraversal('preOrder');

//Inorder
console.log(" Traversal ======> In Order")
tree.depthFirstTraversal('inOrder');

//postOrder 
console.log(" Traversal ======> Post Order")
tree.depthFirstTraversal('postOrder');

//breadthFirstTraversal

console.log(" Traversal ======> BFS")
tree.breadthFirstTraversal();

console.log(" Max value in Tree is =====> ", tree.getMaxVal());
console.log(" Min value in Tree is =====> ", tree.getMinVal());
console.log(" sum of Tree is =====> ", tree.getSum());

console.log(" sum of Tree in recursive way =====> ", tree.getSumRecursion(tree.root));
