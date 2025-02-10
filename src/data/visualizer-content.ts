interface VisualizerContent {
  [key: string]: {
    defaultCode: string;
    examples: Array<{
      input: string;
      output: string;
      explanation: string;
    }>;
    settings: {
      animationSpeed: number;
      showControls: boolean;
    };
  };
}

export const visualizerContent: VisualizerContent = {
  'two-pointer': {
    defaultCode: `function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`,
    examples: [
      {
        input: '[2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'nums[0] + nums[1] = 2 + 7 = 9'
      },
      {
        input: '[3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] = 2 + 4 = 6'
      }
    ],
    settings: {
      animationSpeed: 1000,
      showControls: true
    }
  },
  'sliding-window': {
    defaultCode: `function maxSubArray(nums: number[], k: number): number {
  let maxSum = 0;
  let windowSum = 0;
  let start = 0;
  
  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];
    
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[start];
      start++;
    }
  }
  return maxSum;
}`,
    examples: [
      {
        input: '[1, 4, 2, 10, 2, 3, 1, 0, 20], k = 4',
        output: '24',
        explanation: 'Maximum sum subarray of size 4 is [2, 10, 2, 3]'
      }
    ],
    settings: {
      animationSpeed: 800,
      showControls: true
    }
  }
  // Add more patterns...
} as const; 