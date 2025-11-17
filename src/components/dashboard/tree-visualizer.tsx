import React from 'react';
import { VisualizerState, TreeNode } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TreeVisualizerProps {
  state: VisualizerState;
}

const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ state }) => {
  const { tree, highlights, visited = [], traversalOrder = [] } = state;

  if (!tree) {
    return <p>No tree data available.</p>;
  }

  const nodeMap = new Map<string, TreeNode>(tree.map(n => [n.id, n]));

  const getNodeColor = (nodeId: string) => {
    if (highlights?.nodes?.includes(nodeId)) {
      return {
        fill: 'hsl(var(--accent))',
        stroke: 'hsl(var(--accent-foreground))',
        text: 'hsl(var(--accent-foreground))',
      };
    }
    if (visited.includes(nodeId)) {
      return {
        fill: 'hsl(var(--primary))',
        stroke: 'hsl(var(--primary-foreground))',
        text: 'hsl(var(--primary-foreground))',
      };
    }
    return {
      fill: 'hsl(var(--muted))',
      stroke: 'hsl(var(--muted-foreground))',
      text: 'hsl(var(--muted-foreground))',
    };
  };

  return (
    <div className="w-full h-full relative bg-muted/30 rounded-lg p-4 flex flex-col">
      <div className="flex-grow">
        <svg className="w-full h-full" viewBox="0 0 300 300">
          {/* Edges */}
          <g>
            {tree.map((node) => {
              const fromNode = node;
              const toLeftNode = node.left ? nodeMap.get(node.left) : null;
              const toRightNode = node.right ? nodeMap.get(node.right) : null;

              return (
                <React.Fragment key={`edges-${node.id}`}>
                  {toLeftNode && (
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toLeftNode.x}
                      y2={toLeftNode.y}
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth="2"
                    />
                  )}
                  {toRightNode && (
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toRightNode.x}
                      y2={toRightNode.y}
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth="2"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </g>

          {/* Nodes */}
          <g>
            {tree.map((node) => {
              const colors = getNodeColor(node.id);
              return (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                  <circle
                    r="18"
                    fill={colors.fill}
                    stroke={colors.stroke}
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    textAnchor="middle"
                    dy="0.3em"
                    fill={colors.text}
                    className="font-bold text-sm select-none"
                  >
                    {node.value}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

       {/* State Display */}
       <div className="absolute bottom-2 left-2 bg-background/80 p-2 rounded-md text-xs w-full max-w-[calc(100%-1rem)]">
         <div className="font-bold mb-1">Traversal Order:</div>
         <div className="truncate">[{traversalOrder.join(', ')}]</div>
      </div>
    </div>
  );
};

export default TreeVisualizer;
