
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Save } from "lucide-react";
import { algorithmCategories, algorithms } from '@/lib/algorithms';
import type { Algorithm, ExecutionStep, Language } from '@/lib/types';
import CodeEditor from './code-editor';
import Visualizer from './visualizer';
import ControlsPanel from './controls-panel';
import { useToast } from '@/hooks/use-toast';
import { Label } from '../ui/label';

const generateLinearSearchTrace = (array: number[], target: number): ExecutionStep[] => {
  const trace: ExecutionStep[] = [];
  trace.push({
    stepId: 0,
    type: 'initial',
    source: { line: 1 },
    state: { array, variables: { target } },
    explanation: `Initial array and target value. Start searching for ${target}.`,
  });

  for (let i = 0; i < array.length; i++) {
    trace.push({
      stepId: trace.length,
      type: 'compare',
      source: { line: 3 },
      state: { array, comparisons: [i, -1], variables: { target } },
      explanation: `Check index ${i}: is ${array[i]} equal to ${target}?`,
    });
    if (array[i] === target) {
      trace.push({
        stepId: trace.length,
        type: 'target-found',
        source: { line: 4 },
        state: { array, sortedIndices: [i], variables: { target } },
        explanation: `Target ${target} found at index ${i}.`,
      });
      return trace;
    }
  }

  trace.push({
    stepId: trace.length,
    type: 'sorted', // Using 'sorted' type for not found message
    source: { line: 7 },
    state: { array, variables: { target } },
    explanation: `Target ${target} not found in the array.`,
  });
  return trace;
};

const generateBinarySearchTrace = (array: number[], target: number): ExecutionStep[] => {
  const trace: ExecutionStep[] = [];
  let left = 0;
  let right = array.length - 1;

  trace.push({
    stepId: 0,
    type: 'initial',
    source: { line: 1 },
    state: { array, variables: { target, left, right } },
    explanation: `Initial sorted array and target. Searching for ${target}.`,
  });

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    trace.push({
      stepId: trace.length,
      type: 'highlight',
      source: { line: 5 },
      state: { array, highlights: { indices: [mid] }, variables: { target, left, right, mid } },
      explanation: `Calculate middle index: mid = ${mid}. Element is ${array[mid]}.`,
    });

    trace.push({
      stepId: trace.length,
      type: 'compare',
      source: { line: 6 },
      state: { array, comparisons: [mid, -1], highlights: { indices: [mid] }, variables: { target, left, right, mid } },
      explanation: `Compare middle element (${array[mid]}) with target (${target}).`,
    });

    if (array[mid] === target) {
      trace.push({
        stepId: trace.length,
        type: 'target-found',
        source: { line: 7 },
        state: { array, sortedIndices: [mid], variables: { target, left, right, mid } },
        explanation: `Target ${target} found at index ${mid}.`,
      });
      return trace;
    } else if (array[mid] < target) {
       trace.push({
        stepId: trace.length,
        type: 'variable',
        source: { line: 9 },
        state: { array, highlights: { indices: [mid] }, variables: { target, left, right, mid } },
        explanation: `${array[mid]} < ${target}. Target must be in the right half. Update left pointer.`,
      });
      left = mid + 1;
    } else {
       trace.push({
        stepId: trace.length,
        type: 'variable',
        source: { line: 11 },
        state: { array, highlights: { indices: [mid] }, variables: { target, left, right, mid } },
        explanation: `${array[mid]} > ${target}. Target must be in the left half. Update right pointer.`,
      });
      right = mid - 1;
    }
    trace[trace.length - 1].state.variables = { ...trace[trace.length - 1].state.variables, left, right };

  }

  trace.push({
    stepId: trace.length,
    type: 'sorted', // Using 'sorted' type for not found message
    source: { line: 14 },
    state: { array, variables: { target } },
    explanation: `Target ${target} not found in the array.`,
  });
  return trace;
};


