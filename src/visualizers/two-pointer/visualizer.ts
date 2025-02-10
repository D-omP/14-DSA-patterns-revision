export function visualize(nums: number[], target: number) {
  // Visualization logic for two pointer pattern
  // This will handle the step-by-step animation
  // Return data needed for rendering
}

interface Step {
  left: number;
  right: number;
  sum: number;
  comparison: boolean;
}

export function getSteps(nums: number[], target: number): Step[] {
  const steps: Step[] = [];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    steps.push({
      left,
      right,
      sum,
      comparison: sum === target
    });

    if (sum === target) {
      break;
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return steps;
} 