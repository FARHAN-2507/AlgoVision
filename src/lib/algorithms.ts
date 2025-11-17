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
  }
];

export const algorithmCategories = [
  { id: 'sorting', name: 'Sorting' },
  { id: 'searching', name: 'Searching' },
  { id: 'graph', name: 'Graph' },
  { id: 'tree', name: 'Tree' },
];
