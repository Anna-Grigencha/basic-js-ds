const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(value){
    this.data = value;
    this.left = null
    this.right = null

  }
}

class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.tree) {
      return null;
    }
    return this.tree;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.tree = addWithin(this.tree, data);
    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.tree, data);
    function searchWithin (node, data){
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      return data < node.data ?
      searchWithin(node.left, data):
      searchWithin(node.right, data);
    }

  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.tree){
      return;
    }
    else {
      let node = this.tree

    }

  }

  remove(data) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = removeNode(this.tree, data);
    function removeNode(node, data){
      if (!node){
        return null;
      }
      if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree){
      return;
    }
    let node = this.tree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.tree){
      return;
    }
    let node = this.tree;
    while(node.right) {
      node = node.right;
    }
   return node.data;
  }
}

module.exports = {
  BinarySearchTree
};