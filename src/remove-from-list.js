const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let current = this.head;
  while (current && current.value === k) {
    //Переназначаем следующий за head узел на новый head
    current = current.next;
  }

  if (l.value === k) {
    l = l.next;
  }
  current = l.next;

  // Если следующий узел должен быть удален,
  // делаем узел через один, следующим для проверки.
  // Перебираем все узлы и удаляем их, есил из значение равно указанному.

  if (current !== null) {
    while (current) {
      if (current.next && current.next.value === k) {
        //Перезаписываем, чтобы узел через один стал следующим узлом
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  return l;

}

module.exports = {
  removeKFromList
};
