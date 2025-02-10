export const defaultCode = `function twoSum(nums: number[], target: number): number[] {
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
}`;

export const examples = [
  {
    input: '[2, 7, 11, 15], target = 9',
    output: '[0, 1]',
    explanation: 'nums[0] + nums[1] = 2 + 7 = 9'
  }
];

export const settings = {
  animationSpeed: 1000,
  showControls: true
}; 