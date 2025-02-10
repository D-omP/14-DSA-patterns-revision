export const defaultCode = `function maxSubArray(nums: number[], k: number): number {
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
}`;

export const examples = [
  {
    input: '[1, 4, 2, 10, 2, 3, 1, 0, 20], k = 4',
    output: '24',
    explanation: 'Maximum sum subarray of size 4 is [2, 10, 2, 3]'
  }
];

export const settings = {
  animationSpeed: 800,
  showControls: true
}; 