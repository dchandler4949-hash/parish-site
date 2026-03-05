"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Type, 
  Keyboard, 
  RotateCcw 
} from 'lucide-react';

export default function AccessibilityToolbar() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }
  }, [largeText]);

  const reset = () => {
    setHighContrast(false);
    setLargeText(false);
  };

  return (
    <nav 
      className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-2 sticky top-0 z-40 print:hidden"
      aria-label="Accessibility Options"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
        <span className="hidden sm:inline-flex items-center gap-1 uppercase tracking-widest font-bold">
          <Keyboard className="w-3 h-3" /> Accessibility:
        </span>
        
        <div className="flex gap-2">
          <Button 
            variant={highContrast ? "default" : "outline"} 
            size="sm" 
            className="h-8 text-[10px] rounded-none border-zinc-300"
            onClick={() => setHighContrast(!highContrast)}
            aria-pressed={highContrast}
          >
            <Eye className="w-3 h-3 mr-1" /> {highContrast ? "Normal Contrast" : "High Contrast"}
          </Button>

          <Button 
            variant={largeText ? "default" : "outline"} 
            size="sm" 
            className="h-8 text-[10px] rounded-none border-zinc-300"
            onClick={() => setLargeText(!largeText)}
            aria-pressed={largeText}
          >
            <Type className="w-3 h-3 mr-1" /> {largeText ? "Normal Text" : "Large Text"}
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-[10px] hover:text-primary"
            onClick={reset}
          >
            <RotateCcw className="w-3 h-3 mr-1" /> Reset Settings
          </Button>
        </div>
      </div>
    </nav>
  );
}