export function AlgoVisionDashboard() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>(algorithmCategories[0].id);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const [language, setLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState('');
  
  const [trace, setTrace] = useState<ExecutionStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(50); // From 1 to 100

  const [startNode, setStartNode] = useState<string | undefined>(undefined);
  const [targetNode, setTargetNode] = useState<string>('');

  const availableAlgorithms = useMemo(() => {
    return algorithms.filter(algo => algo.category === selectedCategory);
  }, [selectedCategory]);

  const graphNodes = useMemo(() => {
    if (selectedAlgorithm?.category === 'graph' && selectedAlgorithm.trace[0]?.state.graph?.nodes) {
      return selectedAlgorithm.trace[0].state.graph.nodes;
    }
    return [];
  }, [selectedAlgorithm]);
  
  // Effect to handle category changes
  useEffect(() => {
    if (availableAlgorithms.length > 0) {
      handleAlgorithmChange(availableAlgorithms[0].id);
    } else {
      setSelectedAlgorithm(null);
      setStartNode(undefined);
      setTargetNode('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, availableAlgorithms]);
  
  // Effect to handle algorithm or language changes
  useEffect(() => {
    if (selectedAlgorithm) {
      setCode(selectedAlgorithm.code[language]);

      if (selectedAlgorithm.category === 'searching') {
        const initialTarget = selectedAlgorithm.trace[0]?.state.variables?.target;
        setTargetNode(initialTarget !== undefined ? String(initialTarget) : '1');
        const initialArray = selectedAlgorithm.trace[0]?.state.array || [];
        const newTrace = selectedAlgorithm.id === 'linear-search'
          ? generateLinearSearchTrace(initialArray, Number(initialTarget))
          : generateBinarySearchTrace(initialArray, Number(initialTarget));
        setTrace(newTrace);
      } else {
        setTrace(selectedAlgorithm.trace);
        setTargetNode('');
      }

      setCurrentStep(0);
      setIsPlaying(false);
      
      if (selectedAlgorithm.category === 'graph' && graphNodes.length > 0) {
        setStartNode(graphNodes[0].id);
      } else {
        setStartNode(undefined);
      }

    } else {
      setCode('');
      setTrace([]);
      setStartNode(undefined);
      setTargetNode('');
    }
  }, [selectedAlgorithm, language, graphNodes]);

  // Effect for dynamic search algorithm trace generation
  useEffect(() => {
    if (selectedAlgorithm?.category === 'searching') {
      const array = selectedAlgorithm.trace[0].state.array || [];
      const target = Number(targetNode);
      if (!isNaN(target)) {
        let newTrace;
        if (selectedAlgorithm.id === 'linear-search') {
          newTrace = generateLinearSearchTrace(array, target);
        } else if (selectedAlgorithm.id === 'binary-search') {
          newTrace = generateBinarySearchTrace(array, target);
        }
        if (newTrace) {
          setTrace(newTrace);
          setCurrentStep(0);
          setIsPlaying(false);
        }
      }
    }
  }, [targetNode, selectedAlgorithm]);


  const handleAlgorithmChange = (algoId: string) => {
    const algorithm = algorithms.find(a => a.id === algoId);
    if (algorithm) {
      setSelectedAlgorithm(algorithm);
    }
  };

  const handleSave = () => {
    toast({
      title: "Save Snippet",
      description: "This feature is coming soon!",
    });
  };

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, []);

  const handleStepForward = useCallback(() => {
    if (currentStep < trace.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentStep, trace.length]);

  const handleStepBackward = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  useEffect(() => {
    if (isPlaying && trace.length > 1) {
      const interval = (101 - speed) * 10;
      const timer = setTimeout(() => {
        handleStepForward();
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, speed, handleStepForward, trace.length]);

  const currentExecutionStep = trace[currentStep];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 h-full">
      {/* Left Panel */}
      <div className="lg:col-span-3 flex flex-col gap-4 h-full">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-lg">Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Category</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {algorithmCategories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Algorithm</Label>
              <Select value={selectedAlgorithm?.id} onValueChange={handleAlgorithmChange} disabled={!availableAlgorithms.length}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an algorithm" />
                </SelectTrigger>
                <SelectContent>
                  {availableAlgorithms.map(algo => (
                    <SelectItem key={algo.id} value={algo.id}>{algo.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedAlgorithm?.category === 'graph' && graphNodes.length > 0 && (
              <div>
                <Label>Start Node</Label>
                <Select value={startNode} onValueChange={setStartNode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select start node" />
                  </SelectTrigger>
                  <SelectContent>
                    {graphNodes.map(node => (
                      <SelectItem key={node.id} value={node.id}>{node.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {selectedAlgorithm?.category === 'searching' && (
                <div>
                    <Label>Node to Find</Label>
                    <Input 
                        value={targetNode}
                        onChange={(e) => setTargetNode(e.target.value)}
                        placeholder="Enter a number"
                        type="number"
                    />
                </div>
            )}


          </CardContent>
        </Card>
        
        <Card className="flex-1 flex flex-col min-h-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="font-headline text-lg">Code Editor</CardTitle>
              <Tabs value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <TabsList className="h-8">
                  <TabsTrigger value="javascript" className="text-xs px-2 py-1">JavaScript</TabsTrigger>
                  <TabsTrigger value="python" className="text-xs px-2 py-1">Python</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Save</Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 relative">
            <CodeEditor
              code={code}
              onCodeChange={setCode}
              language={language}
              highlightedLine={currentExecutionStep?.source.line}
            />
          </CardContent>
        </Card>
      </div>

      {/* Center Panel */}
      <div className="lg:col-span-6 flex flex-col h-full">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-lg">Visualization</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow min-h-[400px]">
            <Visualizer
              algorithm={selectedAlgorithm}
              executionStep={currentExecutionStep}
            />
          </CardContent>
        </Card>
      </div>

      {/* Right Panel */}
      <div className="lg:col-span-3 flex flex-col h-full">
        <ControlsPanel
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          onReset={handleReset}
          onStepForward={handleStepForward}
          onStepBackward={handleStepBackward}
          speed={speed}
          onSpeedChange={setSpeed}
          currentStep={currentStep}
          totalSteps={trace.length}
          executionStep={currentExecutionStep}
        />
      </div>
    </div>
  );
}
