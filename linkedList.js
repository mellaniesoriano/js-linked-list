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
    var count = 0;

    for (var i = 0; i < num; i++) {
      if (checkNode.next !== null) {
        checkNode = checkNode.next;
        count++;
      } else {
        return false;
      }
    }
    return checkNode;
  }

  function remove() {

  }

  function insert() {

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