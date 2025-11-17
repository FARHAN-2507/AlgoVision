import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  language: 'javascript' | 'python';
  highlightedLine?: number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onCodeChange, highlightedLine }) => {
  const lines = code.split('\n');

  return (
    <div className="relative h-full font-code text-sm bg-muted/30 rounded-b-lg overflow-hidden">
      <ScrollArea className="h-full">
        <div className="relative p-4">
          {lines.map((line, index) => {
            const isHighlighted = (index + 1) === highlightedLine;
            return (
              <div
                key={index}
                className={`flex items-start transition-colors duration-200 ${isHighlighted ? 'bg-primary/20' : ''}`}
              >
                <span className="w-10 text-right pr-4 text-muted-foreground select-none">{index + 1}</span>
                <pre className="flex-1 whitespace-pre-wrap break-words">{line}</pre>
              </div>
            );
          })}
        </div>
      </ScrollArea>
       <div className="absolute inset-0 p-4 opacity-50 pointer-events-none">
          <Textarea 
            value={code} 
            onChange={(e) => onCodeChange(e.target.value)}
            className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-foreground border-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 p-4 font-code text-sm leading-relaxed" 
            style={{paddingLeft: '4rem'}}
          />
        </div>
    </div>
  );
};

export default CodeEditor;
