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

export interface GraphNode {
  id: string;
  label: string;
  x?: number;
  y?: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export interface VisualizerState {
  array?: number[];
  variables?: Record<string, any>;
  highlights?: {
    indices?: number[];
    nodes?: string[];
    edges?: { from: string; to: string }[];
    color?: string;
  };
  comparisons?: [number, number];
  swaps?: [number, number];
  sortedIndices?: number[];
  graph?: {
    nodes: GraphNode[];
    edges: GraphEdge[];
    directed?: boolean;
  };
  visited?: string[];
  queue?: string[];
  stack?: string[];
}


export type ExecutionStep = {
  stepId: number;
  type: 'initial' | 'compare' | 'swap' | 'highlight' | 'sorted' | 'variable' | 'target-found' | 'visit';
  source: {
    line: number;
  };
  state: VisualizerState;
  explanation: string;
};

export type Language = 'javascript' | 'python';
