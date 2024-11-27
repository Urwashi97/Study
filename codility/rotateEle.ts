function solution(A: number[], K: number): number[] {
  // Implement your solution here
  if (A.length) {
    for (let i = 0; i < K; i++) {
      const lastEle = A.pop();
      A.splice(0, 0, lastEle || 0);
    }
  }
  return A;
}

solution([1, 2, 3, 4], 2);
