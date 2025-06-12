function getPermutations(n) {
  // Base case: only one permutation for n = 1
  if (n === 1) {
    return [[1]];
  }

  // Recursive case: generate permutations for n-1
  const permutations = getPermutations(n - 1);

  // For each permutation of n-1, insert n at each possible position
  const result = [];
  for (const perm of permutations) {
    console.log(`perm,n`, perm, n);
    for (let i = 0; i <= perm.length; i++) {
      console.log(
        "i,...perm.slice(0, i), n, ...perm.slice(i)",
        i,
        ...perm.slice(0, i),
        n,
        ...perm.slice(i)
      );
      result.push([...perm.slice(0, i), n, ...perm.slice(i)]);
    }
  }
  console.log(`result`, result);
  return result;
}

// Example usage:
const n = 3;
const permutations = getPermutations(n);
for (const perm of permutations) {
  console.log(perm);
}
