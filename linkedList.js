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
      return newNode;
    }

  }

  function get() {

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