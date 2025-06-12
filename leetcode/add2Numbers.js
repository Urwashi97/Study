/**
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

var addTwoNumbers = function (l1, l2) {
  let num1 = ``;
  let num2 = ``;
  for (let i = l1.length - 1; i >= 0; i--) {
    num1 += l1[i];
  }
  for (let j = l2.length - 1; j >= 0; j--) {
    num2 += l2[j];
  }
  let sum = parseInt(num1) + parseInt(num2);
  let sumNum = [];
  sum = sum.toString();
  for (let k = sum.length - 1; k >= 0; k--) {
    sumNum.push(parseInt(sum[k]));
  }
  return sumNum;
};
//console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

/******************************************************************************************* */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  console.log("37", dummy, current);
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
    console.log("41", current);
  }

  return dummy.next;
}

var addTwoNumbers2 = function (l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum >= 10 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};

// ✅ Convert input arrays to linked lists
const list1 = arrayToList([2, 4, 3]);
const list2 = arrayToList([5, 6, 4]);

// ✅ Run and print result
let result = addTwoNumbers2(list1, list2);

while (result) {
  console.log(result.val); // Output: 7 -> 0 -> 8
  result = result.next;
}
