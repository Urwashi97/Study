function isBalanced(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (Object.values(pairs).includes(char)) {
      stack.push(char);
    } else if (Object.keys(pairs).includes(char)) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[})")); // false
console.log(isBalanced("({[]")); // false
console.log(isBalanced("}({[]})")); // false
