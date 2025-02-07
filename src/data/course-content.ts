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
  },
  'fast-slow-pointers': {
    practice: {
      problems: [
        {
          title: "Linked List Cycle",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/linked-list-cycle/",
          description: "Determine if a linked list has a cycle in it."
        },
        {
          title: "Middle of the Linked List",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/middle-of-the-linked-list/",
          description: "Find the middle node of a linked list."
        },
        {
          title: "Find the Duplicate Number",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
          description: "Find the duplicate number using Floyd's algorithm."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Floyd's Cycle Detection Algorithm",
          url: "https://youtu.be/example1",
          duration: "12:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Floyd's Algorithm",
          url: "https://medium.com/example1",
          author: "John Doe",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Cycle Detection Visualization",
          url: "https://visualgo.net/example1",
          description: "Interactive visualization of Floyd's algorithm"
        }
      ]
    }
  },
  'merge-intervals': {
    practice: {
      problems: [
        {
          title: "Merge Intervals",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/merge-intervals/",
          description: "Merge all overlapping intervals."
        },
        {
          title: "Insert Interval",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/insert-interval/",
          description: "Insert a new interval and merge if necessary."
        },
        {
          title: "Meeting Rooms II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/meeting-rooms-ii/",
          description: "Find minimum number of meeting rooms required."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Merge Intervals Explained",
          url: "https://youtu.be/example2",
          duration: "15:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Mastering Interval Problems",
          url: "https://medium.com/example2",
          author: "Jane Smith",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Interval Merging Visualizer",
          url: "https://visualgo.net/example2",
          description: "Interactive visualization of interval merging"
        }
      ]
    }
  },
  'cyclic-sort': {
    practice: {
      problems: [
        {
          title: "Missing Number",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/missing-number/",
          description: "Find the missing number in range [0, n]."
        },
        {
          title: "Find All Numbers Disappeared",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
          description: "Find all numbers that disappeared in an array."
        },
        {
          title: "Find the Duplicate Number",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
          description: "Find the duplicate number in array using cyclic sort."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Cyclic Sort Pattern",
          url: "https://youtu.be/example3",
          duration: "14:20",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Cyclic Sort",
          url: "https://medium.com/example3",
          author: "Alex Johnson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Cyclic Sort Visualization",
          url: "https://visualgo.net/example3",
          description: "Interactive visualization of cyclic sort algorithm"
        }
      ]
    }
  },
  'in-place-reversal': {
    practice: {
      problems: [
        {
          title: "Reverse Linked List",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-linked-list/",
          description: "Reverse a singly linked list."
        },
        {
          title: "Reverse Linked List II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-linked-list-ii/",
          description: "Reverse a linked list from position m to n."
        },
        {
          title: "Reverse Nodes in k-Group",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
          description: "Reverse the nodes of a linked list k at a time."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "In-place Reversal of a LinkedList",
          url: "https://youtu.be/example4",
          duration: "16:20",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding In-place Reversal",
          url: "https://medium.com/example4",
          author: "Bob Wilson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "LinkedList Reversal Visualizer",
          url: "https://visualgo.net/example4",
          description: "Interactive visualization of linked list reversal"
        }
      ]
    }
  },
  'breadth-first-search': {
    practice: {
      problems: [
        {
          title: "Binary Tree Level Order Traversal",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          description: "Traverse a binary tree in level order."
        },
        {
          title: "Word Ladder",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/word-ladder/",
          description: "Find shortest transformation sequence from start to end word."
        },
        {
          title: "Course Schedule",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule/",
          description: "Determine if it's possible to finish all courses."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "BFS Algorithm Explained",
          url: "https://youtu.be/example5",
          duration: "20:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding BFS",
          url: "https://medium.com/example5",
          author: "Sarah Brown",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "BFS Visualizer",
          url: "https://visualgo.net/example5",
          description: "Interactive visualization of BFS algorithm"
        }
      ]
    }
  },
  'depth-first-search': {
    practice: {
      problems: [
        {
          title: "Path Sum",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/path-sum/",
          description: "Find if root-to-leaf path sum exists."
        },
        {
          title: "Number of Islands",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/number-of-islands/",
          description: "Count the number of islands in a grid."
        },
        {
          title: "Course Schedule II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule-ii/",
          description: "Find ordering of courses."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "DFS Algorithm Explained",
          url: "https://youtu.be/example6",
          duration: "18:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding DFS",
          url: "https://medium.com/example6",
          author: "Mike Johnson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "DFS Visualizer",
          url: "https://visualgo.net/example6",
          description: "Interactive visualization of DFS algorithm"
        }
      ]
    }
  },
  'binary-search': {
    practice: {
      problems: [
        {
          title: "Binary Search",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-search/",
          description: "Classic binary search implementation."
        },
        {
          title: "Search in Rotated Sorted Array",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          description: "Search target in a rotated sorted array."
        },
        {
          title: "Find First and Last Position",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
          description: "Find the range of target element in sorted array."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Binary Search Explained",
          url: "https://youtu.be/example7",
          duration: "15:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Mastering Binary Search",
          url: "https://medium.com/example7",
          author: "David Chen",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Binary Search Visualization",
          url: "https://visualgo.net/example7",
          description: "Interactive visualization of binary search algorithm"
        }
      ]
    }
  },
  'greedy-algorithms': {
    practice: {
      problems: [
        {
          title: "Jump Game",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/jump-game/",
          description: "Determine if you can reach the last index."
        },
        {
          title: "Task Scheduler",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/task-scheduler/",
          description: "Schedule tasks with cooldown period."
        },
        {
          title: "Gas Station",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/gas-station/",
          description: "Find starting gas station for completing circuit."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Greedy Algorithms Explained",
          url: "https://youtu.be/example8",
          duration: "22:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Greedy Algorithms",
          url: "https://medium.com/example8",
          author: "Emily Wilson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Greedy Algorithm Visualizer",
          url: "https://visualgo.net/example8",
          description: "Interactive visualization of greedy algorithms"
        }
      ]
    }
  },
  'backtracking': {
    practice: {
      problems: [
        {
          title: "Subsets",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/subsets/",
          description: "Generate all possible subsets of a set."
        },
        {
          title: "N-Queens",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/n-queens/",
          description: "Place N queens on an NxN chessboard."
        },
        {
          title: "Palindrome Partitioning",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/palindrome-partitioning/",
          description: "Find all possible palindrome partitioning of a string."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Backtracking Algorithm Explained",
          url: "https://youtu.be/example9",
          duration: "25:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Master Backtracking",
          url: "https://medium.com/example9",
          author: "Frank Miller",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Backtracking Visualizer",
          url: "https://visualgo.net/example9",
          description: "Interactive visualization of backtracking algorithms"
        }
      ]
    }
  },
  'dynamic-programming': {
    practice: {
      problems: [
        {
          title: "Climbing Stairs",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/climbing-stairs/",
          description: "Count ways to climb n stairs taking 1 or 2 steps."
        },
        {
          title: "Longest Common Subsequence",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-common-subsequence/",
          description: "Find length of longest common subsequence."
        },
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          platform: "GeeksforGeeks",
          url: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
          description: "Classic knapsack problem with binary choice."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Dynamic Programming Explained",
          url: "https://youtu.be/example10",
          duration: "30:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Introduction to Dynamic Programming",
          url: "https://medium.com/example10",
          author: "Grace Lee",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "DP Algorithm Visualizer",
          url: "https://visualgo.net/example10",
          description: "Interactive visualization of dynamic programming"
        }
      ]
    }
  },
  'union-find': {
    practice: {
      problems: [
        {
          title: "Number of Provinces",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/number-of-provinces/",
          description: "Find number of connected components in graph."
        },
        {
          title: "Redundant Connection",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/redundant-connection/",
          description: "Find edge that creates a cycle in graph."
        },
        {
          title: "Accounts Merge",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/accounts-merge/",
          description: "Merge accounts with common emails."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Union Find Data Structure",
          url: "https://youtu.be/example11",
          duration: "20:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Union-Find",
          url: "https://medium.com/example11",
          author: "Henry Zhang",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Disjoint Set Visualizer",
          url: "https://visualgo.net/example11",
          description: "Interactive visualization of union-find operations"
        }
      ]
    }
  }
}; 