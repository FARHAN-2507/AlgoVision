import type { Algorithm, ExecutionStep, TreeNode } from './types';

const bubbleSortJsCode = `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`;

const bubbleSortPyCode = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`;

const bubbleSortTrace: ExecutionStep[] = [
  { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [64, 34, 25, 12, 22, 11, 90, 5, 50, 88] }, "explanation": "Initial array state." },
  { "stepId": 1, "type": "compare", "source": { "line": 5 }, "state": { "array": [64, 34, 25, 12, 22, 11, 90, 5, 50, 88], "comparisons": [0, 1] }, "explanation": "Comparing 64 and 34." },
  { "stepId": 2, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 64, 25, 12, 22, 11, 90, 5, 50, 88], "swaps": [0, 1] }, "explanation": "Swap 64 and 34." },
  { "stepId": 3, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 64, 25, 12, 22, 11, 90, 5, 50, 88], "comparisons": [1, 2] }, "explanation": "Comparing 64 and 25." },
  { "stepId": 4, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 25, 64, 12, 22, 11, 90, 5, 50, 88], "swaps": [1, 2] }, "explanation": "Swap 64 and 25." },
  { "stepId": 5, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 25, 64, 12, 22, 11, 90, 5, 50, 88], "comparisons": [6, 7] }, "explanation": "Comparing 90 and 5." },
  { "stepId": 6, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 25, 64, 12, 22, 11, 5, 90, 50, 88], "swaps": [6, 7] }, "explanation": "Swap 90 and 5." },
  { "stepId": 7, "type": "sorted", "source": { "line": 8 }, "state": { "array": [25, 34, 12, 22, 11, 5, 64, 50, 88, 90], "sortedIndices": [9] }, "explanation": "End of first pass. 90 is sorted." },
  { "stepId": 8, "type": "compare", "source": { "line": 5 }, "state": { "array": [25, 34, 12, 22, 11, 5, 64, 50, 88, 90], "comparisons": [0, 1], "sortedIndices": [9] }, "explanation": "Comparing 25 and 34. No swap." },
  { "stepId": 9, "type": "compare", "source": { "line": 5 }, "state": { "array": [25, 34, 12, 22, 11, 5, 64, 50, 88, 90], "comparisons": [1, 2], "sortedIndices": [9] }, "explanation": "Comparing 34 and 12." },
  { "stepId": 10, "type": "swap", "source": { "line": 6 }, "state": { "array": [25, 12, 34, 22, 11, 5, 64, 50, 88, 90], "swaps": [1, 2], "sortedIndices": [9] }, "explanation": "Swap 34 and 12." },
  { "stepId": 11, "type": "sorted", "source": { "line": 8 }, "state": { "array": [12, 25, 22, 11, 5, 34, 50, 64, 88, 90], "sortedIndices": [8, 9] }, "explanation": "End of second pass. 88 is sorted." },
  { "stepId": 12, "type": "sorted", "source": { "line": 8 }, "state": { "array": [5, 11, 12, 22, 25, 34, 50, 64, 88, 90], "sortedIndices": [4,5,6,7,8,9] }, "explanation": "After several more passes..." },
  { "stepId": 13, "type": "sorted", "source": { "line": 10 }, "state": { "array": [5, 11, 12, 22, 25, 34, 50, 64, 88, 90], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "Algorithm finished. The array is fully sorted." }
];

const selectionSortJsCode = `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`;

const selectionSortPyCode = `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`;

const selectionSortTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67] }, "explanation": "Initial array. We'll find the minimum element and move it to the start." },
    { "stepId": 1, "type": "highlight", "source": { "line": 4 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67], "highlights": { "indices": [0] } }, "explanation": "Assume first element (29) is the minimum." },
    { "stepId": 2, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67], "comparisons": [1, 0] }, "explanation": "Comparing 10 with current minimum (29). 10 is smaller." },
    { "stepId": 3, "type": "highlight", "source": { "line": 7 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67], "highlights": { "indices": [1] } }, "explanation": "New minimum is 10 at index 1." },
    { "stepId": 4, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67], "comparisons": [6, 1] }, "explanation": "Comparing 2 with current minimum (10). 2 is smaller." },
    { "stepId": 5, "type": "highlight", "source": { "line": 7 }, "state": { "array": [29, 10, 14, 37, 13, 58, 2, 88, 4, 67], "highlights": { "indices": [6] } }, "explanation": "New minimum is 2 at index 6." },
    { "stepId": 6, "type": "swap", "source": { "line": 10 }, "state": { "array": [2, 10, 14, 37, 13, 58, 29, 88, 4, 67], "swaps": [0, 6] }, "explanation": "Swap the found minimum element (2) with the first element (29)." },
    { "stepId": 7, "type": "sorted", "source": { "line": 11 }, "state": { "array": [2, 10, 14, 37, 13, 58, 29, 88, 4, 67], "sortedIndices": [0] }, "explanation": "The first element is now sorted." },
    { "stepId": 8, "type": "highlight", "source": { "line": 4 }, "state": { "array": [2, 10, 14, 37, 13, 58, 29, 88, 4, 67], "highlights": { "indices": [1] }, "sortedIndices": [0] }, "explanation": "Assume second element (10) is the minimum of the unsorted part." },
    { "stepId": 9, "type": "compare", "source": { "line": 6 }, "state": { "array": [2, 10, 14, 37, 13, 58, 29, 88, 4, 67], "comparisons": [8, 1], "sortedIndices": [0] }, "explanation": "Comparing 4 with current minimum (10). 4 is smaller." },
    { "stepId": 10, "type": "highlight", "source": { "line": 7 }, "state": { "array": [2, 10, 14, 37, 13, 58, 29, 88, 4, 67], "highlights": { "indices": [8] }, "sortedIndices": [0] }, "explanation": "New minimum is 4 at index 8." },
    { "stepId": 11, "type": "swap", "source": { "line": 10 }, "state": { "array": [2, 4, 14, 37, 13, 58, 29, 88, 10, 67], "swaps": [1, 8] }, "explanation": "Swap the found minimum (4) with the second element (10)." },
    { "stepId": 12, "type": "sorted", "source": { "line": 11 }, "state": { "array": [2, 4, 14, 37, 13, 58, 29, 88, 10, 67], "sortedIndices": [0, 1] }, "explanation": "The second element is now sorted." },
    { "stepId": 13, "type": "sorted", "source": { "line": 13 }, "state": { "array": [2, 4, 10, 13, 14, 29, 37, 58, 67, 88], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "After all passes, the entire array is sorted." }
];

const insertionSortJsCode = `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}`;

const insertionSortPyCode = `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >=0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key
    return arr`;
    
const insertionSortTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [12, 11, 13, 5, 6, 7, 9, 1, 3, 10] }, "explanation": "Initial array. The first element (12) is considered sorted." },
    { "stepId": 1, "type": "highlight", "source": { "line": 3 }, "state": { "array": [12, 11, 13, 5, 6, 7, 9, 1, 3, 10], "highlights": { "indices": [1] }, "sortedIndices": [0] }, "explanation": "Select element 11 to insert into the sorted portion." },
    { "stepId": 2, "type": "compare", "source": { "line": 5 }, "state": { "array": [12, 11, 13, 5, 6, 7, 9, 1, 3, 10], "comparisons": [0, 1], "sortedIndices": [0] }, "explanation": "Compare 11 with 12. 11 is smaller." },
    { "stepId": 3, "type": "swap", "source": { "line": 6 }, "state": { "array": [12, 12, 13, 5, 6, 7, 9, 1, 3, 10], "swaps": [0, 1] }, "explanation": "Shift 12 to the right." },
    { "stepId": 4, "type": "swap", "source": { "line": 9 }, "state": { "array": [11, 12, 13, 5, 6, 7, 9, 1, 3, 10], "swaps": [0, 0] }, "explanation": "Insert 11 at the correct position." },
    { "stepId": 5, "type": "sorted", "source": { "line": 10 }, "state": { "array": [11, 12, 13, 5, 6, 7, 9, 1, 3, 10], "sortedIndices": [0, 1] }, "explanation": "Now, [11, 12] is the sorted portion." },
    { "stepId": 6, "type": "highlight", "source": { "line": 3 }, "state": { "array": [11, 12, 13, 5, 6, 7, 9, 1, 3, 10], "highlights": { "indices": [3] }, "sortedIndices": [0, 1, 2] }, "explanation": "Select element 5 to insert." },
    { "stepId": 7, "type": "compare", "source": { "line": 5 }, "state": { "array": [11, 12, 13, 5, 6, 7, 9, 1, 3, 10], "comparisons": [2, 3], "sortedIndices": [0, 1, 2] }, "explanation": "Compare 5 with 13." },
    { "stepId": 8, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 12, 13, 13, 6, 7, 9, 1, 3, 10], "swaps": [2, 3] }, "explanation": "Shift 13 right." },
    { "stepId": 9, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 12, 12, 13, 6, 7, 9, 1, 3, 10], "swaps": [1, 2] }, "explanation": "Shift 12 right." },
    { "stepId": 10, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 11, 12, 13, 6, 7, 9, 1, 3, 10], "swaps": [0, 1] }, "explanation": "Shift 11 right." },
    { "stepId": 11, "type": "swap", "source": { "line": 9 }, "state": { "array": [5, 11, 12, 13, 6, 7, 9, 1, 3, 10], "swaps": [0, 0] }, "explanation": "Insert 5 at the beginning." },
    { "stepId": 12, "type": "sorted", "source": { "line": 11 }, "state": { "array": [1, 3, 5, 6, 7, 9, 10, 11, 12, 13], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "After all passes, the array is fully sorted." }
];

const quickSortJsCode = `function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`;

const quickSortPyCode = `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi-1)
        quick_sort(arr, pi+1, high)
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1`;

const quickSortTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [10, 80, 30, 90, 40, 50, 70, 20, 60, 5] }, "explanation": "Initial array. Start Quick Sort on the full array." },
    { "stepId": 1, "type": "highlight", "source": { "line": 10 }, "state": { "array": [10, 80, 30, 90, 40, 50, 70, 20, 60, 5], "highlights": { "indices": [9], "color": "purple" } }, "explanation": "Select the last element (5) as the pivot." },
    { "stepId": 2, "type": "compare", "source": { "line": 12 }, "state": { "array": [10, 80, 30, 90, 40, 50, 70, 20, 60, 5], "comparisons": [0, 9] }, "explanation": "Compare 10 with pivot 5. 10 is not smaller." },
    { "stepId": 3, "type": "swap", "source": { "line": 17 }, "state": { "array": [5, 80, 30, 90, 40, 50, 70, 20, 60, 10], "swaps": [0, 9] }, "explanation": "Partitioning complete. Swap pivot (5) into its correct sorted position." },
    { "stepId": 4, "type": "sorted", "source": { "line": 18 }, "state": { "array": [5, 80, 30, 90, 40, 50, 70, 20, 60, 10], "sortedIndices": [0] }, "explanation": "Element 5 is now sorted. Recursively sort the right sub-array." },
    { "stepId": 5, "type": "highlight", "source": { "line": 5 }, "state": { "array": [5, 80, 30, 90, 40, 50, 70, 20, 60, 10], "highlights": { "indices": [1, 9] }, "sortedIndices": [0] }, "explanation": "Recursively call Quick Sort on the right sub-array." },
    { "stepId": 6, "type": "highlight", "source": { "line": 10 }, "state": { "array": [5, 80, 30, 90, 40, 50, 70, 20, 60, 10], "highlights": { "indices": [9], "color": "purple" }, "sortedIndices": [0] }, "explanation": "Select new pivot (10)." },
    { "stepId": 7, "type": "swap", "source": { "line": 17 }, "state": { "array": [5, 10, 30, 90, 40, 50, 70, 20, 60, 80], "swaps": [1, 9] }, "explanation": "Partition the sub-array. Swap pivot (10) into place." },
    { "stepId": 8, "type": "sorted", "source": { "line": 18 }, "state": { "array": [5, 10, 30, 90, 40, 50, 70, 20, 60, 80], "sortedIndices": [0, 1] }, "explanation": "Element 10 is now sorted. Continue recursively." },
    { "stepId": 9, "type": "sorted", "source": { "line": 7 }, "state": { "array": [5, 10, 20, 30, 40, 50, 60, 70, 80, 90], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "After all recursive calls, the entire array is sorted." }
];

const mergeSortJsCode = `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}`;

const mergeSortPyCode = `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`;

const mergeSortTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [38, 27, 43, 3, 9, 82, 10, 5, 50, 1] }, "explanation": "Initial array. Begin Merge Sort." },
    { "stepId": 1, "type": "highlight", "source": { "line": 4 }, "state": { "array": [38, 27, 43, 3, 9], "highlights": { "indices": [0, 4] } }, "explanation": "Divide the array. Process left half [38, 27, 43, 3, 9]." },
    { "stepId": 2, "type": "highlight", "source": { "line": 4 }, "state": { "array": [38, 27], "highlights": { "indices": [0, 1] } }, "explanation": "Divide again. Process left half [38, 27]." },
    { "stepId": 3, "type": "swap", "source": { "line": 16 }, "state": { "array": [27, 38], "swaps": [0, 1] }, "explanation": "Merge [38] and [27] into [27, 38]." },
    { "stepId": 4, "type": "highlight", "source": { "line": 5 }, "state": { "array": [43, 3, 9], "highlights": { "indices": [0, 2] } }, "explanation": "Process right half [43, 3, 9]." },
    { "stepId": 5, "type": "swap", "source": { "line": 16 }, "state": { "array": [3, 9, 43], "swaps": [0, 1] }, "explanation": "Merge and sort to get [3, 9, 43]." },
    { "stepId": 6, "type": "compare", "source": { "line": 12 }, "state": { "array": [27, 38, 3, 9, 43], "comparisons": [0, 2] }, "explanation": "Merge the two sorted halves: [27, 38] and [3, 9, 43]. Compare 27 and 3." },
    { "stepId": 7, "type": "variable", "source": { "line": 16 }, "state": { "array": [3, 9, 27, 38, 43], "variables": { "merged": "[3, 9, 27, 38, 43]" } }, "explanation": "Merge the two halves into a single sorted array." },
    { "stepId": 8, "type": "highlight", "source": { "line": 5 }, "state": { "array": [82, 10, 5, 50, 1], "highlights": { "indices": [0, 4] } }, "explanation": "Now process the original right half." },
    { "stepId": 9, "type": "variable", "source": { "line": 16 }, "state": { "array": [1, 5, 10, 50, 82], "variables": { "merged": "[1, 5, 10, 50, 82]" } }, "explanation": "Recursively sort and merge the right half." },
    { "stepId": 10, "type": "compare", "source": { "line": 12 }, "state": { "array": [3, 9, 27, 38, 43, 1, 5, 10, 50, 82], "comparisons": [0, 5] }, "explanation": "Final merge. Compare first elements of both sorted halves." },
    { "stepId": 11, "type": "sorted", "source": { "line": 22 }, "state": { "array": [1, 3, 5, 9, 10, 27, 38, 43, 50, 82], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "The final merged array is sorted." }
];

const radixSortJsCode = `function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}`;

const radixSortPyCode = `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1
        
    for i in range(1, 10):
        count[i] += count[i - 1]
        
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
        
    for i in range(len(arr)):
        arr[i] = output[i]

