const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

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
function removeKFromList( l, k ) {
  let result = null;
  let current = null;

  // Проходим по оригинальному связанному списку
  while (l !== null) {
    // Проверяем, если текущее значение не равно k
    if (l.value !== k) {
      // Если result равен null, инициализируем его новым узлом ListNode
      if (result === null) {
        result = new ListNode(l.value);
        current = result;
      } else {
        // В противном случае добавляем новый узел к связанному списку result
        current.next = new ListNode(l.value);
        current = current.next;
      }
    }

    // Переходим к следующему узлу в оригинальном связанном списке
    l = l.next;
  }

  return result;
}

module.exports = {
  removeKFromList
};
