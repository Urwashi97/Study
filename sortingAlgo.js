function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
  }
  return arr;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
    heapify(arr, i, 0); // Call max heapify on the reduced heap
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest); // Recursively heapify the affected sub-tree
  }
}

function getMax(arr) {
  return Math.max(...arr);
}

function countingSort(arr, exp) {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  let max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 20, 40];

console.log("BubbleSort", bubbleSort(arr));
console.log("selectionSort", selectionSort(arr));
console.log("insertionSort", insertionSort(arr));
console.log("mergeSort", mergeSort(arr));
console.log("quickSort", quickSort(arr));
console.log("heapSort", heapSort(arr));
console.log("radixSort", radixSort(arr));
