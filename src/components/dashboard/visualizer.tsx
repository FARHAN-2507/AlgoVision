import React from 'react';
import { Algorithm, ExecutionStep } from '@/lib/types';
import BarChartVisualizer from './bar-chart-visualizer';
import GraphVisualizer from './graph-visualizer';
import TreeVisualizer from './tree-visualizer';
import { BarChart2 } from 'lucide-react';

interface VisualizerProps {
  algorithm: Algorithm | null;
  executionStep: ExecutionStep | null;
}

const Visualizer: React.FC<VisualizerProps> = ({ algorithm, executionStep }) => {
  if (!algorithm || !executionStep) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30 rounded-lg">
        <BarChart2 className="w-16 h-16 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Select an algorithm to begin visualization.</p>
      </div>
    );
  }

  const renderVisualizer = () => {
    switch (algorithm.category) {
      case 'sorting':
      case 'searching':
        return <BarChartVisualizer state={executionStep.state} />;
      case 'graph':
        return <GraphVisualizer state={executionStep.state} />;
      case 'tree':
        return <TreeVisualizer state={executionStep.state} />;
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">No visualizer available for this algorithm category yet.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full">
      {renderVisualizer()}
    </div>
  );
};

export default Visualizer;
