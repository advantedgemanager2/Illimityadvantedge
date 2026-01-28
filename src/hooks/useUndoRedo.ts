import { useState, useCallback, useRef } from "react";

interface UseUndoRedoOptions {
  maxHistorySize?: number;
}

export function useUndoRedo<T>(
  initialState: T,
  options: UseUndoRedoOptions = {}
) {
  const { maxHistorySize = 50 } = options;
  
  const [history, setHistory] = useState<T[]>([initialState]);
  const [index, setIndex] = useState(0);
  const isInternalUpdate = useRef(false);

  const current = history[index];
  const canUndo = index > 0;
  const canRedo = index < history.length - 1;

  const push = useCallback((newState: T) => {
    setHistory((prev) => {
      // Remove any future states (redo history) and add new state
      const newHistory = prev.slice(0, index + 1);
      newHistory.push(newState);
      
      // Limit history size
      if (newHistory.length > maxHistorySize) {
        newHistory.shift();
        return newHistory;
      }
      
      return newHistory;
    });
    setIndex((prev) => Math.min(prev + 1, maxHistorySize - 1));
  }, [index, maxHistorySize]);

  const undo = useCallback(() => {
    if (canUndo) {
      isInternalUpdate.current = true;
      setIndex((prev) => prev - 1);
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      isInternalUpdate.current = true;
      setIndex((prev) => prev + 1);
    }
  }, [canRedo]);

  const reset = useCallback((newState: T) => {
    setHistory([newState]);
    setIndex(0);
  }, []);

  const isUndoRedo = useCallback(() => {
    const result = isInternalUpdate.current;
    isInternalUpdate.current = false;
    return result;
  }, []);

  return {
    current,
    push,
    undo,
    redo,
    reset,
    canUndo,
    canRedo,
    isUndoRedo,
    historyLength: history.length,
    currentIndex: index,
  };
}
