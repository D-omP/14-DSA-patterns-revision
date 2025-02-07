interface CourseContent {
  [key: string]: {
    practice: {
      problems: Array<{
        title: string;
        difficulty: 'Easy' | 'Medium' | 'Hard';
        platform: 'LeetCode' | 'GeeksforGeeks' | 'AlgoExpert';
        url: string;
        description: string;
      }>;
    };
    resources: {
      videos: Array<{
        title: string;
        url: string;
        duration: string;
        platform: string;
      }>;
      articles: Array<{
        title: string;
        url: string;
        author: string;
        platform: string;
      }>;
      visualizations: Array<{
        title: string;
        url: string;
        description: string;
      }>;
    };
  };
}

export const courseContent: CourseContent = {
  'two-pointer': {
    practice: {
      problems: [
        {
          title: "Two Sum II - Input Array Is Sorted",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
          description: "Find two numbers in a sorted array that add up to a target."
        },
        {
          title: "3Sum",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/3sum/",
          description: "Find all unique triplets that sum to zero."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Two Pointers Technique",
          url: "https://youtu.be/example3",
          duration: "18:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Master Two Pointers Technique",
          url: "https://medium.com/example3",
          author: "Alice Johnson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Two Pointers Visualization",
          url: "https://visualgo.net/example2",
          description: "Interactive visualization of two pointers technique"
        }
      ]
    }
  },
  'sliding-window': {
    practice: {
      problems: [
        {
          title: "Maximum Sum Subarray of Size K",
          difficulty: "Easy",
          platform: "GeeksforGeeks",
          url: "https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",
          description: "Find the maximum sum of a contiguous subarray of size K."
        },
        {
          title: "Longest Substring Without Repeating Characters",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          description: "Find the length of the longest substring without repeating characters."
        },
        {
          title: "Minimum Window Substring",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/minimum-window-substring/",
          description: "Find the minimum window in a string containing all characters of another string."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Sliding Window Technique - Algorithm",
          url: "https://youtu.be/example1",
          duration: "15:24",
          platform: "YouTube"
        },
        {
          title: "Sliding Window Pattern Implementation",
          url: "https://youtu.be/example2",
          duration: "20:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Sliding Window Pattern",
          url: "https://medium.com/example1",
          author: "John Doe",
          platform: "Medium"
        },
        {
          title: "Mastering Sliding Window Technique",
          url: "https://dev.to/example2",
          author: "Jane Smith",
          platform: "Dev.to"
        }
      ],
      visualizations: [
        {
          title: "Sliding Window Visualizer",
          url: "https://visualgo.net/example",
          description: "Interactive visualization of sliding window algorithm"
        }
      ]
    }
  }
}; 