export type AlgorithmCategory = 'sorting' | 'searching' | 'graph' | 'tree' | 'shortest-path' | 'mst';

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
  weight?: number;
}

export interface TreeNode {
    id: string;
    value: number;
    x: number;
    y: number;
    left: string | null;
    right: string | null;
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
  tree?: TreeNode[];
  visited?: string[];
  queue?: string[];
  stack?: string[];
  traversalOrder?: string[];
  costs?: Record<string, number>;
  parents?: Record<string, string | null>;
}


export type ExecutionStep = {
  stepId: number;
  type: 'initial' | 'compare' | 'swap' | 'highlight' | 'sorted' | 'variable' | 'target-found' | 'visit' | 'update-cost';
  source: {
    line: number;
  };
  state: VisualizerState;
  explanation: string;
};

export type Language = 'javascript' | 'python';