def radix_sort(arr):
    max1 = max(arr)
    exp = 1
    while max1 / exp > 1:
        counting_sort(arr, exp)
        exp *= 10
    return arr`;

const radixSortTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 29 }, "state": { "array": [170, 45, 75, 90, 802, 24, 2, 66, 123, 456] }, "explanation": "Initial unsorted array." },
    { "stepId": 1, "type": "highlight", "source": { "line": 31 }, "state": { "array": [170, 45, 75, 90, 802, 24, 2, 66, 123, 456], "variables": { "exp": 1 } }, "explanation": "Start Radix Sort. Sorting by the least significant digit (1s place)." },
    { "stepId": 2, "type": "swap", "source": { "line": 32 }, "state": { "array": [170, 90, 802, 2, 123, 24, 45, 75, 456, 66] }, "explanation": "After sorting by the 1s place." },
    { "stepId": 3, "type": "highlight", "source": { "line": 31 }, "state": { "array": [170, 90, 802, 2, 123, 24, 45, 75, 456, 66], "variables": { "exp": 10 } }, "explanation": "Next, sorting by the 10s place." },
    { "stepId": 4, "type": "swap", "source": { "line": 32 }, "state": { "array": [802, 2, 123, 24, 45, 456, 66, 170, 75, 90] }, "explanation": "After sorting by the 10s place." },
    { "stepId": 5, "type": "highlight", "source": { "line": 31 }, "state": { "array": [802, 2, 123, 24, 45, 456, 66, 170, 75, 90], "variables": { "exp": 100 } }, "explanation": "Finally, sorting by the 100s place." },
    { "stepId": 6, "type": "swap", "source": { "line": 32 }, "state": { "array": [2, 24, 45, 66, 75, 90, 123, 170, 456, 802] }, "explanation": "After sorting by the 100s place. The array is now fully sorted." },
    { "stepId": 7, "type": "sorted", "source": { "line": 34 }, "state": { "array": [2, 24, 45, 66, 75, 90, 123, 170, 456, 802], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "Radix sort is complete." }
];

const linearSearchJsCode = `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`;

const linearSearchPyCode = `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`;

const linearSearchTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "variables": { "target": 91 } }, "explanation": "Initial array and target value. Start searching from the beginning." },
    { "stepId": 1, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [0, -1], "variables": { "target": 91 } }, "explanation": "Check index 0: 42 is not 91." },
    { "stepId": 2, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [1, -1], "variables": { "target": 91 } }, "explanation": "Check index 1: 15 is not 91." },
    { "stepId": 3, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [2, -1], "variables": { "target": 91 } }, "explanation": "Check index 2: 78 is not 91." },
    { "stepId": 4, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [3, -1], "variables": { "target": 91 } }, "explanation": "Check index 3: 31 is not 91." },
    { "stepId": 5, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [4, -1], "variables": { "target": 91 } }, "explanation": "Check index 4: 99 is not 91." },
    { "stepId": 6, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [5, -1], "variables": { "target": 91 } }, "explanation": "Check index 5: 7 is not 91." },
    { "stepId": 7, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [6, -1], "variables": { "target": 91 } }, "explanation": "Check index 6: 56 is not 91." },
    { "stepId": 8, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [7, -1], "variables": { "target": 91 } }, "explanation": "Check index 7: 82 is not 91." },
    { "stepId": 9, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [8, -1], "variables": { "target": 91 } }, "explanation": "Check index 8: 23 is not 91." },
    { "stepId": 10, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [9, -1], "variables": { "target": 91 } }, "explanation": "Check index 9: 68 is not 91." },
    { "stepId": 11, "type": "compare", "source": { "line": 3 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "comparisons": [10, -1], "variables": { "target": 91 } }, "explanation": "Check index 10: 91 is equal to 91." },
    { "stepId": 12, "type": "target-found", "source": { "line": 4 }, "state": { "array": [42, 15, 78, 31, 99, 7, 56, 82, 23, 68, 91, 4, 39, 60, 20], "sortedIndices": [10], "variables": { "target": 91 } }, "explanation": "Target found at index 10. Algorithm terminates." }
];

const binarySearchJsCode = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`;

