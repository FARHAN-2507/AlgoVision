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
  { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [64, 34, 25, 12, 22] }, "explanation": "Initial array state." },
  { "stepId": 1, "type": "compare", "source": { "line": 5 }, "state": { "array": [64, 34, 25, 12, 22], "comparisons": [0, 1] }, "explanation": "Comparing elements at index 0 (64) and 1 (34)." },
  { "stepId": 2, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 64, 25, 12, 22], "swaps": [0, 1] }, "explanation": "64 > 34, so we swap them." },
  { "stepId": 3, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 64, 25, 12, 22], "comparisons": [1, 2] }, "explanation": "Comparing elements at index 1 (64) and 2 (25)." },
  { "stepId": 4, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 25, 64, 12, 22], "swaps": [1, 2] }, "explanation": "64 > 25, so we swap them." },
  { "stepId": 5, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 25, 64, 12, 22], "comparisons": [2, 3] }, "explanation": "Comparing elements at index 2 (64) and 3 (12)." },
  { "stepId": 6, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 25, 12, 64, 22], "swaps": [2, 3] }, "explanation": "64 > 12, so we swap them." },
  { "stepId": 7, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 25, 12, 64, 22], "comparisons": [3, 4] }, "explanation": "Comparing elements at index 3 (64) and 4 (22)." },
  { "stepId": 8, "type": "swap", "source": { "line": 6 }, "state": { "array": [34, 25, 12, 22, 64], "swaps": [3, 4] }, "explanation": "64 > 22, so we swap them." },
  { "stepId": 9, "type": "sorted", "source": { "line": 8 }, "state": { "array": [34, 25, 12, 22, 64], "sortedIndices": [4] }, "explanation": "End of first pass. The largest element (64) is now in its correct sorted position." },
  { "stepId": 10, "type": "compare", "source": { "line": 5 }, "state": { "array": [34, 25, 12, 22, 64], "comparisons": [0, 1], "sortedIndices": [4] }, "explanation": "Comparing 34 and 25." },
  { "stepId": 11, "type": "swap", "source": { "line": 6 }, "state": { "array": [25, 34, 12, 22, 64], "swaps": [0, 1], "sortedIndices": [4] }, "explanation": "Swap 34 and 25." },
  { "stepId": 12, "type": "compare", "source": { "line": 5 }, "state": { "array": [25, 34, 12, 22, 64], "comparisons": [1, 2], "sortedIndices": [4] }, "explanation": "Comparing 34 and 12." },
  { "stepId": 13, "type": "swap", "source": { "line": 6 }, "state": { "array": [25, 12, 34, 22, 64], "swaps": [1, 2], "sortedIndices": [4] }, "explanation": "Swap 34 and 12." },
  { "stepId": 14, "type": "compare", "source": { "line": 5 }, "state": { "array": [25, 12, 34, 22, 64], "comparisons": [2, 3], "sortedIndices": [4] }, "explanation": "Comparing 34 and 22." },
  { "stepId": 15, "type": "swap", "source": { "line": 6 }, "state": { "array": [25, 12, 22, 34, 64], "swaps": [2, 3], "sortedIndices": [4] }, "explanation": "Swap 34 and 22." },
  { "stepId": 16, "type": "sorted", "source": { "line": 8 }, "state": { "array": [25, 12, 22, 34, 64], "sortedIndices": [3, 4] }, "explanation": "End of second pass. 34 is now sorted." },
  { "stepId": 17, "type": "compare", "source": { "line": 5 }, "state": { "array": [25, 12, 22, 34, 64], "comparisons": [0, 1], "sortedIndices": [3, 4] }, "explanation": "Comparing 25 and 12." },
  { "stepId": 18, "type": "swap", "source": { "line": 6 }, "state": { "array": [12, 25, 22, 34, 64], "swaps": [0, 1], "sortedIndices": [3, 4] }, "explanation": "Swap 25 and 12." },
  { "stepId": 19, "type": "compare", "source": { "line": 5 }, "state": { "array": [12, 25, 22, 34, 64], "comparisons": [1, 2], "sortedIndices": [3, 4] }, "explanation": "Comparing 25 and 22." },
  { "stepId": 20, "type": "swap", "source": { "line": 6 }, "state": { "array": [12, 22, 25, 34, 64], "swaps": [1, 2], "sortedIndices": [3, 4] }, "explanation": "Swap 25 and 22." },
  { "stepId": 21, "type": "sorted", "source": { "line": 8 }, "state": { "array": [12, 22, 25, 34, 64], "sortedIndices": [2, 3, 4] }, "explanation": "End of third pass. 25 is now sorted." },
  { "stepId": 22, "type": "compare", "source": { "line": 5 }, "state": { "array": [12, 22, 25, 34, 64], "comparisons": [0, 1], "sortedIndices": [2, 3, 4] }, "explanation": "Comparing 12 and 22. No swap." },
  { "stepId": 23, "type": "sorted", "source": { "line": 8 }, "state": { "array": [12, 22, 25, 34, 64], "sortedIndices": [1, 2, 3, 4] }, "explanation": "End of fourth pass. 22 is now sorted." },
  { "stepId": 24, "type": "sorted", "source": { "line": 10 }, "state": { "array": [12, 22, 25, 34, 64], "sortedIndices": [0, 1, 2, 3, 4] }, "explanation": "Algorithm finished. The array is fully sorted." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [29, 10, 14, 37, 13] }, "explanation": "Initial array. We'll find the minimum element and move it to the start." },
    { "stepId": 1, "type": "highlight", "source": { "line": 4 }, "state": { "array": [29, 10, 14, 37, 13], "highlights": { "indices": [0] } }, "explanation": "Assume first element (29) is the minimum." },
    { "stepId": 2, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13], "comparisons": [1, 0] }, "explanation": "Comparing 10 with current minimum (29). 10 is smaller." },
    { "stepId": 3, "type": "highlight", "source": { "line": 7 }, "state": { "array": [29, 10, 14, 37, 13], "highlights": { "indices": [1] } }, "explanation": "New minimum is 10 at index 1." },
    { "stepId": 4, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13], "comparisons": [2, 1] }, "explanation": "Comparing 14 with current minimum (10). No change." },
    { "stepId": 5, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13], "comparisons": [3, 1] }, "explanation": "Comparing 37 with current minimum (10). No change." },
    { "stepId": 6, "type": "compare", "source": { "line": 6 }, "state": { "array": [29, 10, 14, 37, 13], "comparisons": [4, 1] }, "explanation": "Comparing 13 with current minimum (10). No change." },
    { "stepId": 7, "type": "swap", "source": { "line": 10 }, "state": { "array": [10, 29, 14, 37, 13], "swaps": [0, 1] }, "explanation": "Swap the found minimum element (10) with the first element (29)." },
    { "stepId": 8, "type": "sorted", "source": { "line": 11 }, "state": { "array": [10, 29, 14, 37, 13], "sortedIndices": [0] }, "explanation": "The first element is now sorted." },
    { "stepId": 9, "type": "highlight", "source": { "line": 4 }, "state": { "array": [10, 29, 14, 37, 13], "highlights": { "indices": [1] }, "sortedIndices": [0] }, "explanation": "Assume second element (29) is the minimum of the unsorted part." },
    { "stepId": 10, "type": "compare", "source": { "line": 6 }, "state": { "array": [10, 29, 14, 37, 13], "comparisons": [2, 1], "sortedIndices": [0] }, "explanation": "Comparing 14 with 29. 14 is smaller." },
    { "stepId": 11, "type": "highlight", "source": { "line": 7 }, "state": { "array": [10, 29, 14, 37, 13], "highlights": { "indices": [2] }, "sortedIndices": [0] }, "explanation": "New minimum is 14 at index 2." },
    { "stepId": 12, "type": "compare", "source": { "line": 6 }, "state": { "array": [10, 29, 14, 37, 13], "comparisons": [3, 2], "sortedIndices": [0] }, "explanation": "Comparing 37 with 14. No change." },
    { "stepId": 13, "type": "compare", "source": { "line": 6 }, "state": { "array": [10, 29, 14, 37, 13], "comparisons": [4, 2], "sortedIndices": [0] }, "explanation": "Comparing 13 with 14. 13 is smaller." },
    { "stepId": 14, "type": "highlight", "source": { "line": 7 }, "state": { "array": [10, 29, 14, 37, 13], "highlights": { "indices": [4] }, "sortedIndices": [0] }, "explanation": "New minimum is 13 at index 4." },
    { "stepId": 15, "type": "swap", "source": { "line": 10 }, "state": { "array": [10, 13, 14, 37, 29], "swaps": [1, 4] }, "explanation": "Swap the found minimum (13) with the second element (29)." },
    { "stepId": 16, "type": "sorted", "source": { "line": 11 }, "state": { "array": [10, 13, 14, 37, 29], "sortedIndices": [0, 1] }, "explanation": "The second element is now sorted." },
    { "stepId": 17, "type": "sorted", "source": { "line": 13 }, "state": { "array": [10, 13, 14, 29, 37], "sortedIndices": [0, 1, 2, 3, 4] }, "explanation": "After subsequent passes, the entire array is sorted." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [12, 11, 13, 5, 6] }, "explanation": "Initial array. The first element is considered sorted." },
    { "stepId": 1, "type": "highlight", "source": { "line": 3 }, "state": { "array": [12, 11, 13, 5, 6], "highlights": { "indices": [1] }, "sortedIndices": [0] }, "explanation": "Select element 11 to insert into the sorted portion." },
    { "stepId": 2, "type": "compare", "source": { "line": 5 }, "state": { "array": [12, 11, 13, 5, 6], "comparisons": [0, 1], "sortedIndices": [0] }, "explanation": "Compare 11 with 12. 11 is smaller." },
    { "stepId": 3, "type": "swap", "source": { "line": 6 }, "state": { "array": [12, 12, 13, 5, 6], "swaps": [0, 1] }, "explanation": "Shift 12 to the right." },
    { "stepId": 4, "type": "swap", "source": { "line": 9 }, "state": { "array": [11, 12, 13, 5, 6], "swaps": [0, 0] }, "explanation": "Insert 11 at the correct position." },
    { "stepId": 5, "type": "sorted", "source": { "line": 10 }, "state": { "array": [11, 12, 13, 5, 6], "sortedIndices": [0, 1] }, "explanation": "Now, [11, 12] is the sorted portion." },
    { "stepId": 6, "type": "highlight", "source": { "line": 3 }, "state": { "array": [11, 12, 13, 5, 6], "highlights": { "indices": [2] }, "sortedIndices": [0, 1] }, "explanation": "Select element 13. It's already in the correct place relative to the sorted portion." },
    { "stepId": 7, "type": "sorted", "source": { "line": 10 }, "state": { "array": [11, 12, 13, 5, 6], "sortedIndices": [0, 1, 2] }, "explanation": "Now, [11, 12, 13] is sorted." },
    { "stepId": 8, "type": "highlight", "source": { "line": 3 }, "state": { "array": [11, 12, 13, 5, 6], "highlights": { "indices": [3] }, "sortedIndices": [0, 1, 2] }, "explanation": "Select element 5 to insert." },
    { "stepId": 9, "type": "compare", "source": { "line": 5 }, "state": { "array": [11, 12, 13, 5, 6], "comparisons": [2, 3] }, "explanation": "Compare 5 with 13." },
    { "stepId": 10, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 12, 13, 13, 6], "swaps": [2, 3] }, "explanation": "Shift 13 right." },
    { "stepId": 11, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 12, 12, 13, 6], "swaps": [1, 2] }, "explanation": "Shift 12 right." },
    { "stepId": 12, "type": "swap", "source": { "line": 6 }, "state": { "array": [11, 11, 12, 13, 6], "swaps": [0, 1] }, "explanation": "Shift 11 right." },
    { "stepId": 13, "type": "swap", "source": { "line": 9 }, "state": { "array": [5, 11, 12, 13, 6], "swaps": [0, 0] }, "explanation": "Insert 5 at the beginning." },
    { "stepId": 14, "type": "sorted", "source": { "line": 11 }, "state": { "array": [5, 6, 11, 12, 13], "sortedIndices": [0, 1, 2, 3, 4] }, "explanation": "After the final pass, the array is fully sorted." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [10, 80, 30, 90, 40] }, "explanation": "Initial array. Start Quick Sort on the full array." },
    { "stepId": 1, "type": "highlight", "source": { "line": 10 }, "state": { "array": [10, 80, 30, 90, 40], "highlights": { "indices": [4], "color": "purple" } }, "explanation": "Select the last element (40) as the pivot." },
    { "stepId": 2, "type": "compare", "source": { "line": 12 }, "state": { "array": [10, 80, 30, 90, 40], "comparisons": [0, 4] }, "explanation": "Compare 10 with pivot 40. 10 is smaller." },
    { "stepId": 3, "type": "swap", "source": { "line": 14 }, "state": { "array": [10, 80, 30, 90, 40], "swaps": [0, 0] }, "explanation": "Swap element at i=0 with j=0. (No change)" },
    { "stepId": 4, "type": "compare", "source": { "line": 12 }, "state": { "array": [10, 80, 30, 90, 40], "comparisons": [1, 4] }, "explanation": "Compare 80 with pivot 40. 80 is not smaller." },
    { "stepId": 5, "type": "compare", "source": { "line": 12 }, "state": { "array": [10, 80, 30, 90, 40], "comparisons": [2, 4] }, "explanation": "Compare 30 with pivot 40. 30 is smaller." },
    { "stepId": 6, "type": "swap", "source": { "line": 14 }, "state": { "array": [10, 30, 80, 90, 40], "swaps": [1, 2] }, "explanation": "Swap 80 and 30." },
    { "stepId": 7, "type": "compare", "source": { "line": 12 }, "state": { "array": [10, 30, 80, 90, 40], "comparisons": [3, 4] }, "explanation": "Compare 90 with pivot 40. 90 is not smaller." },
    { "stepId": 8, "type": "swap", "source": { "line": 17 }, "state": { "array": [10, 30, 40, 90, 80], "swaps": [2, 4] }, "explanation": "Partitioning complete. Swap pivot (40) into its correct sorted position." },
    { "stepId": 9, "type": "sorted", "source": { "line": 18 }, "state": { "array": [10, 30, 40, 90, 80], "sortedIndices": [2] }, "explanation": "Element 40 is now sorted. Recursively sort the left and right sub-arrays." },
    { "stepId": 10, "type": "highlight", "source": { "line": 4 }, "state": { "array": [10, 30, 40, 90, 80], "highlights": { "indices": [0, 1] }, "sortedIndices": [2] }, "explanation": "Recursively call Quick Sort on the left sub-array [10, 30]." },
    { "stepId": 11, "type": "sorted", "source": { "line": 7 }, "state": { "array": [10, 30, 40, 90, 80], "sortedIndices": [0, 1, 2] }, "explanation": "The left sub-array is sorted." },
    { "stepId": 12, "type": "highlight", "source": { "line": 5 }, "state": { "array": [10, 30, 40, 90, 80], "highlights": { "indices": [3, 4] }, "sortedIndices": [0, 1, 2] }, "explanation": "Recursively call Quick Sort on the right sub-array [90, 80]." },
    { "stepId": 13, "type": "swap", "source": { "line": 14 }, "state": { "array": [10, 30, 40, 80, 90], "swaps": [3, 4], "sortedIndices": [0, 1, 2] }, "explanation": "Partition [90, 80] and swap." },
    { "stepId": 14, "type": "sorted", "source": { "line": 7 }, "state": { "array": [10, 30, 40, 80, 90], "sortedIndices": [0, 1, 2, 3, 4] }, "explanation": "The right sub-array is sorted. The entire array is now sorted." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [38, 27, 43, 3] }, "explanation": "Initial array. Begin Merge Sort." },
    { "stepId": 1, "type": "highlight", "source": { "line": 4 }, "state": { "array": [38, 27, 43, 3], "highlights": { "indices": [0, 1] } }, "explanation": "Divide the array. Process left half [38, 27]." },
    { "stepId": 2, "type": "highlight", "source": { "line": 4 }, "state": { "array": [38, 27], "highlights": { "indices": [0] } }, "explanation": "Divide again. Process left half [38]." },
    { "stepId": 3, "type": "highlight", "source": { "line": 5 }, "state": { "array": [38, 27], "highlights": { "indices": [1] } }, "explanation": "Process right half [27]." },
    { "stepId": 4, "type": "compare", "source": { "line": 12 }, "state": { "array": [38, 27], "comparisons": [0, 1] }, "explanation": "Merge [38] and [27]. Compare 38 and 27." },
    { "stepId": 5, "type": "swap", "source": { "line": 16 }, "state": { "array": [27, 38], "swaps": [0, 1] }, "explanation": "27 is smaller, it comes first in the merged array." },
    { "stepId": 6, "type": "highlight", "source": { "line": 5 }, "state": { "array": [38, 27, 43, 3], "highlights": { "indices": [2, 3] } }, "explanation": "Return to the first level. Process right half [43, 3]." },
    { "stepId": 7, "type": "compare", "source": { "line": 12 }, "state": { "array": [43, 3], "comparisons": [0, 1] }, "explanation": "Merge [43] and [3]. Compare 43 and 3." },
    { "stepId": 8, "type": "swap", "source": { "line": 16 }, "state": { "array": [3, 43], "swaps": [0, 1] }, "explanation": "3 is smaller, it comes first in the merged array." },
    { "stepId": 9, "type": "compare", "source": { "line": 12 }, "state": { "array": [27, 38, 3, 43], "comparisons": [0, 2] }, "explanation": "Merge the two sorted halves: [27, 38] and [3, 43]. Compare 27 and 3." },
    { "stepId": 10, "type": "variable", "source": { "line": 16 }, "state": { "array": [3, 27, 38, 43], "variables": { "merged": "[3]" } }, "explanation": "3 is smaller. Add 3 to the result." },
    { "stepId": 11, "type": "compare", "source": { "line": 12 }, "state": { "array": [3, 27, 38, 43], "comparisons": [0, 3] }, "explanation": "Compare 27 and 43." },
    { "stepId": 12, "type": "variable", "source": { "line": 13 }, "state": { "array": [3, 27, 38, 43], "variables": { "merged": "[3, 27]" } }, "explanation": "27 is smaller. Add 27 to the result." },
    { "stepId": 13, "type": "variable", "source": { "line": 20 }, "state": { "array": [3, 27, 38, 43], "variables": { "merged": "[3, 27, 38]" } }, "explanation": "Add remaining element from left half: 38." },
    { "stepId": 14, "type": "variable", "source": { "line": 21 }, "state": { "array": [3, 27, 38, 43], "variables": { "merged": "[3, 27, 38, 43]" } }, "explanation": "Add remaining element from right half: 43." },
    { "stepId": 15, "type": "sorted", "source": { "line": 22 }, "state": { "array": [3, 27, 38, 43], "sortedIndices": [0, 1, 2, 3] }, "explanation": "The final merged array is sorted." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [2, 8, 5, 3, 9, 4], "variables": { "target": 9 } }, "explanation": "Initial array and target value. Start searching from the beginning." },
    { "stepId": 1, "type": "compare", "source": { "line": 3 }, "state": { "array": [2, 8, 5, 3, 9, 4], "comparisons": [0, -1], "variables": { "target": 9 } }, "explanation": "Check index 0: 2 is not 9." },
    { "stepId": 2, "type": "compare", "source": { "line": 3 }, "state": { "array": [2, 8, 5, 3, 9, 4], "comparisons": [1, -1], "variables": { "target": 9 } }, "explanation": "Check index 1: 8 is not 9." },
    { "stepId": 3, "type": "compare", "source": { "line": 3 }, "state": { "array": [2, 8, 5, 3, 9, 4], "comparisons": [2, -1], "variables": { "target": 9 } }, "explanation": "Check index 2: 5 is not 9." },
    { "stepId": 4, "type": "compare", "source": { "line": 3 }, "state": { "array": [2, 8, 5, 3, 9, 4], "comparisons": [3, -1], "variables": { "target": 9 } }, "explanation": "Check index 3: 3 is not 9." },
    { "stepId": 5, "type": "compare", "source": { "line": 3 }, "state": { "array": [2, 8, 5, 3, 9, 4], "comparisons": [4, -1], "variables": { "target": 9 } }, "explanation": "Check index 4: 9 is equal to 9." },
    { "stepId": 6, "type": "target-found", "source": { "line": 4 }, "state": { "array": [2, 8, 5, 3, 9, 4], "sortedIndices": [4], "variables": { "target": 9 } }, "explanation": "Target found at index 4. Algorithm terminates." }
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
    { "stepId": 0, "type": "initial", "source": { "line": 1 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "variables": { "target": 23, "left": 0, "right": 9 } }, "explanation": "Initial sorted array and target. Set left and right pointers." },
    { "stepId": 1, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "highlights": { "indices": [4] }, "variables": { "target": 23, "left": 0, "right": 9, "mid": 4 } }, "explanation": "Calculate middle index: mid = 4. Element is 16." },
    { "stepId": 2, "type": "compare", "source": { "line": 6 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "comparisons": [4, -1], "variables": { "target": 23, "left": 0, "right": 9, "mid": 4 } }, "explanation": "Compare middle element (16) with target (23)." },
    { "stepId": 3, "type": "variable", "source": { "line": 9 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "variables": { "target": 23, "left": 5, "right": 9, "mid": 4 } }, "explanation": "16 < 23. Target is in the right half. Update left pointer to mid + 1." },
    { "stepId": 4, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "highlights": { "indices": [7] }, "variables": { "target": 23, "left": 5, "right": 9, "mid": 7 } }, "explanation": "Recalculate middle index: mid = 7. Element is 56." },
    { "stepId": 5, "type": "compare", "source": { "line": 6 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "comparisons": [7, -1], "variables": { "target": 23, "left": 5, "right": 9, "mid": 7 } }, "explanation": "Compare middle element (56) with target (23)." },
    { "stepId": 6, "type": "variable", "source": { "line": 11 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "variables": { "target": 23, "left": 5, "right": 6, "mid": 7 } }, "explanation": "56 > 23. Target is in the left half. Update right pointer to mid - 1." },
    { "stepId": 7, "type": "highlight", "source": { "line": 5 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "highlights": { "indices": [5] }, "variables": { "target": 23, "left": 5, "right": 6, "mid": 5 } }, "explanation": "Recalculate middle index: mid = 5. Element is 23." },
    { "stepId": 8, "type": "compare", "source": { "line": 6 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "comparisons": [5, -1], "variables": { "target": 23, "left": 5, "right": 6, "mid": 5 } }, "explanation": "Compare middle element (23) with target (23)." },
    { "stepId": 9, "type": "target-found", "source": { "line": 7 }, "state": { "array": [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], "sortedIndices": [5], "variables": { "target": 23, "left": 5, "right": 6, "mid": 5 } }, "explanation": "Target found at index 5. Algorithm terminates." }
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
