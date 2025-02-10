import type { ComponentType } from 'react';

export interface VisualizerComponent extends ComponentType<any> {
  displayName?: string;
} 