const binarySearchPyCode = `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`;

const binarySearchTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "variables": { "target": 123, "left": 0, "right": 14 } }, "explanation": "Initial sorted array and target. Set left and right pointers." },
    { "stepId": 1, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "highlights": { "indices": [7] }, "variables": { "target": 123, "left": 0, "right": 14, "mid": 7 } }, "explanation": "Calculate middle index: mid = 7. Element is 56." },
    { "stepId": 2, "type": "compare", "source": { "line": 8 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "comparisons": [7, -1], "variables": { "target": 123, "left": 0, "right": 14, "mid": 7 } }, "explanation": "Compare middle element (56) with target (123). 56 < 123." },
    { "stepId": 3, "type": "variable", "source": { "line": 9 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "variables": { "target": 123, "left": 8, "right": 14, "mid": 7 } }, "explanation": "Target is in the right half. Update left pointer to mid + 1." },
    { "stepId": 4, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "highlights": { "indices": [11] }, "variables": { "target": 123, "left": 8, "right": 14, "mid": 11 } }, "explanation": "Recalculate middle index: mid = 11. Element is 112." },
    { "stepId": 5, "type": "compare", "source": { "line": 8 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "comparisons": [11, -1], "variables": { "target": 123, "left": 8, "right": 14, "mid": 11 } }, "explanation": "Compare middle element (112) with target (123). 112 < 123." },
    { "stepId": 6, "type": "variable", "source": { "line": 9 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "variables": { "target": 123, "left": 12, "right": 14, "mid": 11 } }, "explanation": "Target is in the right half. Update left pointer to mid + 1." },
    { "stepId": 7, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "highlights": { "indices": [13] }, "variables": { "target": 123, "left": 12, "right": 14, "mid": 13 } }, "explanation": "Recalculate middle index: mid = 13. Element is 134." },
    { "stepId": 8, "type": "compare", "source": { "line": 10 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "comparisons": [13, -1], "variables": { "target": 123, "left": 12, "right": 14, "mid": 13 } }, "explanation": "Compare middle element (134) with target (123). 134 > 123." },
    { "stepId": 9, "type": "variable", "source": { "line": 11 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "variables": { "target": 123, "left": 12, "right": 12, "mid": 13 } }, "explanation": "Target is in the left half. Update right pointer to mid - 1." },
    { "stepId": 10, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "highlights": { "indices": [12] }, "variables": { "target": 123, "left": 12, "right": 12, "mid": 12 } }, "explanation": "Recalculate middle index: mid = 12. Element is 123." },
    { "stepId": 11, "type": "compare", "source": { "line": 6 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "comparisons": [12, -1], "variables": { "target": 123, "left": 12, "right": 12, "mid": 12 } }, "explanation": "Compare middle element (123) with target (123)." },
    { "stepId": 12, "type": "target-found", "source": { "line": 7 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101, 112, 123, 134, 150], "sortedIndices": [12], "variables": { "target": 123, "left": 12, "right": 12, "mid": 12 } }, "explanation": "Target found at index 12. Algorithm terminates." }
];

