import React from 'react';
import { VisualizerState, GraphNode } from '@/lib/types';
import { cn } from '@/lib/utils';

interface GraphVisualizerProps {
  state: VisualizerState;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ state }) => {
  const { graph, highlights, visited = [] } = state;

  if (!graph) {
    return <p>No graph data available.</p>;
  }

  const { nodes, edges } = graph;

  const getNodeColor = (nodeId: string) => {
    if (highlights?.nodes?.includes(nodeId)) {
      return 'bg-yellow-500 border-yellow-400';
    }
    if (visited.includes(nodeId)) {
      return 'bg-green-500 border-green-400';
    }
    return 'bg-primary border-primary/50';
  };

  const getEdgeColor = (edge: { from: string; to: string }) => {
    if (highlights?.edges?.some(e => (e.from === edge.from && e.to === edge.to) || (e.from === edge.to && e.to === edge.from))) {
        return 'stroke-yellow-400';
    }
    if (visited.includes(edge.from) && visited.includes(edge.to)) {
        return 'stroke-green-400';
    }
    return 'stroke-muted-foreground';
  }

  return (
    <div className="w-full h-full relative bg-muted/30 rounded-lg p-4">
      <svg className="w-full h-full" viewBox="0 0 300 300">
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
        {edges.map((edge, index) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={`${edge.from}-${edge.to}-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              className={cn("stroke-2 transition-all duration-300", getEdgeColor(edge))}
              markerEnd={graph.directed ? "url(#arrow)" : undefined}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map(node => (
        <div
          key={node.id}
          className={cn(
            "absolute w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-bold border-2 transition-all duration-300",
            getNodeColor(node.id)
          )}
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {node.label}
        </div>
      ))}

      {/* State Display */}
      <div className="absolute bottom-2 left-2 bg-background/80 p-2 rounded-md text-xs">
         <div className="font-bold mb-1">Queue:</div>
         <div>[{state.queue?.join(', ') || ''}]</div>
         <div className="font-bold mt-2 mb-1">Stack:</div>
         <div>[{state.stack?.join(', ') || ''}]</div>
         <div className="font-bold mt-2 mb-1">Visited:</div>
         <div>[{visited.join(', ') || ''}]</div>
      </div>
    </div>
  );
};

export default GraphVisualizer;
