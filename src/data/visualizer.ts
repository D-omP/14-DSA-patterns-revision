import type { VisualizerComponent } from '../visualizers/types';
import TwoPointerVisualizer from '../visualizers/two-pointer.tsx';

export const visualizerMap: Record<string, VisualizerComponent> = {
  'two-pointer': TwoPointerVisualizer,
  // Add more patterns here
}; 