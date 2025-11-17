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
import { Save } from "lucide-react";
import { algorithmCategories, algorithms } from '@/lib/algorithms';
import type { Algorithm, ExecutionStep, Language } from '@/lib/types';
import CodeEditor from './code-editor';
import Visualizer from './visualizer';
import ControlsPanel from './controls-panel';
import { useToast } from '@/hooks/use-toast';
import { sleep } from '@/lib/utils';

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

  const availableAlgorithms = useMemo(() => {
    return algorithms.filter(algo => algo.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (availableAlgorithms.length > 0) {
      handleAlgorithmChange(availableAlgorithms[0].id);
    } else {
      setSelectedAlgorithm(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableAlgorithms]);

  useEffect(() => {
    if (selectedAlgorithm) {
      setCode(selectedAlgorithm.code[language]);
      setTrace(selectedAlgorithm.trace);
      setCurrentStep(0);
      setIsPlaying(false);
    } else {
      setCode('');
      setTrace([]);
    }
  }, [selectedAlgorithm, language]);

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
    if (isPlaying) {
      const interval = (101 - speed) * 10;
      const timer = setTimeout(() => {
        handleStepForward();
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, speed, handleStepForward]);

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
              <label className="text-sm font-medium mb-2 block">Category</label>
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
              <label className="text-sm font-medium mb-2 block">Algorithm</label>
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
          <CardContent className="flex-grow min-h-[300px]">
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
