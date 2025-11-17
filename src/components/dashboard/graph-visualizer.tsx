import React from 'react';
import { VisualizerState, GraphNode, GraphEdge } from '@/lib/types';
import { cn } from '@/lib/utils';

interface GraphVisualizerProps {
  state: VisualizerState;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ state }) => {
  const { graph, highlights, visited = [], costs, parents } = state;

  if (!graph) {
    return <p>No graph data available.</p>;
  }

  const { nodes, edges } = graph;
  const nodeMap = new Map<string, GraphNode>(nodes.map(n => [n.id, n]));

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
  
  const getEdgeHighlight = (edge: GraphEdge) => {
      return highlights?.edges?.some(
        (e) => (e.from === edge.from && e.to === edge.to) || (e.from === edge.to && e.to === edge.from)
      );
  }

  const getEdgeColor = (edge: GraphEdge) => {
    if (getEdgeHighlight(edge)) {
      return 'hsl(var(--accent))';
    }
    
    // For traversal algorithms
    const fromIndex = visited.indexOf(edge.from);
    const toIndex = visited.indexOf(edge.to);
    
    if (fromIndex > -1 && toIndex > -1) {
        if (Math.abs(fromIndex - toIndex) === 1 || (highlights?.nodes?.includes(edge.from) && visited.includes(edge.to)) || (highlights?.nodes?.includes(edge.to) && visited.includes(edge.from)) ) {
            return 'hsl(var(--primary))';
        }
    }
    
    return 'hsl(var(--muted-foreground))';
  };

  return (
    <div className="w-full h-full relative bg-muted/30 rounded-lg p-4">
      <svg className="w-full h-full" viewBox="0 0 400 300">
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Edges */}
        <g>
          {edges.map((edge, index) => {
            const fromNode = nodeMap.get(edge.from);
            const toNode = nodeMap.get(edge.to);
            if (!fromNode || !toNode) return null;

            const edgeColor = getEdgeColor(edge);
            const isHighlighted = getEdgeHighlight(edge);

            return (
              <g key={`${edge.from}-${edge.to}-${index}`}>
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={edgeColor}
                  strokeWidth={isHighlighted ? "3" : "2"}
                  className="transition-all duration-300"
                  markerEnd={graph.directed ? "url(#arrow)" : undefined}
                />
                {edge.weight && (
                    <text
                        x={(fromNode.x! + toNode.x!) / 2}
                        y={(fromNode.y! + toNode.y!) / 2 - 5}
                        textAnchor="middle"
                        fill="hsl(var(--foreground))"
                        className="text-xs font-bold"
                    >
                        {edge.weight}
                    </text>
                )}
              </g>
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node) => {
            const colors = getNodeColor(node.id);
            const cost = costs ? costs[node.id] : null;
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
                  {node.label}
                </text>
                {cost !== null && cost !== undefined && (
                     <text
                        textAnchor="middle"
                        dy="-1.8em"
                        fill="hsl(var(--foreground))"
                        className="text-xs font-bold"
                    >
                       {cost === Infinity ? '∞' : cost}
                    </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* State Display */}
      <div className="absolute bottom-2 left-2 bg-background/80 p-2 rounded-md text-xs w-full max-w-[calc(100%-1rem)]">
         {state.queue && <div><div className="font-bold mb-1">Queue:</div> <div className="truncate">[{state.queue?.join(', ') || ''}]</div></div>}
         {state.stack && <div><div className="font-bold mt-2 mb-1">Stack:</div><div className="truncate">[{state.stack?.join(', ') || ''}]</div></div>}
         {visited.length > 0 && <div><div className="font-bold mt-2 mb-1">Visited:</div><div className="truncate">[{visited.join(', ') || ''}]</div></div>}
      </div>
    </div>
  );
};

export default GraphVisualizer;
