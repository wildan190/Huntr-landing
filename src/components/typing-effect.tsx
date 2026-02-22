'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingEffect({ text, className, speed = 100 }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    // When the source text changes, reset the animation
    setDisplayedText(''); 
    
    // Ensure there is text to animate
    if (!text) return;

    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        // Use substring to avoid potential race conditions with state updates
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    // Cleanup function to clear the interval when the component
    // unmounts or the effect re-runs
    return () => clearInterval(intervalId);
  }, [text, speed]); // Re-run effect if text or speed changes

  return (
    <p className={cn("mt-4 min-h-[3rem] text-lg sm:text-xl text-white/80 max-w-2xl mx-auto", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