const bfsJsCode = `function bfs(graph, startNode) {
  let visited = new Set();
  let queue = [startNode];
  visited.add(startNode);
  
  while (queue.length > 0) {
    const currentNode = queue.shift();
    
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return Array.from(visited);
}`;

const bfsPyCode = `from collections import deque

def bfs(graph, start_node):
    visited = set()
    queue = deque([start_node])
    visited.add(start_node)
    
    while queue:
        current_node = queue.popleft()
        
        for neighbor in graph.get(current_node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return list(visited)`;

const graphForTrace = {
  nodes: [
    { id: 'A', label: 'A', x: 50, y: 50 },
    { id: 'B', label: 'B', x: 150, y: 50 },
    { id: 'C', label: 'C', x: 250, y: 50 },
    { id: 'D', label: 'D', x: 50, y: 125 },
    { id: 'E', label: 'E', x: 150, y: 125 },
    { id: 'F', label: 'F', x: 250, y: 125 },
    { id: 'G', label: 'G', x: 50, y: 200 },
    { id: 'H', label: 'H', x: 150, y: 200 },
    { id: 'I', label: 'I', x: 250, y: 200 },
    { id: 'J', label: 'J', x: 150, y: 275 },
  ],
  edges: [
    { from: 'A', to: 'B' }, { from: 'A', to: 'D' },
    { from: 'B', to: 'C' }, { from: 'B', to: 'E' },
    { from: 'C', to: 'F' },
    { from: 'D', to: 'E' }, { from: 'D', to: 'G' },
    { from: 'E', to: 'F' }, { from: 'E', to: 'H' },
    { from: 'F', to: 'I' },
    { from: 'G', to: 'H' },
    { from: 'H', to: 'I' }, { from: 'H', to: 'J' },
    { from: 'I', to: 'J' },
  ],
};

const bfsTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { graph: graphForTrace, visited: [], queue: ['A'] }, "explanation": "Start BFS from node A. Add A to queue and visited." },
    { "stepId": 1, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A'], queue: [], highlights: { nodes: ['A'] } }, "explanation": "Dequeue A. Explore its neighbors." },
    { "stepId": 2, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D'], queue: ['B', 'D'], highlights: { nodes: ['B', 'D'], edges: [{from: 'A', to: 'B'}, {from: 'A', to: 'D'}] } }, "explanation": "Enqueue and visit unvisited neighbors of A: B, D." },
    { "stepId": 3, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D'], queue: ['D'], highlights: { nodes: ['B'] } }, "explanation": "Dequeue B. Explore its neighbors." },
    { "stepId": 4, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E'], queue: ['D', 'C', 'E'], highlights: { nodes: ['C', 'E'], edges: [{from: 'B', to: 'C'}, {from: 'B', to: 'E'}] } }, "explanation": "Enqueue and visit unvisited neighbors of B: C, E." },
    { "stepId": 5, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E'], queue: ['C', 'E'], highlights: { nodes: ['D'] } }, "explanation": "Dequeue D. Explore its neighbors." },
    { "stepId": 6, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G'], queue: ['C', 'E', 'G'], highlights: { nodes: ['G'], edges: [{from: 'D', to: 'G'}] } }, "explanation": "Enqueue and visit unvisited neighbor of D: G. (E is already visited)." },
    { "stepId": 7, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G'], queue: ['E', 'G'], highlights: { nodes: ['C'] } }, "explanation": "Dequeue C. Explore its neighbors." },
    { "stepId": 8, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F'], queue: ['E', 'G', 'F'], highlights: { nodes: ['F'], edges: [{from: 'C', to: 'F'}] } }, "explanation": "Enqueue and visit unvisited neighbor of C: F." },
    { "stepId": 9, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F'], queue: ['G', 'F'], highlights: { nodes: ['E'] } }, "explanation": "Dequeue E. Explore its neighbors." },
    { "stepId": 10, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H'], queue: ['G', 'F', 'H'], highlights: { nodes: ['H'], edges: [{from: 'E', to: 'H'}] } }, "explanation": "Enqueue and visit unvisited neighbor of E: H. (F is already visited)." },
    { "stepId": 11, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H'], queue: ['F', 'H'], highlights: { nodes: ['G'] } }, "explanation": "Dequeue G. Explore its neighbors." },
    { "stepId": 12, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H'], queue: ['F', 'H'], highlights: { nodes: [] } }, "explanation": "Neighbor H of G is already visited." },
    { "stepId": 13, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H'], queue: ['H'], highlights: { nodes: ['F'] } }, "explanation": "Dequeue F. Explore its neighbors." },
    { "stepId": 14, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I'], queue: ['H', 'I'], highlights: { nodes: ['I'], edges: [{from: 'F', to: 'I'}] } }, "explanation": "Enqueue and visit unvisited neighbor of F: I." },
    { "stepId": 15, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I'], queue: ['I'], highlights: { nodes: ['H'] } }, "explanation": "Dequeue H. Explore its neighbors." },
    { "stepId": 16, "type": "highlight", "source": { "line": 10 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I', 'J'], queue: ['I', 'J'], highlights: { nodes: ['J'], edges: [{from: 'H', to: 'J'}] } }, "explanation": "Enqueue and visit unvisited neighbor of H: J. (I is already visited)." },
    { "stepId": 17, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I', 'J'], queue: ['J'], highlights: { nodes: ['I'] } }, "explanation": "Dequeue I. All neighbors are visited." },
    { "stepId": 18, "type": "visit", "source": { "line": 7 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I', 'J'], queue: [], highlights: { nodes: ['J'] } }, "explanation": "Dequeue J. All neighbors are visited." },
    { "stepId": 19, "type": "sorted", "source": { "line": 15 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E', 'G', 'F', 'H', 'I', 'J'], queue: [] }, "explanation": "Queue is empty. BFS is complete." }
];

const dfsJsCode = `function dfs(graph, startNode) {
  let visited = new Set();
  let stack = [startNode];
  
  while (stack.length > 0) {
    const currentNode = stack.pop();
    
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      
      const neighbors = graph.get(currentNode) || [];
      // Add neighbors to the stack in reverse order to visit them in order
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return Array.from(visited);
}`;

const dfsPyCode = `def dfs(graph, start_node):
    visited = set()
    stack = [start_node]
    
    while stack:
        current_node = stack.pop()
        
        if current_node not in visited:
            visited.add(current_node)
            
            # Add neighbors in reverse order to explore them alphabetically
            for neighbor in reversed(graph.get(current_node, [])):
                if neighbor not in visited:
                    stack.append(neighbor)
    return list(visited)`;

const dfsTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { graph: graphForTrace, visited: [], stack: ['A'] }, "explanation": "Start DFS from node A. Push A onto the stack." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A'], stack: ['D', 'B'], highlights: { nodes: ['A'] } }, "explanation": "Pop A, mark as visited. Push its neighbors D then B to the stack." },
    { "stepId": 2, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B'], stack: ['D', 'E', 'C'], highlights: { nodes: ['B'] } }, "explanation": "Pop B, mark as visited. Push its neighbors E then C." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C'], stack: ['D', 'E', 'F'], highlights: { nodes: ['C'] } }, "explanation": "Pop C, mark as visited. Push its neighbor F." },
    { "stepId": 4, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F'], stack: ['D', 'E', 'I'], highlights: { nodes: ['F'] } }, "explanation": "Pop F, mark as visited. Push its neighbor I." },
    { "stepId": 5, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I'], stack: ['D', 'E', 'J'], highlights: { nodes: ['I'] } }, "explanation": "Pop I, mark as visited. Push its neighbor J." },
    { "stepId": 6, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J'], stack: ['D', 'E', 'H'], highlights: { nodes: ['J'] } }, "explanation": "Pop J, mark as visited. H is already on stack from E. No new neighbors to push." },
    { "stepId": 7, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J', 'E'], stack: ['D', 'H'], highlights: { nodes: ['E'] } }, "explanation": "Pop E, mark as visited. Push neighbor H. F is visited." },
    { "stepId": 8, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J', 'E', 'H'], stack: ['D', 'G'], highlights: { nodes: ['H'] } }, "explanation": "Pop H, mark as visited. I and J are visited. G is unvisited so push G." },
    { "stepId": 9, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J', 'E', 'H', 'G'], stack: ['D'], highlights: { nodes: ['G'] } }, "explanation": "Pop G, mark as visited. H is visited." },
    { "stepId": 10, "type": "visit", "source": { "line": 5 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J', 'E', 'H', 'G', 'D'], stack: [], highlights: { nodes: ['D'] } }, "explanation": "Pop D, mark as visited. B, E, G are all visited." },
    { "stepId": 11, "type": "sorted", "source": { "line": 21 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'F', 'I', 'J', 'E', 'H', 'G', 'D'], stack: [] }, "explanation": "Stack is empty. DFS traversal is complete." }
];


const treeForTrace: TreeNode[] = [
    { id: '8', value: 8, x: 150, y: 40, left: '4', right: '12' },
    { id: '4', value: 4, x: 75, y: 100, left: '2', right: '6' },
    { id: '12', value: 12, x: 225, y: 100, left: '10', right: '14' },
    { id: '2', value: 2, x: 37.5, y: 160, left: '1', right: '3' },
    { id: '6', value: 6, x: 112.5, y: 160, left: '5', right: '7' },
    { id: '10', value: 10, x: 187.5, y: 160, left: '9', right: '11' },
    { id: '14', value: 14, x: 262.5, y: 160, left: '13', right: '15' },
    { id: '1', value: 1, x: 18.75, y: 220, left: null, right: null },
    { id: '3', value: 3, x: 56.25, y: 220, left: null, right: null },
    { id: '5', value: 5, x: 93.75, y: 220, left: null, right: null },
    { id: '7', value: 7, x: 131.25, y: 220, left: null, right: null },
    { id: '9', value: 9, x: 168.75, y: 220, left: null, right: null },
    { id: '11', value: 11, x: 206.25, y: 220, left: null, right: null },
    { id: '13', value: 13, x: 243.75, y: 220, left: null, right: null },
    { id: '15', value: 15, x: 281.25, y: 220, left: null, right: null },
];

const inOrderJsCode = `function inOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }
  traverse(root);
  return result;
}`;

const inOrderPyCode = `def inorder_traversal(root):
    result = []
    def traverse(node):
        if node:
            traverse(node.left)
            result.append(node.value)
            traverse(node.right)
    traverse(root)
    return result`;

const inOrderTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "tree": treeForTrace, "traversalOrder": [] }, "explanation": "Start In-order traversal from the root (8)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["8"] } }, "explanation": "Go left from 8." },
    { "stepId": 2, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["4"] } }, "explanation": "Go left from 4." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["2"] } }, "explanation": "Go left from 2." },
    { "stepId": 4, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["1"] } }, "explanation": "Go left from 1. Null." },
    { "stepId": 5, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1"], "visited": ["1"], "highlights": { "nodes": ["1"] } }, "explanation": "Visit 1." },
    { "stepId": 6, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1"], "visited": ["1"], "highlights": { "nodes": ["1"] } }, "explanation": "Go right from 1. Null. Return to 2." },
    { "stepId": 7, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2"], "visited": ["1", "2"], "highlights": { "nodes": ["2"] } }, "explanation": "Visit 2." },
    { "stepId": 8, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2"], "visited": ["1", "2"], "highlights": { "nodes": ["2"] } }, "explanation": "Go right from 2." },
    { "stepId": 9, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2"], "visited": ["1", "2"], "highlights": { "nodes": ["3"] } }, "explanation": "Go left from 3. Null." },
    { "stepId": 10, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3"], "visited": ["1", "2", "3"], "highlights": { "nodes": ["3"] } }, "explanation": "Visit 3." },
    { "stepId": 11, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3"], "visited": ["1", "2", "3"], "highlights": { "nodes": ["3"] } }, "explanation": "Go right from 3. Null. Return to 2, then to 4." },
    { "stepId": 12, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4"], "visited": ["1", "2", "3", "4"], "highlights": { "nodes": ["4"] } }, "explanation": "Visit 4." },
    { "stepId": 13, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4"], "visited": ["1", "2", "3", "4"], "highlights": { "nodes": ["4"] } }, "explanation": "Go right from 4." },
    { "stepId": 14, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5"], "visited": ["1", "2", "3", "4", "5"], "highlights": { "nodes": ["5"] } }, "explanation": "Go left from 6, visit 5. (Steps skipped for brevity)" },
    { "stepId": 15, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5", "6"], "visited": ["1", "2", "3", "4", "5", "6"], "highlights": { "nodes": ["6"] } }, "explanation": "Visit 6." },
    { "stepId": 16, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5", "6", "7"], "visited": ["1", "2", "3", "4", "5", "6", "7"], "highlights": { "nodes": ["7"] } }, "explanation": "Go right from 6, visit 7." },
    { "stepId": 17, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5", "6", "7", "8"], "visited": ["1", "2", "3", "4", "5", "6", "7", "8"], "highlights": { "nodes": ["8"] } }, "explanation": "Visit 8." },
    { "stepId": 18, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "visited": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "highlights": { "nodes": ["15"] } }, "explanation": "Traverse the right subtree of 8 completely." },
    { "stepId": 19, "type": "sorted", "source": { "line": 10 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], "visited": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"] }, "explanation": "Traversal complete." }
];

const preOrderJsCode = `function preOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}`;

const preOrderPyCode = `def preorder_traversal(root):
    result = []
    def traverse(node):
        if node:
            result.append(node.value)
            traverse(node.left)
            traverse(node.right)
    traverse(root)
    return result`;
    
const preOrderTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "tree": treeForTrace, "traversalOrder": [] }, "explanation": "Start Pre-order traversal from the root (8)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8"], "visited": ["8"], "highlights": { "nodes": ["8"] } }, "explanation": "Visit 8." },
    { "stepId": 2, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["8"], "visited": ["8"], "highlights": { "nodes": ["8"] } }, "explanation": "Go left from 8." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4"], "visited": ["8", "4"], "highlights": { "nodes": ["4"] } }, "explanation": "Visit 4." },
    { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4"], "visited": ["8", "4"], "highlights": { "nodes": ["4"] } }, "explanation": "Go left from 4." },
    { "stepId": 5, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2"], "visited": ["8", "4", "2"], "highlights": { "nodes": ["2"] } }, "explanation": "Visit 2." },
    { "stepId": 6, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2"], "visited": ["8", "4", "2"], "highlights": { "nodes": ["2"] } }, "explanation": "Go left from 2." },
    { "stepId": 7, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1"], "visited": ["8", "4", "2", "1"], "highlights": { "nodes": ["1"] } }, "explanation": "Visit 1." },
    { "stepId": 8, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1"], "visited": ["8", "4", "2", "1"], "highlights": { "nodes": ["1"] } }, "explanation": "Go left from 1 (null). Go right from 1 (null). Return." },
    { "stepId": 9, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1"], "visited": ["8", "4", "2", "1"], "highlights": { "nodes": ["2"] } }, "explanation": "Go right from 2." },
    { "stepId": 10, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3"], "visited": ["8", "4", "2", "1", "3"], "highlights": { "nodes": ["3"] } }, "explanation": "Visit 3. Go left/right (null). Return." },
    { "stepId": 11, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3"], "visited": ["8", "4", "2", "1", "3"], "highlights": { "nodes": ["4"] } }, "explanation": "Go right from 4." },
    { "stepId": 12, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3", "6", "5", "7"], "visited": ["8", "4", "2", "1", "3", "6", "5", "7"], "highlights": { "nodes": ["7"] } }, "explanation": "Visit 6, then its left child 5, then its right child 7." },
    { "stepId": 13, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3", "6", "5", "7"], "visited": ["8", "4", "2", "1", "3", "6", "5", "7"], "highlights": { "nodes": ["8"] } }, "explanation": "Return to 8. Go right from 8." },
    { "stepId": 14, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3", "6", "5", "7", "12", "10", "9", "11", "14", "13", "15"], "visited": ["8", "4", "2", "1", "3", "6", "5", "7", "12", "10", "9", "11", "14", "13", "15"], "highlights": { "nodes": ["15"] } }, "explanation": "Traverse the entire right subtree of 8." },
    { "stepId": 15, "type": "sorted", "source": { "line": 10 }, "state": { "tree": treeForTrace, "traversalOrder": ["8", "4", "2", "1", "3", "6", "5", "7", "12", "10", "9", "11", "14", "13", "15"], "visited": ["8", "4", "2", "1", "3", "6", "5", "7", "12", "10", "9", "11", "14", "13", "15"] }, "explanation": "Traversal complete." }
];

const postOrderJsCode = `function postOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }
  traverse(root);
  return result;
}`;

const postOrderPyCode = `def postorder_traversal(root):
    result = []
    def traverse(node):
        if node:
            traverse(node.left)
            traverse(node.right)
            result.append(node.value)
    traverse(root)
    return result`;

const postOrderTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "tree": treeForTrace, "traversalOrder": [] }, "explanation": "Start Post-order traversal from the root (8)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["8"] } }, "explanation": "Go left from 8." },
    { "stepId": 2, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["4"] } }, "explanation": "Go left from 4." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["2"] } }, "explanation": "Go left from 2." },
    { "stepId": 4, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": [], "highlights": { "nodes": ["1"] } }, "explanation": "Go left from 1 (null), then right (null)." },
    { "stepId": 5, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1"], "visited": ["1"], "highlights": { "nodes": ["1"] } }, "explanation": "Visit 1. Return to 2." },
    { "stepId": 6, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1"], "visited": ["1"], "highlights": { "nodes": ["2"] } }, "explanation": "Go right from 2." },
    { "stepId": 7, "type": "visit", "source": { "line": 5 }, "state": { "tree": treeForTrace, "traversalOrder": ["1"], "visited": ["1"], "highlights": { "nodes": ["3"] } }, "explanation": "Go left from 3 (null), then right (null)." },
    { "stepId": 8, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3"], "visited": ["1", "3"], "highlights": { "nodes": ["3"] } }, "explanation": "Visit 3. Return to 2." },
    { "stepId": 9, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2"], "visited": ["1", "3", "2"], "highlights": { "nodes": ["2"] } }, "explanation": "Visit 2. Return to 4." },
    { "stepId": 10, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2"], "visited": ["1", "3", "2"], "highlights": { "nodes": ["4"] } }, "explanation": "Go right from 4." },
    { "stepId": 11, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6"], "visited": ["1", "3", "2", "5", "7", "6"], "highlights": { "nodes": ["6"] } }, "explanation": "Traverse left subtree of 6 (visiting 5), then right subtree (visiting 7), then visit 6." },
    { "stepId": 12, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6", "4"], "visited": ["1", "3", "2", "5", "7", "6", "4"], "highlights": { "nodes": ["4"] } }, "explanation": "Visit 4. Return to 8." },
    { "stepId": 13, "type": "visit", "source": { "line": 6 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6", "4"], "visited": ["1", "3", "2", "5", "7", "6", "4"], "highlights": { "nodes": ["8"] } }, "explanation": "Go right from 8." },
    { "stepId": 14, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12"], "visited": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12"], "highlights": { "nodes": ["12"] } }, "explanation": "Completely traverse right subtree of 8, visiting 12 last among them." },
    { "stepId": 15, "type": "visit", "source": { "line": 7 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12", "8"], "visited": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12", "8"], "highlights": { "nodes": ["8"] } }, "explanation": "Visit 8." },
    { "stepId": 16, "type": "sorted", "source": { "line": 10 }, "state": { "tree": treeForTrace, "traversalOrder": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12", "8"], "visited": ["1", "3", "2", "5", "7", "6", "4", "9", "11", "10", "13", "15", "14", "12", "8"] }, "explanation": "Traversal complete." }
];

const weightedGraphForTrace = {
  nodes: [
    { id: 'A', label: 'A', x: 50, y: 150 },
    { id: 'B', label: 'B', x: 150, y: 50 },
    { id: 'C', label: 'C', x: 150, y: 250 },
    { id: 'D', label: 'D', x: 250, y: 50 },
    { id: 'E', label: 'E', x: 250, y: 250 },
    { id: 'F', label: 'F', x: 350, y: 150 },
  ],
  edges: [
    { from: 'A', to: 'B', weight: 7 }, { from: 'A', to: 'C', weight: 9 },
    { from: 'A', to: 'D', weight: 14 },
    { from: 'B', to: 'D', weight: 2 },
    { from: 'C', to: 'E', weight: 2 },
    { from: 'D', to: 'E', weight: 10 }, { from: 'D', to: 'F', weight: 9 },
    { from: 'E', to: 'F', weight: 11 },
  ],
  directed: true,
};

const mstGraphForTrace = {
  nodes: [
    { id: 'A', label: 'A', x: 50, y: 150 },
    { id: 'B', label: 'B', x: 150, y: 50 },
    { id: 'C', label: 'C', x: 150, y: 250 },
    { id: 'D', label: 'D', x: 250, y: 150 },
    { id: 'E', label: 'E', x: 350, y: 50 },
    { id: 'F', label: 'F', x: 350, y: 250 },
    { id: 'G', label: 'G', x: 450, y: 150 },
    { id: 'H', label: 'H', x: 250, y: 250},
    { id: 'I', label: 'I', x: 250, y: 50},
  ],
  edges: [
    { from: 'A', to: 'B', weight: 4 }, { from: 'A', to: 'C', weight: 8 },
    { from: 'B', to: 'C', weight: 11 }, { from: 'B', to: 'I', weight: 8 },
    { from: 'C', to: 'H', weight: 1 }, { from: 'C', to: 'D', weight: 7 },
    { from: 'D', to: 'H', weight: 6 }, { from: 'D', to: 'F', weight: 2 }, { from: 'D', to: 'I', weight: 2 },
    { from: 'E', to: 'F', weight: 10 }, { from: 'E', to: 'G', weight: 4 }, { from: 'E', to: 'I', weight: 9 },
    { from: 'F', to: 'G', weight: 14 }, { from: 'F', to: 'H', weight: 4 },
    { from: 'G', to: 'H', weight: 13 },
    { from: 'H', to: 'I', weight: 7 },
  ],
  directed: false,
};


const dijkstraJsCode = `function dijkstra(graph, startNode) {
    const costs = {};
    const parents = {};
    const processed = [];

    Object.keys(graph.nodes).forEach(node => {
        costs[node] = Infinity;
    });
    costs[startNode] = 0;

    let node = findLowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let neighbors = graph.edges.filter(e => e.from === node);
        for (let n of neighbors) {
            let newCost = cost + n.weight;
            if (newCost < costs[n.to]) {
                costs[n.to] = newCost;
                parents[n.to] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costs, processed);
    }
    return { costs, parents };
}`;

const dijkstraPyCode = `import heapq

def dijkstra(graph, start_node):
    costs = {node['id']: float('infinity') for node in graph['nodes']}
    costs[start_node] = 0
    pq = [(0, start_node)]
    parents = {}

    while pq:
        cost, node = heapq.heappop(pq)

        if cost > costs[node]:
            continue

        for edge in [e for e in graph['edges'] if e['from'] == node]:
            new_cost = cost + edge['weight']
            if new_cost < costs[edge['to']]:
                costs[edge['to']] = new_cost
                parents[edge['to']] = node
                heapq.heappush(pq, (new_cost, edge['to']))

    return {'costs': costs, 'parents': parents}`;

const dijkstraTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "graph": weightedGraphForTrace, "costs": { 'A': 0, 'B': Infinity, 'C': Infinity, 'D': Infinity, 'E': Infinity, 'F': Infinity }, "parents": {}, "visited": [] }, "explanation": "Start Dijkstra's from A. Initialize costs: A is 0, all others are Infinity." },
    { "stepId": 1, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["A"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 14 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'A' }, "visited": ["A"] }, "explanation": "Visit A. Update costs for neighbors B (7), C (9), and D (14)." },
    { "stepId": 2, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["B"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B' }, "visited": ["A", "B"] }, "explanation": "Visit B (lowest cost). Update cost for neighbor D to 7+2=9." },
    { "stepId": 3, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["C"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9, 'E': 11 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'C' }, "visited": ["A", "B", "C"] }, "explanation": "Visit C (cost 9). Update cost for neighbor E to 9+2=11." },
    { "stepId": 4, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["D"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9, 'E': 11, 'F': 18 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'C', 'F': 'D' }, "visited": ["A", "B", "C", "D"] }, "explanation": "Visit D (cost 9). Update cost for E (no change) and F to 9+9=18." },
    { "stepId": 5, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["E"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9, 'E': 11, 'F': 18 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'C', 'F': 'D' }, "visited": ["A", "B", "C", "D", "E"] }, "explanation": "Visit E (cost 11). Update cost for F (no change)." },
    { "stepId": 6, "type": "visit", "source": { "line": 12 }, "state": { "graph": weightedGraphForTrace, "highlights": { "nodes": ["F"] }, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9, 'E': 11, 'F': 18 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'C', 'F': 'D' }, "visited": ["A", "B", "C", "D", "E", "F"] }, "explanation": "Visit F (cost 18). No unvisited neighbors." },
    { "stepId": 7, "type": "sorted", "source": { "line": 26 }, "state": { "graph": weightedGraphForTrace, "costs": { 'A': 0, 'B': 7, 'C': 9, 'D': 9, 'E': 11, 'F': 18 }, "parents": { 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'C', 'F': 'D' }, "visited": ["A", "B", "C", "D", "E", "F"], "highlights": { "edges": [{from: 'A', to: 'B'}, {from: 'B', to: 'D'}, {from: 'A', to: 'C'}, {from: 'C', to: 'E'}, {from: 'D', to: 'F'}] } }, "explanation": "Algorithm finished. Shortest paths from A are found." }
];

const primsJsCode = `function prims(graph, startNode) {
    const mst = new Set();
    const visited = new Set([startNode]);
    const edges = [];

    // Add all edges from the start node
    graph.edges.filter(e => e.from === startNode || e.to === startNode).forEach(e => edges.push(e));

    while (edges.length > 0) {
        // Find the edge with the minimum weight
        edges.sort((a, b) => a.weight - b.weight);
        const edge = edges.shift();

        const nonVisitedNode = !visited.has(edge.from) ? edge.from : (!visited.has(edge.to) ? edge.to : null);

        if (nonVisitedNode) {
            visited.add(nonVisitedNode);
            mst.add(edge);

            // Add new edges from the newly visited node
            graph.edges
                .filter(e => (e.from === nonVisitedNode || e.to === nonVisitedNode))
                .forEach(newEdge => {
                    if (!visited.has(newEdge.from) || !visited.has(newEdge.to)) {
                        edges.push(newEdge);
                    }
                });
        }
    }
    return Array.from(mst);
}`;

const primsPyCode = `import heapq

def prims(graph, start_node):
    mst = set()
    visited = {start_node}
    edges = []
    
    # Create an adjacency list for easier lookup
    adj = {node['id']: [] for node in graph['nodes']}
    for edge in graph['edges']:
        adj[edge['from']].append((edge['weight'], edge['from'], edge['to']))
        adj[edge['to']].append((edge['weight'], edge['to'], edge['from']))

    for weight, u, v in adj[start_node]:
        heapq.heappush(edges, (weight, u, v))

    while edges:
        weight, u, v = heapq.heappop(edges)
        
        if v not in visited:
            visited.add(v)
            mst.add(tuple(sorted((u, v))))
            
            for next_weight, next_u, next_v in adj[v]:
                if next_v not in visited:
                    heapq.heappush(edges, (next_weight, next_u, next_v))
    
    return [{'from': u, 'to': v} for u, v in mst]`;

const primsTrace: ExecutionStep[] = [
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "graph": mstGraphForTrace, "visited": ["A"], "highlights": { "nodes": ["A"] } }, "explanation": "Start Prim's from A. Add A to visited set." },
    { "stepId": 1, "type": "highlight", "source": { "line": 6 }, "state": { "graph": mstGraphForTrace, "visited": ["A"], "highlights": { "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}] } }, "explanation": "Consider all edges from A. Smallest is A-B (weight 4)." },
    { "stepId": 2, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B"], "highlights": { "nodes": ["B"], "edges": [{from: 'A', to: 'B'}] } }, "explanation": "Add edge A-B to MST. Add B to visited set." },
    { "stepId": 3, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B"], "highlights": { "nodes": ["B"], "edges": [{from: 'A', to: 'C'}, {from: 'B', to: 'I'}, {from: 'A', to: 'B'}] } }, "explanation": "Consider available edges. Smallest are A-C (8) and B-I (8)." },
    { "stepId": 4, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C"], "highlights": { "nodes": ["C"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}] } }, "explanation": "Choose A-C. Add edge A-C to MST. Add C to visited set." },
    { "stepId": 5, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C"], "highlights": { "nodes": ["C"], "edges": [{from: 'C', to: 'H'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}] } }, "explanation": "Consider edges. Smallest is C-H (weight 1)." },
    { "stepId": 6, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H"], "highlights": { "nodes": ["H"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}] } }, "explanation": "Add C-H to MST. Add H to visited set." },
    { "stepId": 7, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H"], "highlights": { "nodes": ["H"], "edges": [{from: 'H', to: 'F'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}] } }, "explanation": "Consider edges. Smallest is H-F (weight 4)." },
    { "stepId": 8, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F"], "highlights": { "nodes": ["F"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', to: 'F'}] } }, "explanation": "Add H-F to MST. Add F to visited set." },
    { "stepId": 9, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F"], "highlights": { "nodes": ["F"], "edges": [{from: 'F', to: 'D'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', to: 'F'}] } }, "explanation": "Consider edges. Smallest is F-D (weight 2)." },
    { "stepId": 10, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D"], "highlights": { "nodes": ["D"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}] } }, "explanation": "Add F-D to MST. Add D to visited set." },
    { "stepId": 11, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D"], "highlights": { "nodes": ["D"], "edges": [{from: 'D', to: 'I'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}] } }, "explanation": "Consider edges. Smallest is D-I (weight 2)." },
    { "stepId": 12, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I"], "highlights": { "nodes": ["I"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}] } }, "explanation": "Add D-I to MST. Add I to visited set." },
    { "stepId": 13, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I"], "highlights": { "nodes": ["I"], "edges": [{from: 'I', to: 'E'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}] } }, "explanation": "Consider edges. Smallest is I-E (weight 9)." },
    { "stepId": 14, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I", "E"], "highlights": { "nodes": ["E"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}, {from: 'I', to: 'E'}] } }, "explanation": "Add I-E to MST. Add E to visited set." },
    { "stepId": 15, "type": "highlight", "source": { "line": 20 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I", "E"], "highlights": { "nodes": ["E"], "edges": [{from: 'E', to: 'G'}, {from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}, {from: 'I', to: 'E'}] } }, "explanation": "Consider edges. Smallest is E-G (weight 4)." },
    { "stepId": 16, "type": "visit", "source": { "line": 16 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I", "E", "G"], "highlights": { "nodes": ["G"], "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}, {from: 'I', to: 'E'}, {from: 'E', to: 'G'}] } }, "explanation": "Add E-G to MST. Add G to visited set." },
    { "stepId": 17, "type": "sorted", "source": { "line": 29 }, "state": { "graph": mstGraphForTrace, "visited": ["A", "B", "C", "H", "F", "D", "I", "E", "G"], "highlights": { "edges": [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}, {from: 'C', to: 'H'}, {from: 'H', 'to': 'F'}, {from: 'F', to: 'D'}, {from: 'D', to: 'I'}, {from: 'I', to: 'E'}, {from: 'E', to: 'G'}] } }, "explanation": "All nodes visited. MST is complete." }
];

export const algorithms: Algorithm[] = [
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    description: 'A simple comparison-based sorting algorithm. Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    category: 'sorting',
    code: {
      javascript: bubbleSortJsCode,
      python: bubbleSortPyCode,
    },
    trace: bubbleSortTrace,
  },
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    description: 'A simple sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items.',
    category: 'sorting',
    code: {
        javascript: selectionSortJsCode,
        python: selectionSortPyCode,
    },
    trace: selectionSortTrace,
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    description: 'A simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
    category: 'sorting',
    code: {
        javascript: insertionSortJsCode,
        python: insertionSortPyCode,
    },
    trace: insertionSortTrace,
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    description: 'An efficient, divide-and-conquer sorting algorithm. It works by selecting a \'pivot\' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.',
    category: 'sorting',
    code: {
        javascript: quickSortJsCode,
        python: quickSortPyCode,
    },
    trace: quickSortTrace,
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    description: 'An efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.',
    category: 'sorting',
    code: {
        javascript: mergeSortJsCode,
        python: mergeSortPyCode,
    },
    trace: mergeSortTrace,
  },
  {
    id: 'radix-sort',
    name: 'Radix Sort',
    description: 'A non-comparative sorting algorithm that sorts integers by processing individual digits. It sorts items by grouping them by the individual digits which share the same significant position and value.',
    category: 'sorting',
    code: {
      javascript: radixSortJsCode,
      python: radixSortPyCode,
    },
    trace: radixSortTrace,
  },
  {
    id: 'linear-search',
    name: 'Linear Search',
    description: 'A simple searching algorithm that sequentially checks each element of the list until a match is found or the whole list has been searched.',
    category: 'searching',
    code: {
      javascript: linearSearchJsCode,
      python: linearSearchPyCode,
    },
    trace: linearSearchTrace,
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you\'ve narrowed down the possible locations to just one.',
    category: 'searching',
    code: {
      javascript: binarySearchJsCode,
      python: binarySearchPyCode,
    },
    trace: binarySearchTrace,
  },
  {
    id: 'bfs',
    name: 'Breadth-First Search',
    description: 'A graph traversal algorithm that explores neighbors first before moving to the next level of neighbors. It uses a queue.',
    category: 'graph',
    code: {
      javascript: bfsJsCode,
      python: bfsPyCode,
    },
    trace: bfsTrace,
  },
  {
    id: 'dfs',
    name: 'Depth-First Search',
    description: 'A graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack.',
    category: 'graph',
    code: {
      javascript: dfsJsCode,
      python: dfsPyCode,
    },
    trace: dfsTrace,
  },
    {
    id: 'dijkstra',
    name: 'Dijkstra\'s Algorithm',
    description: 'An algorithm for finding the shortest paths between nodes in a weighted graph. It picks the unvisited node with the lowest distance, calculates the distance through it to each unvisited neighbor, and updates the neighbor\'s distance if smaller.',
    category: 'shortest-path',
    code: {
        javascript: dijkstraJsCode,
        python: dijkstraPyCode,
    },
    trace: dijkstraTrace,
  },
  {
    id: 'prims',
    name: 'Prim\'s Algorithm',
    description: 'A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. It finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.',
    category: 'mst',
    code: {
        javascript: primsJsCode,
        python: primsPyCode,
    },
    trace: primsTrace,
  },
  {
    id: 'in-order-traversal',
    name: 'In-order Traversal',
    description: 'A tree traversal method that visits the left subtree, then the root, then the right subtree. For a BST, this visits nodes in ascending order.',
    category: 'tree',
    code: {
      javascript: inOrderJsCode,
      python: inOrderPyCode,
    },
    trace: inOrderTrace,
  },
  {
    id: 'pre-order-traversal',
    name: 'Pre-order Traversal',
    description: 'A tree traversal method that visits the root, then the left subtree, then the right subtree. Useful for creating a copy of the tree.',
    category: 'tree',
    code: {
        javascript: preOrderJsCode,
        python: preOrderPyCode,
    },
    trace: preOrderTrace,
  },
  {
    id: 'post-order-traversal',
    name: 'Post-order Traversal',
    description: 'A tree traversal method that visits the left subtree, then the right subtree, then the root. Useful for deleting nodes from the tree.',
    category: 'tree',
    code: {
        javascript: postOrderJsCode,
        python: postOrderPyCode,
    },
    trace: postOrderTrace,
  }
];

export const algorithmCategories = [
  { id: 'sorting', name: 'Sorting' },
  { id: 'searching', name: 'Searching' },
  { id: 'graph', name: 'Graph Traversal' },
  { id: 'shortest-path', name: 'Shortest Path' },
  { id: 'mst', name: 'Minimum Spanning Tree' },
  { id: 'tree', name: 'Tree Traversal' },
];
