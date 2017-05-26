/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }


  function add(value) {
    // console.log(value);
    var newNode = {
      value : value,
      next : null
    };
    if (getHead() === null) {
      head = newNode;
      tail = newNode;
    } else if (getHead().next === null) {
      tail = newNode;
      getHead().next = tail;
    } else {
      getTail().next = newNode;
      tail = newNode;
    }
    return newNode;

  }

  function get(num) {
    var checkNode = head;

    for (var i = 0; i < num; i++) {
      if (checkNode.next === null) {
        return false;
      } else {
        checkNode = checkNode.next;
      }
    }
    return checkNode;
  }

  function remove(num) {
    var removeNode = get(num);
    var removeNodeParent = get(num - 1);

    if (removeNode === false) {
      return false;
    } else if (num === 0) {
      head = head.next;
    } else if (removeNode.next === null) {
      tail = removeNodeParent;
    }
      removeNodeParent.next = removeNode.next;
  }

  function insert(value, num) {
    console.log('value >> ', value, 'num >> ', num);
    var currentNode = get(num - 1);

    if (num === 0) {
      newNode1 = {
      value : value,
      next : head
    };
    head = newNode1;
    } else if (get(num) === false || num < 1) {
      return false;
    } else {
      currentNode.next = {
        value : value,
        next : currentNode.next
      };
    }currentNode = newNode2;
}

return {
  getHead,
  getTail,
  add,
  get,
  remove,
  insert
}
}
