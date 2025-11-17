import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw, StepBack, StepForward } from "lucide-react";
import { ExecutionStep } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Info } from 'lucide-react';

interface ControlsPanelProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  currentStep: number;
  totalSteps: number;
  executionStep: ExecutionStep | null;
  isDynamic?: boolean;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  isPlaying,
  onPlayPause,
  onReset,
  onStepForward,
  onStepBackward,
  speed,
  onSpeedChange,
  currentStep,
  totalSteps,
  executionStep,
  isDynamic
}) => {
  const canStepForward = !isDynamic && currentStep < totalSteps - 1;
  const canStepBackward = !isDynamic && currentStep > 0;

  return (
    <div className="flex flex-col gap-4 h-full">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg">Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center gap-2">
            <Button variant="outline" size="icon" onClick={onReset} aria-label="Reset">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={onStepBackward} disabled={!canStepBackward} aria-label="Step Backward">
                <StepBack className="w-4 h-4" />
                </Button>
                <Button variant="default" size="icon" onClick={onPlayPause} className="w-12 h-12" aria-label={isPlaying ? 'Pause' : 'Play'} disabled={isDynamic}>
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button variant="outline" size="icon" onClick={onStepForward} disabled={!canStepForward} aria-label="Step Forward">
                <StepForward className="w-4 h-4" />
                </Button>
            </div>
            <div className="w-8" />
          </div>
          <div className="space-y-2">
            <label htmlFor="speed" className="text-sm font-medium">Speed</label>
            <Slider
              id="speed"
              min={1}
              max={100}
              step={1}
              value={[speed]}
              onValueChange={(value) => onSpeedChange(value[0])}
              disabled={isDynamic}
            />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Step: {isDynamic ? '1 / 1' : `${currentStep + 1} / ${totalSteps}`}
          </div>
        </CardContent>
      </Card>
      
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Execution Details</CardTitle>
        </CardHeader>
        <CardContent>
          {isDynamic ? (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Dynamic Input</AlertTitle>
              <AlertDescription>
                Live execution for dynamic arrays is coming soon! For now, you can see the initial state and edit the code.
              </AlertDescription>
            </Alert>
          ) : executionStep ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm">Current Action</h4>
                <p className="text-sm text-muted-foreground capitalize">{executionStep.type}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Explanation</h4>
                <p className="text-sm text-muted-foreground">{executionStep.explanation}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No execution details available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlsPanel;
