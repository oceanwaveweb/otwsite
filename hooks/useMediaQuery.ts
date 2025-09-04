"use client";

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set the initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Define a callback for media change events
    const listener = () => {
      setMatches(media.matches);
    };
    
    // Add the callback as a listener
    media.addEventListener('change', listener);
    
    // Remove the listener on cleanup
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [matches, query]);
  
  return matches;
}