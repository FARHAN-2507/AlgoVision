export type AlgorithmCategory = 'sorting' | 'searching' | 'graph' | 'tree';

export type Algorithm = {
  id: string;
  name: string;
  description: string;
  category: AlgorithmCategory;
  code: {
    javascript: string;
    python: string;
  };
  trace: ExecutionStep[];
};

export interface VisualizerState {
  array?: number[];
  variables?: Record<string, any>;
  highlights?: {
    indices?: number[];
    color?: string;
  };
  comparisons?: [number, number];
  swaps?: [number, number];
  sortedIndices?: number[];
}

export type ExecutionStep = {
  stepId: number;
  type: 'initial' | 'compare' | 'swap' | 'highlight' | 'sorted' | 'variable' | 'target-found';
  source: {
    line: number;
  };
  state: VisualizerState;
  explanation: string;
};

export type Language = 'javascript' | 'python';
