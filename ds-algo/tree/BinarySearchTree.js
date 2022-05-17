/**
 * It creates Binary tree and do different operation against it 
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

//Inorder

//postOrder 