import type { Algorithm, ExecutionStep } from './types';

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
  }
];

export const algorithmCategories = [
  { id: 'sorting', name: 'Sorting' },
  { id: 'searching', name: 'Searching' },
  { id: 'graph', name: 'Graph' },
  { id: 'tree', name: 'Tree' },
];
