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
    { "stepId": 13, "type": "sorted", "source": { "line": 13 }, "state": { "array": [2, 4, 10, 13, 14, 29, 37, 58, 67, 88], "sortedIndices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, "explanation": "After subsequent passes, the entire array is sorted." }
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
    { id: 'A', label: 'A', x: 50, y: 150 },
    { id: 'B', label: 'B', x: 150, y: 50 },
    { id: 'C', label: 'C', x: 150, y: 250 },
    { id: 'D', label: 'D', x: 250, y: 50 },
    { id: 'E', label: 'E', x: 250, y: 250 },
  ],
  edges: [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'B', to: 'D' },
    { from: 'C', to: 'E' },
  ],
};

const bfsTrace: ExecutionStep[] = [
  { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { graph: graphForTrace, visited: [], queue: ['A'] }, "explanation": "Start BFS from node A. Add A to the queue and mark as visited." },
  { "stepId": 1, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A'], queue: [], highlights: { nodes: ['A'] } }, "explanation": "Dequeue A and process its neighbors." },
  { "stepId": 2, "type": "highlight", "source": { "line": 9 }, "state": { graph: graphForTrace, visited: ['A'], queue: [], highlights: { nodes: ['B', 'C'], edges: [{from: 'A', to: 'B'}, {from: 'A', to: 'C'}] } }, "explanation": "Neighbors of A are B and C. They have not been visited." },
  { "stepId": 3, "type": "variable", "source": { "line": 12 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C'], queue: ['B', 'C'] }, "explanation": "Add B and C to the queue and mark them as visited." },
  { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C'], queue: ['C'], highlights: { nodes: ['B'] } }, "explanation": "Dequeue B and process its neighbors." },
  { "stepId": 5, "type": "highlight", "source": { "line": 9 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C'], queue: ['C'], highlights: { nodes: ['D'], edges: [{from: 'B', to: 'D'}] } }, "explanation": "Neighbor of B is D. It has not been visited." },
  { "stepId": 6, "type": "variable", "source": { "line": 12 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D'], queue: ['C', 'D'] }, "explanation": "Add D to the queue and mark as visited." },
  { "stepId": 7, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D'], queue: ['D'], highlights: { nodes: ['C'] } }, "explanation": "Dequeue C and process its neighbors." },
  { "stepId": 8, "type": "highlight", "source": { "line": 9 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D'], queue: ['D'], highlights: { nodes: ['E'], edges: [{from: 'C', to: 'E'}] } }, "explanation": "Neighbor of C is E. It has not been visited." },
  { "stepId": 9, "type": "variable", "source": { "line": 12 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D', 'E'], queue: ['D', 'E'] }, "explanation": "Add E to the queue and mark as visited." },
  { "stepId": 10, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D', 'E'], queue: ['E'], highlights: { nodes: ['D'] } }, "explanation": "Dequeue D. It has no unvisited neighbors." },
  { "stepId": 11, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D', 'E'], queue: [], highlights: { nodes: ['E'] } }, "explanation": "Dequeue E. It has no unvisited neighbors." },
  { "stepId": 12, "type": "sorted", "source": { "line": 15 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'C', 'D', 'E'], queue: [] }, "explanation": "Queue is empty. BFS traversal is complete. Order: A, B, C, D, E." }
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
  { "stepId": 1, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A'], stack: ['C', 'B'], highlights: { nodes: ['A'] } }, "explanation": "Pop A, mark as visited. Push its neighbors C, then B to the stack (so B is on top)." },
  { "stepId": 2, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B'], stack: ['C', 'D'], highlights: { nodes: ['B'] } }, "explanation": "Pop B, mark as visited. Push its neighbor D to the stack." },
  { "stepId": 3, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D'], stack: ['C'], highlights: { nodes: ['D'] } }, "explanation": "Pop D, mark as visited. D has no unvisited neighbors." },
  { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C'], stack: ['E'], highlights: { nodes: ['C'] } }, "explanation": "Pop C, mark as visited. Push its neighbor E to the stack." },
  { "stepId": 5, "type": "visit", "source": { "line": 6 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E'], stack: [], highlights: { nodes: ['E'] } }, "explanation": "Pop E, mark as visited. E has no unvisited neighbors." },
  { "stepId": 6, "type": "sorted", "source": { "line": 21 }, "state": { graph: graphForTrace, visited: ['A', 'B', 'D', 'C', 'E'], stack: [] }, "explanation": "Stack is empty. DFS traversal is complete. Order: A, B, D, C, E." }
];


const treeForTrace: TreeNode[] = [
    { id: '10', value: 10, x: 150, y: 50, left: '5', right: '15' },
    { id: '5', value: 5, x: 75, y: 125, left: '3', right: '7' },
    { id: '15', value: 15, x: 225, y: 125, left: null, right: '18' },
    { id: '3', value: 3, x: 37.5, y: 200, left: null, right: null },
    { id: '7', value: 7, x: 112.5, y: 200, left: null, right: null },
    { id: '18', value: 18, x: 262.5, y: 200, left: null, right: null },
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { tree: treeForTrace, traversalOrder: [] }, "explanation": "Start In-order traversal from the root (10)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['10'] } }, "explanation": "Go left from 10." },
    { "stepId": 2, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['5'] } }, "explanation": "Go left from 5." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['3'] } }, "explanation": "Go left from 3. It's null." },
    { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['3'] } }, "explanation": "Visit 3. Add to traversal order." },
    { "stepId": 5, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['3'] } }, "explanation": "Go right from 3. It's null. Return to 5." },
    { "stepId": 6, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5'], visited: ['3', '5'], highlights: { nodes: ['5'] } }, "explanation": "Visit 5. Add to traversal order." },
    { "stepId": 7, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5'], visited: ['3', '5'], highlights: { nodes: ['5'] } }, "explanation": "Go right from 5." },
    { "stepId": 8, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5'], visited: ['3', '5'], highlights: { nodes: ['7'] } }, "explanation": "Go left from 7. It's null." },
    { "stepId": 9, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7'], visited: ['3', '5', '7'], highlights: { nodes: ['7'] } }, "explanation": "Visit 7. Add to traversal order." },
    { "stepId": 10, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7'], visited: ['3', '5', '7'], highlights: { nodes: ['7'] } }, "explanation": "Go right from 7. It's null. Return to 5, then to 10." },
    { "stepId": 11, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10'], visited: ['3', '5', '7', '10'], highlights: { nodes: ['10'] } }, "explanation": "Visit 10. Add to traversal order." },
    { "stepId": 12, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10'], visited: ['3', '5', '7', '10'], highlights: { nodes: ['10'] } }, "explanation": "Go right from 10." },
    { "stepId": 13, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10'], visited: ['3', '5', '7', '10'], highlights: { nodes: ['15'] } }, "explanation": "Go left from 15. It's null." },
    { "stepId": 14, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15'], visited: ['3', '5', '7', '10', '15'], highlights: { nodes: ['15'] } }, "explanation": "Visit 15. Add to traversal order." },
    { "stepId": 15, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15'], visited: ['3', '5', '7', '10', '15'], highlights: { nodes: ['15'] } }, "explanation": "Go right from 15." },
    { "stepId": 16, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15'], visited: ['3', '5', '7', '10', '15'], highlights: { nodes: ['18'] } }, "explanation": "Go left from 18. It's null." },
    { "stepId": 17, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15', '18'], visited: ['3', '5', '7', '10', '15', '18'], highlights: { nodes: ['18'] } }, "explanation": "Visit 18. Add to traversal order." },
    { "stepId": 18, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15', '18'], visited: ['3', '5', '7', '10', '15', '18'], highlights: { nodes: ['18'] } }, "explanation": "Go right from 18. It's null. Return." },
    { "stepId": 19, "type": "sorted", "source": { "line": 10 }, "state": { tree: treeForTrace, traversalOrder: ['3', '5', '7', '10', '15', '18'], visited: ['3', '5', '7', '10', '15', '18'] }, "explanation": "Traversal complete." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { tree: treeForTrace, traversalOrder: [] }, "explanation": "Start Pre-order traversal from the root (10)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10'], visited: ['10'], highlights: { nodes: ['10'] } }, "explanation": "Visit 10. Add to traversal order." },
    { "stepId": 2, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10'], visited: ['10'], highlights: { nodes: ['10'] } }, "explanation": "Go left from 10." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5'], visited: ['10', '5'], highlights: { nodes: ['5'] } }, "explanation": "Visit 5. Add to traversal order." },
    { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5'], visited: ['10', '5'], highlights: { nodes: ['5'] } }, "explanation": "Go left from 5." },
    { "stepId": 5, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3'], visited: ['10', '5', '3'], highlights: { nodes: ['3'] } }, "explanation": "Visit 3. Add to traversal order." },
    { "stepId": 6, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3'], visited: ['10', '5', '3'], highlights: { nodes: ['3'] } }, "explanation": "Go left from 3. It's null." },
    { "stepId": 7, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3'], visited: ['10', '5', '3'], highlights: { nodes: ['3'] } }, "explanation": "Go right from 3. It's null. Return to 5." },
    { "stepId": 8, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3'], visited: ['10', '5', '3'], highlights: { nodes: ['5'] } }, "explanation": "Go right from 5." },
    { "stepId": 9, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7'], visited: ['10', '5', '3', '7'], highlights: { nodes: ['7'] } }, "explanation": "Visit 7. Add to traversal order." },
    { "stepId": 10, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7'], visited: ['10', '5', '3', '7'], highlights: { nodes: ['7'] } }, "explanation": "Go left from 7. It's null." },
    { "stepId": 11, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7'], visited: ['10', '5', '3', '7'], highlights: { nodes: ['7'] } }, "explanation": "Go right from 7. It's null. Return to 5, then 10." },
    { "stepId": 12, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7'], visited: ['10', '5', '3', '7'], highlights: { nodes: ['10'] } }, "explanation": "Go right from 10." },
    { "stepId": 13, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15'], visited: ['10', '5', '3', '7', '15'], highlights: { nodes: ['15'] } }, "explanation": "Visit 15. Add to traversal order." },
    { "stepId": 14, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15'], visited: ['10', '5', '3', '7', '15'], highlights: { nodes: ['15'] } }, "explanation": "Go left from 15. It's null." },
    { "stepId": 15, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15'], visited: ['10', '5', '3', '7', '15'], highlights: { nodes: ['15'] } }, "explanation": "Go right from 15." },
    { "stepId": 16, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15', '18'], visited: ['10', '5', '3', '7', '15', '18'], highlights: { nodes: ['18'] } }, "explanation": "Visit 18. Add to traversal order." },
    { "stepId": 17, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15', '18'], visited: ['10', '5', '3', '7', '15', '18'], highlights: { nodes: ['18'] } }, "explanation": "Go left from 18. It's null." },
    { "stepId": 18, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15', '18'], visited: ['10', '5', '3', '7', '15', '18'], highlights: { nodes: ['18'] } }, "explanation": "Go right from 18. It's null. Return." },
    { "stepId": 19, "type": "sorted", "source": { "line": 10 }, "state": { tree: treeForTrace, traversalOrder: ['10', '5', '3', '7', '15', '18'], visited: ['10', '5', '3', '7', '15', '18'] }, "explanation": "Traversal complete." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { tree: treeForTrace, traversalOrder: [] }, "explanation": "Start Post-order traversal from the root (10)." },
    { "stepId": 1, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['10'] } }, "explanation": "Go left from 10." },
    { "stepId": 2, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['5'] } }, "explanation": "Go left from 5." },
    { "stepId": 3, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['3'] } }, "explanation": "Go left from 3. It's null." },
    { "stepId": 4, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: [], highlights: { nodes: ['3'] } }, "explanation": "Go right from 3. It's null." },
    { "stepId": 5, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['3'] } }, "explanation": "Visit 3. Add to traversal order. Return to 5." },
    { "stepId": 6, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['5'] } }, "explanation": "Go right from 5." },
    { "stepId": 7, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['7'] } }, "explanation": "Go left from 7. It's null." },
    { "stepId": 8, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3'], visited: ['3'], highlights: { nodes: ['7'] } }, "explanation": "Go right from 7. It's null." },
    { "stepId": 9, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7'], visited: ['3', '7'], highlights: { nodes: ['7'] } }, "explanation": "Visit 7. Add to traversal order. Return to 5." },
    { "stepId": 10, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['5'] } }, "explanation": "Visit 5. Add to traversal order. Return to 10." },
    { "stepId": 11, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['10'] } }, "explanation": "Go right from 10." },
    { "stepId": 12, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['15'] } }, "explanation": "Go left from 15. It's null." },
    { "stepId": 13, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['15'] } }, "explanation": "Go right from 15." },
    { "stepId": 14, "type": "visit", "source": { "line": 5 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['18'] } }, "explanation": "Go left from 18. It's null." },
    { "stepId": 15, "type": "visit", "source": { "line": 6 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5'], visited: ['3', '7', '5'], highlights: { nodes: ['18'] } }, "explanation": "Go right from 18. It's null." },
    { "stepId": 16, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5', '18'], visited: ['3', '7', '5', '18'], highlights: { nodes: ['18'] } }, "explanation": "Visit 18. Add to traversal order. Return to 15." },
    { "stepId": 17, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5', '18', '15'], visited: ['3', '7', '5', '18', '15'], highlights: { nodes: ['15'] } }, "explanation": "Visit 15. Add to traversal order. Return to 10." },
    { "stepId": 18, "type": "visit", "source": { "line": 7 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5', '18', '15', '10'], visited: ['3', '7', '5', '18', '15', '10'], highlights: { nodes: ['10'] } }, "explanation": "Visit 10. Add to traversal order." },
    { "stepId": 19, "type": "sorted", "source": { "line": 10 }, "state": { tree: treeForTrace, traversalOrder: ['3', '7', '5', '18', '15', '10'], visited: ['3', '7', '5', '18', '15', '10'] }, "explanation": "Traversal complete." }
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
  { id: 'graph', name: 'Graph' },
  { id: 'tree', name: 'Tree' },
];
