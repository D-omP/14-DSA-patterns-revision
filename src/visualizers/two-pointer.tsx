import { useState, useEffect, useRef } from 'react';
import { defaultCode, examples } from './two-pointer/code';
import { getSteps } from './two-pointer/visualizer';

interface Step {
  left: number;
  right: number;
  sum: number;
  comparison: boolean;
}

const TwoPointerVisualizer = () => {
  const [currentStep, setCurrentStep] = useState<Step | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [array, setArray] = useState<number[]>([2, 7, 11, 15]);
  const [target, setTarget] = useState(9);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState(0);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const newSteps = getSteps(array, target);
    setSteps(newSteps);
    setStepIndex(0);
    setCurrentStep(newSteps[0]);
  }, [array, target]);

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1);
      setCurrentStep(steps[stepIndex + 1]);
    } else {
      setIsPlaying(false);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(prev => prev - 1);
      setCurrentStep(steps[stepIndex - 1]);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextStep, speed);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, speed]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Two Pointer Visualization</h3>
        <div className="flex gap-4 mb-4">
          <button
            onClick={prevStep}
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={stepIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={togglePlay}
            className="px-3 py-1 bg-primary-500 text-white rounded"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={nextStep}
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={stepIndex === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>

      {/* Array Visualization */}
      <div className="flex flex-wrap gap-2 mb-4">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`
              w-12 h-12 flex items-center justify-center border rounded
              ${idx === currentStep?.left ? 'bg-blue-200 border-blue-500' : ''}
              ${idx === currentStep?.right ? 'bg-green-200 border-green-500' : ''}
            `}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Current State */}
      {currentStep && (
        <div className="space-y-2 text-sm">
          <p>Left Pointer: {currentStep.left}</p>
          <p>Right Pointer: {currentStep.right}</p>
          <p>Current Sum: {currentStep.sum}</p>
          <p>Target: {target}</p>
          <p>
            Status: {currentStep.comparison ? 'Found Match!' : 'Searching...'}
          </p>
        </div>
      )}

      {/* Code Section */}
      <div className="mt-4">
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code>{defaultCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default TwoPointerVisualizer; 