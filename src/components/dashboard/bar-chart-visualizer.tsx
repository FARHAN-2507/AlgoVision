import React from 'react';
import { VisualizerState } from '@/lib/types';
import { cn } from '@/lib/utils';

interface BarChartVisualizerProps {
  state: VisualizerState;
}

const BarChartVisualizer: React.FC<BarChartVisualizerProps> = ({ state }) => {
  const { array = [], comparisons = [], swaps = [], sortedIndices = [] } = state;
  const maxValue = Math.max(...array, 1);

  const getColor = (index: number) => {
    if (sortedIndices.includes(index)) {
      return 'bg-chart-2 text-primary-foreground'; // Found or sorted
    }
    if (swaps.includes(index)) {
      return 'bg-accent text-accent-foreground'; // Swapping
    }
    if (comparisons.includes(index)) {
      return 'bg-accent text-accent-foreground'; // Comparing
    }
    return 'bg-primary text-primary-foreground';
  };

  return (
    <div className="w-full h-full flex items-end justify-center gap-1 p-4 bg-muted/30 rounded-lg">
      {array.map((value, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 flex flex-col justify-end items-center rounded-t-md transition-all duration-300 ease-in-out",
            getColor(index)
          )}
          style={{ height: `${(value / maxValue) * 100}%` }}
        >
          {array.length < 20 && (
             <span className="text-xs font-bold transform -translate-y-5">{value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BarChartVisualizer;
